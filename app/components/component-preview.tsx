import { getHTMLContent, getSourceCode } from "@/lib/get-html"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock"
import PreviewWrapper from "./preview-wrapper"

type CodePreviewerProps = {
  src: string
  tabs?: boolean
  hideCode?: boolean
} & React.ComponentPropsWithoutRef<"div">

const ComponentPreview = ({ src, hideCode = false, ...props }: CodePreviewerProps) => {
  const htmlComponent = getHTMLContent(src, { basePath: "/public/components/" })
  const code = getSourceCode(src, { basePath: "/public/components/" })

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
        <PreviewWrapper {...props}>{htmlComponent}</PreviewWrapper>
      </TabsContent>

      {!hideCode && (
        <TabsContent value="code">
          <DynamicCodeBlock lang="html" code={code} />
        </TabsContent>
      )}
    </Tabs>
  )
}

export default ComponentPreview
