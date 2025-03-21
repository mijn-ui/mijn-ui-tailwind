import path from "path"
import fs from "fs"
import HTMLReactParser from "html-react-parser/lib/index"

interface fileOptions {
  basePath?: string
  addExtension?: boolean
}

/**
 * Helper function to build the file path
 */
const buildFilePath = (url: string, { basePath = "static/", addExtension = true }: fileOptions): string => {
  if (!url || typeof url !== "string") {
    throw new Error("Invalid URL parameter provided.")
  }
  return path.join(process.cwd(), basePath, addExtension ? `${url}.html` : url)
}

/**
 * Gets HTML content from a file and parses it to React elements
 */
export const getHTMLContent = (url: string, options: fileOptions = {}): ReturnType<typeof HTMLReactParser> => {
  try {
    const filePath = buildFilePath(url, options)
    const html = fs.readFileSync(filePath, "utf8")
    return HTMLReactParser(html)
  } catch (error) {
    console.error(`Failed to load HTML content: ${url}`, error)
    return <div className="text-red-500">The requested content is not available.</div>
  }
}

/**
 * Gets raw HTML source code from a file
 */
export const getSourceCode = (url: string, options: fileOptions = {}): string => {
  try {
    const filePath = buildFilePath(url, options)
    return fs.readFileSync(filePath, "utf8")
  } catch (error) {
    console.error(`Failed to load source code for URL ${url}:`, error)
    return `Error loading source code for ${url}`
  }
}
