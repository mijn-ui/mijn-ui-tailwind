import fs from "fs"
import path from "path"

export type ViewCategory = "layouts" | "blocks"

type ViewDirectories = {
  path: string
  category: ViewCategory
}

export type ViewMetadata = {
  title: string
  description: string
  iframeHeight: number
}

export type ViewItem = ViewMetadata & {
  name: string
  filePath: string
}

export type GroupedViews = {
  [category: string]: {
    [name: string]: ViewItem
  }
}

export const VIEW_DIRECTORIES: ViewDirectories[] = [
  { path: "/public/view/layouts", category: "layouts" },
  { path: "/public/view/blocks", category: "blocks" },
] as const

export const DEFAULT_IFRAME_HEIGHT = "740"

/**
 * Extracts metadata from HTML comments
 */
function extractMetadata(html: string): ViewMetadata {
  const regex = /@(title|description|iframe-height|tags): (.+)/g
  const result: Partial<Record<string, string>> = {}
  let match

  while ((match = regex.exec(html)) !== null) {
    const [, key, value] = match
    result[key as keyof ViewMetadata] = value.trim()
  }

  return {
    title: result.title ?? "",
    description: result.description ?? "",
    iframeHeight: parseInt(result["iframe-height"] ?? DEFAULT_IFRAME_HEIGHT),
  }
}

export async function buildViewsMetadata() {
  const views: GroupedViews = {}

  // Process each directory
  for (const { path: dirPath, category } of VIEW_DIRECTORIES) {
    // Initialize the category object if it doesn't exist
    if (!views[category]) {
      views[category] = {}
    }

    const baseDir = path.join(process.cwd(), dirPath)

    try {
      const files = fs.readdirSync(baseDir)

      for (const file of files) {
        if (file.endsWith(".html")) {
          const filePath = path.join(baseDir, file)
          const content = fs.readFileSync(filePath, "utf-8")
          const name = file.replace(".html", "")

          views[category][name] = {
            name,
            filePath: path.join(dirPath, file),
            ...extractMetadata(content),
          }
        }
      }
    } catch (error) {
      console.warn(`Failed to read directory: ${dirPath}`, error)
    }
  }

  const tsContent = `// THIS FILE IS AUTO-GENERATED - DO NOT EDIT DIRECTLY
export const viewRegistry: Record<string, any> = ${JSON.stringify(views, null, 2)};
`

  const registryDir = path.join(process.cwd(), "registry")
  const registryFile = path.join(registryDir, "view-metadata.ts")

  if (!fs.existsSync(registryDir)) {
    fs.mkdirSync(registryDir, { recursive: true })
    console.log(`Created directory: ${registryDir}`)
  }

  fs.writeFileSync(registryFile, tsContent)
  console.log(`Generated view registry at: ${registryFile}`)
}

buildViewsMetadata()
