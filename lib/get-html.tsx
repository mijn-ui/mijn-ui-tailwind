import path from "path"
import fs from "fs"
import HTMLReactParser from "html-react-parser/lib/index"

type HtmlSource = string | { htmlSrc: string }
interface HtmlOptions {
  basePath?: string
  addExtension?: boolean
}

/**
 * Gets HTML content from a file and parses it to React elements
 *
 * @param source - Path to HTML file or object with htmlSrc property
 * @param options - Configuration options for file path resolution
 * @returns Parsed HTML content as React elements
 */
export const getHTMLContent = (source: HtmlSource, options: HtmlOptions = {}): ReturnType<typeof HTMLReactParser> => {
  const { basePath = "static/", addExtension = true } = options

  // Handle both string paths and objects with htmlSrc
  const htmlPath = typeof source === "string" ? source : source.htmlSrc

  try {
    // Build file path based on options
    const filePath = path.join(process.cwd(), basePath, addExtension ? `${htmlPath}.html` : htmlPath)

    const html = fs.readFileSync(filePath, "utf8")
    return HTMLReactParser(html)
  } catch (error) {
    console.error(`Failed to load HTML content: ${htmlPath}`, error)
    return <div className="text-red-500">Error loading HTML content</div>
  }
}
