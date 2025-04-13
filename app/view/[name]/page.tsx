import React from "react"
import { LuLoaderCircle } from "react-icons/lu"
import { notFound } from "next/navigation"
import { viewRegistry } from "@/registry"
import { getHTMLContent } from "@/lib/get-html"

export async function generateMetadata({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params

  const view = viewRegistry[name]

  if (!view || view.type === "component") return {}

  return {
    title: view?.title,
    description: view?.description,
  }
}

export async function generateStaticParams() {
  // Filter only the view items (not components) from the registry
  const viewItems = Object.entries(viewRegistry)
    .filter(([_, item]) => item.type === "view")
    .map(([name]) => ({ name }))

  return viewItems
}

const ViewPage = async ({ params }: { params: Promise<{ name: string }> }) => {
  const { name } = await params

  const view = viewRegistry[name]

  if (!view || view.type !== "view") {
    return notFound()
  }

  const content = getHTMLContent(view.filePath, true)

  return (
    <div className="size-screen overflow-hidden">
      <React.Suspense
        fallback={
          <div className="flex w-full items-center justify-center text-sm text-muted-text">
            <LuLoaderCircle className="mr-2 size-4 animate-spin" />
            Loading...
          </div>
        }>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </React.Suspense>
    </div>
  )
}

export default ViewPage
