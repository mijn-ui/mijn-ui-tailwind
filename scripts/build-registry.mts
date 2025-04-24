/**
 * Component Registry Builder
 *
 * This script scans HTML files in specified directories and builds a TypeScript registry
 * of all UI components and view templates. The registry is used to:
 *
 * 1. Provide type-safe access to components in documentation
 * 2. Generate metadata for rendering examples
 * 3. Create a central catalog of all available components
 *
 * RULES:
 * - Components must have unique filenames across the entire project
 * - The script only scans 2 levels deep (e.g. components/accordion/accordion.html)
 * - Views should include metadata comments for title and description
 */
import fs from "fs"
import path from "path"

type ComponentType = "view" | "component"

const SOURCE_DIRECTORIES = [
  { path: "/public/components", type: "component" as const },
  { path: "/public/view", type: "view" as const },
]

export const DEFAULT_IFRAME_HEIGHT = "740"

export type RegistryItem = {
  name: string
  filePath: string
  type: ComponentType
  title?: string
  description?: string
  iframeHeight?: number
}

/**
 * Extracts metadata from HTML comments
 *
 * Looks for specially formatted comments like:
 * <!--
 * @title: Component Title
 * @description: Component description
 * @iframe-height: 500
 * -->
 */
function extractMetadata(html: string): {
  title: string
  description: string
  iframeHeight: number
} {
  const regex = /@(title|description|iframe-height|tags): (.+)/g
  const result: Partial<Record<string, string>> = {}
  let match

  while ((match = regex.exec(html)) !== null) {
    const [, key, value] = match
    result[key] = value.trim()
  }

  return {
    title: result.title ?? "",
    description: result.description ?? "",
    iframeHeight: parseInt(result["iframe-height"] ?? DEFAULT_IFRAME_HEIGHT),
  }
}

/**
 * Scans directories for HTML files, limited to 2 levels deep
 *
 * For example:
 * - /public/components/button.html (level 1)
 * - /public/components/accordion/accordion.html (level 2)
 * - /public/view/layouts/sidebar.html (level 2)
 */
function scanDirectoryTwoLevelsDeep(baseDirPath: string, type: ComponentType): RegistryItem[] {
  const items: RegistryItem[] = []
  const baseFullPath = path.join(process.cwd(), baseDirPath)

  try {
    // Check if base directory exists
    if (!fs.existsSync(baseFullPath)) {
      console.warn(`Base directory not found: ${baseDirPath}`)
      return items
    }

    // LEVEL 1: Scan base directory for HTML files
    const baseFiles = fs.readdirSync(baseFullPath)

    for (const file of baseFiles) {
      const filePath = path.join(baseFullPath, file)
      const stat = fs.statSync(filePath)

      if (stat.isDirectory()) {
        // LEVEL 2: Scan subdirectory for HTML files
        const subdirPath = path.join(baseDirPath, file)
        const subdirFullPath = path.join(process.cwd(), subdirPath)
        const subdirFiles = fs.readdirSync(subdirFullPath)

        for (const subfile of subdirFiles) {
          if (subfile.endsWith(".html")) {
            const subfilePath = path.join(subdirPath, subfile)
            const content = fs.readFileSync(path.join(process.cwd(), subfilePath), "utf-8")
            const metadata = type === "view" ? extractMetadata(content) : {}
            const filename = path.basename(subfile, ".html")

            items.push({
              name: filename,
              filePath: subfilePath.replace(/\\/g, "/"),
              type,
              ...metadata,
            })
          }
        }
      } else if (file.endsWith(".html")) {
        // Process HTML file in base directory
        const content = fs.readFileSync(filePath, "utf-8")
        const metadata = type === "view" ? extractMetadata(content) : {}
        const filename = path.basename(file, ".html")

        items.push({
          name: filename,
          filePath: path.join(baseDirPath, file).replace(/\\/g, "/"),
          type,
          ...metadata,
        })
      }
    }

    return items
  } catch (error) {
    console.warn(`Failed to scan directory: ${baseDirPath}`, error)
    return []
  }
}

/**
 * Main function to build the registry
 */
export async function buildRegistry() {
  console.log("Building component registry...")
  const registry: Record<string, RegistryItem> = {}
  const duplicates: string[] = []

  // Process each source directory
  for (const { path: dirPath, type } of SOURCE_DIRECTORIES) {
    try {
      console.log(`Scanning ${type}s in ${dirPath}...`)
      const items = scanDirectoryTwoLevelsDeep(dirPath, type)
      console.log(`Found ${items.length} ${type}s`)

      // Check for duplicates and add items to registry
      for (const item of items) {
        if (registry[item.name]) {
          duplicates.push(item.name)
          console.error(`⚠️ DUPLICATE COMPONENT NAME: "${item.name}" found in both:`)
          console.error(`  - ${registry[item.name].filePath}`)
          console.error(`  - ${item.filePath}`)
        } else {
          registry[item.name] = item
        }
      }
    } catch (error) {
      console.warn(`Failed to process directory: ${dirPath}`, error)
    }
  }

  // Abort if duplicates found
  if (duplicates.length > 0) {
    console.error(`\n❌ Build failed: Found ${duplicates.length} duplicate component names.`)
    console.error("Please ensure all component filenames are unique across the project.")
    process.exit(1)
  }

  // Generate TypeScript content
  const tsContent = `/**
 * AUTO-GENERATED COMPONENT REGISTRY
 * ------------------------------
 * DO NOT EDIT DIRECTLY!
 * 
 * This file is automatically generated by build-registry.mts
 * To update, run: npm run build:registry
 * 
 * Total components: ${Object.keys(registry).length}
 * - Components: ${Object.values(registry).filter((item) => item.type === "component").length}
 * - Views: ${Object.values(registry).filter((item) => item.type === "view").length}
 */

export type RegistryItem = {
  name: string
  filePath: string
  type: "view" | "component"
  title?: string
  description?: string
  iframeHeight?: number
}

export const Registry: Record<string, RegistryItem> = ${JSON.stringify(registry, null, 2)};
`

  const registryDir = path.join(process.cwd(), "registry")
  const registryFile = path.join(registryDir, "index.ts")

  if (!fs.existsSync(registryDir)) {
    fs.mkdirSync(registryDir, { recursive: true })
    console.log(`Created directory: ${registryDir}`)
  }

  fs.writeFileSync(registryFile, tsContent)
  console.log(`✅ Registry generated successfully at: ${registryFile}`)
  console.log(`Total components registered: ${Object.keys(registry).length}`)
}

buildRegistry().catch((error) => {
  console.error("Failed to build registry:", error)
  process.exit(1)
})
