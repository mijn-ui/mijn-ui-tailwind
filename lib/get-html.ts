import path from "path"
import fs from "fs"

/**
 * Gets HTML content as a string, ready for rendering with dangerouslySetInnerHTML
 *
 * @param contentPath - Path to the HTML file
 * @param options - Configuration options for the file path
 * @returns HTML content as a cleaned string
 */
export function getHTMLContent(contentPath: string, cleanMetaTags = false): string {
  try {
    const absolutePath = path.join(process.cwd(), contentPath)
    const htmlContent = fs.readFileSync(absolutePath, "utf8")

    return cleanMetaTags ? htmlContent.replace(/<!--\s*@.*?-->\s*(?=\S)/gs, "") : htmlContent
  } catch (error) {
    console.error(`Failed to get HTML content: ${contentPath}`, error)
    return `<div class="text-red-500">The requested content is not available.</div>`
  }
}
