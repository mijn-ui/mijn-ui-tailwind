import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/app/components/ui/resizable"
import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import Link from "next/link"
import { LuExternalLink } from "react-icons/lu"
import { Button } from "./ui/button"
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock"
import { viewRegistry } from "@/registry/view-metadata"
import { ViewCategory } from "@/scripts/build-views-metadata.mjs"
import { getSourceCode } from "@/lib/get-html"

type ResponsiveViewerProps = {
  name: string
  hideCode?: boolean
  category: ViewCategory
}

const ResponsiveViewer = async ({ category, name, hideCode }: ResponsiveViewerProps) => {
  const template = viewRegistry[category]?.[name]

  if (!template) {
    return (
      <div className="flex min-h-64 flex-col items-start justify-center gap-2 rounded-md border p-6 text-sm text-red-500">
        <div>
          Layout <code className="relative rounded bg-muted px-[0.2rem] py-0 font-mono text-sm">{name}</code> not found.
        </div>
        <div>
          This could be due to:
          <ul className="mt-2 list-disc pl-5">
            <li>A mismatch between the name in your MDX file and the actual HTML file name</li>
            <li>The HTML file missing from the expected location in public/view directory</li>
            <li>Incorrect metadata formatting in the HTML file</li>
          </ul>
        </div>
        <div>
          Please verify the layout name in your MDX file matches one of the available layouts:{" "}
          {Object.keys(viewRegistry).length > 0
            ? Object.keys(viewRegistry).map((key) => (
                <code key={key} className="mx-1 rounded bg-muted px-[0.2rem] py-0 font-mono text-xs">
                  {key}
                </code>
              ))
            : "No layouts available"}
        </div>
      </div>
    )
  }
  const code = getSourceCode(template.filePath, { basePath: "", addExtension: false })
  const url = `/view/${category}/${template.name}`

  return (
    <Tabs defaultValue="preview">
      {!hideCode && (
        <TabsList className="mb-2 h-12 w-full justify-between rounded-none border-b !bg-transparent">
          <div className="flex items-center">
            <TabsTrigger className="rounded-md hover:text-accent-text data-[state=active]:bg-default" value="preview">
              Preview
            </TabsTrigger>
            <TabsTrigger className="rounded-md hover:text-accent-text data-[state=active]:bg-default" value="code">
              Code
            </TabsTrigger>
          </div>
          <Button asChild variant="ghost" iconOnly size="xs">
            <Link href={url} target="_blank">
              <LuExternalLink />
            </Link>
          </Button>
        </TabsList>
      )}

      <div
        className="layout-viewer"
        style={
          {
            "--layout-viewer-height": `${template.iframeHeight || 740}px`,
          } as React.CSSProperties
        }>
        <TabsContent value="preview">
          <div className="grid w-full gap-4">
            <ResizablePanelGroup direction="horizontal" className="relative z-10 rounded-xl">
              <ResizablePanel
                className="relative aspect-[4/2.5] rounded-xl border bg-main md:aspect-auto"
                defaultSize={100}
                minSize={40}>
                <iframe
                  src={`/tailwind/${url}`}
                  height={template.iframeHeight || 740}
                  className="relative z-20 w-full bg-main"
                />
              </ResizablePanel>
              <ResizableHandle className="relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-x-px after:-translate-y-1/2 after:rounded-full after:bg-main-border after:transition-all after:hover:h-10 md:block" />
              <ResizablePanel defaultSize={0} minSize={0} />
            </ResizablePanelGroup>
          </div>
        </TabsContent>

        {!hideCode && (
          <TabsContent value="code">
            <DynamicCodeBlock lang="html" code={code} />
          </TabsContent>
        )}
      </div>
    </Tabs>
  )
}

type ViewerProps = Omit<ResponsiveViewerProps, "category">

const LayoutViewer = ({ name, hideCode }: ViewerProps) => {
  return <ResponsiveViewer category="layouts" name={name} hideCode={hideCode} />
}

const BlockViewer = ({ name, hideCode }: ViewerProps) => {
  return <ResponsiveViewer category="blocks" name={name} hideCode={hideCode} />
}

export { ResponsiveViewer, LayoutViewer, BlockViewer }
