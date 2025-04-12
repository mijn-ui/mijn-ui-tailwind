import path from "path"
import fs from "fs"
import HTMLReactParser from "html-react-parser/lib/index"

export type FilePathOptions = {
  basePath?: string
  addExtension?: boolean
  extensionName?: string
}

/**
 * Builds a file path based on the provided options
 *
 * @param filePath - The relative path to the file
 * @param options - Configuration options for the file path
 * @returns The absolute file path
 * @throws Error if the file path is invalid
 */
function buildFilePath(
  filePath: string,
  { basePath = "/public", addExtension = true, extensionName = "html" }: FilePathOptions,
): string {
  if (!filePath || typeof filePath !== "string") {
    throw new Error("Invalid file path provided")
  }

  return path.join(process.cwd(), basePath, addExtension ? `${filePath}.${extensionName}` : filePath)
}

/**
 * Reads a file from the file system
 *
 * @param filePath - Path to the file
 * @returns File content as a string
 * @throws Error if the file cannot be read
 */
function readFileSync(filePath: string): string {
  try {
    return fs.readFileSync(filePath, "utf8")
  } catch (_) {
    throw new Error(`Failed to read file: ${filePath}`)
  }
}

/**
 * Parses HTML content into React elements
 *
 * @param html - HTML content as a string
 * @returns React elements
 */
export const getHTMLContent = (
  contentPath: string,
  options: FilePathOptions = {},
): ReturnType<typeof HTMLReactParser> => {
  try {
    const absolutePath = buildFilePath(contentPath, options)
    const html = readFileSync(absolutePath)
    return HTMLReactParser(html)
  } catch (error) {
    console.error(`Failed to parse HTML content: ${contentPath}`, error)
    return <div className="text-red-500">The requested content is not available.</div>
  }
}

/**
 * Gets raw HTML source code from a file
 *
 * @param contentPath - Path to the HTML file
 * @param options - Configuration options for the file path
 * @returns HTML content as a string
 */
export const getSourceCode = (contentPath: string, options: FilePathOptions = {}): string => {
  try {
    const absolutePath = buildFilePath(contentPath, options)
    const htmlString = readFileSync(absolutePath)
    return htmlString.replace(/<!--\s*@.*?-->\s*(?=\S)/gs, "")
  } catch (error) {
    console.error(`Failed to load source code for path: ${contentPath}`, error)
    return `Error loading source code for ${contentPath}`
  }
}
