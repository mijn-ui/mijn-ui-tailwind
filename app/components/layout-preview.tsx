import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/app/components/ui/resizable"
import { ViewPages } from "@/static/_view"
import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import Link from "next/link"
import { LuExternalLink } from "react-icons/lu"
import { Button } from "./ui/button"
import { getSourceCode } from "@/lib/get-html"
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock"

type BlockerViewerProps = {
  name: string
  hideCode?: boolean
}

const LayoutViewer = ({ name, hideCode }: BlockerViewerProps) => {
  const template = ViewPages[name]
  const code = getSourceCode(template.htmlSrc)
  const url = `/view/${template.name}`

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

export { LayoutViewer }
