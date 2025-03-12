"use client"

import HTMLReactParser from "html-react-parser/lib/index"

const ParsedComponent = ({ html }: { html: string }) => {
  const parsedContent = HTMLReactParser(html)
  return parsedContent
}

export default ParsedComponent
