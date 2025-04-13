import { getHTMLContent } from "@/lib/get-html"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock"
import PreviewWrapper from "./preview-wrapper"
import { viewRegistry } from "@/registry"

type CodePreviewerProps = {
  name: string
  tabs?: boolean
  hideCode?: boolean
} & React.ComponentPropsWithoutRef<"div">

const ComponentPreview = ({ name, hideCode = false, ...props }: CodePreviewerProps) => {
  const component = viewRegistry[name]
  const htmlContent = getHTMLContent(component?.filePath)

  return (
    <Tabs defaultValue="preview">
      {!hideCode && (
        <TabsList className="mb-2 h-12 w-full justify-start rounded-none border-b !bg-transparent">
          <TabsTrigger className="rounded-md data-[state=active]:bg-default" value="preview">
            Preview
          </TabsTrigger>
          <TabsTrigger className="rounded-md data-[state=active]:bg-default" value="code">
            Code
          </TabsTrigger>
        </TabsList>
      )}

      <TabsContent value="preview">
        <PreviewWrapper {...props} dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </TabsContent>

      {!hideCode && (
        <TabsContent value="code">
          <DynamicCodeBlock lang="html" code={htmlContent} />
        </TabsContent>
      )}
    </Tabs>
  )
}

export default ComponentPreview
