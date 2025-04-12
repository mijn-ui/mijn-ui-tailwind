import React from "react"
import { LuLoaderCircle } from "react-icons/lu"
import { notFound } from "next/navigation"
import { viewRegistry } from "@/registry/view-metadata"
import { getHTMLContent } from "@/lib/get-html"
import { ViewCategory } from "@/scripts/build-views-metadata.mjs"

export async function generateMetadata({ params }: { params: Promise<{ category: string; name: string }> }) {
  const { category, name } = await params

  const view = viewRegistry[category][name]

  if (!view) return {}

  return {
    title: view.title,
    description: view.description,
  }
}

export async function generateStaticParams() {
  const staticParams: { category: string; name: string }[] = []

  for (const category of Object.keys(viewRegistry)) {
    for (const name of Object.keys(viewRegistry[category as ViewCategory])) {
      staticParams.push({ category, name })
    }
  }

  return staticParams
}

const ViewPage = async ({ params }: { params: Promise<{ category: ViewCategory; name: string }> }) => {
  const { category, name } = await params

  if (!viewRegistry?.[category]?.[name]) {
    return notFound()
  }

  const meta = viewRegistry[category][name]

  const content = getHTMLContent(meta?.filePath, { basePath: "", addExtension: false })

  return (
    <div className="size-screen overflow-hidden">
      <React.Suspense
        fallback={
          <div className="flex w-full items-center justify-center text-sm text-muted-text">
            <LuLoaderCircle className="mr-2 size-4 animate-spin" />
            Loading...
          </div>
        }>
        {content}
      </React.Suspense>
    </div>
  )
}

export default ViewPage
