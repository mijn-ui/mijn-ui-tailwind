import React from "react"
import { LuLoaderCircle } from "react-icons/lu"
import { notFound } from "next/navigation"
import { getHTMLContent, getViewMetaData } from "@/lib/get-html"

export async function generateMetadata({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params

  const meta = await getViewMetaData()
  const template = meta[name]

  if (!template) {
    return {}
  }

  const { title, description } = template

  return {
    title,
    description,
  }
}

export const generateStaticParams = async () => {
  const meta = await getViewMetaData()
  return Object.values(meta).map(({ name }: { name: string }) => ({ name }))
}

const ViewPage = async ({ params }: { params: Promise<{ name: string }> }) => {
  const { name } = await params

  const meta = await getViewMetaData()
  const template = meta[name]

  if (!template) {
    return notFound()
  }

  const templateContent = getHTMLContent(name, { basePath: "/public/view/" })

  return (
    <div className="size-screen overflow-hidden">
      <React.Suspense
        fallback={
          <div className="flex w-full items-center justify-center text-sm text-muted-text">
            <LuLoaderCircle className="mr-2 size-4 animate-spin" />
            Loading...
          </div>
        }>
        {templateContent}
      </React.Suspense>
    </div>
  )
}

export default ViewPage
