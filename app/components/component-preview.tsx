import React from "react"
import { cn } from "@/lib/utils"
import { getHTMLContent } from "@/lib/get-html"

type CodePreviewerProps = React.ComponentPropsWithoutRef<"div"> & {
  src: string
  children?: React.ReactNode
}

const ComponentPreview = ({ src, className, children, ...props }: CodePreviewerProps) => {
  const htmlComponent = getHTMLContent(src)

  return (
    <div
      className={cn(
        "not-prose relative flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5",
        className,
      )}
      {...props}>
      {htmlComponent}
      {children}
    </div>
  )
}

export default ComponentPreview
