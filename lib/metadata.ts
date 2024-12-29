import type { Metadata } from "next/types"

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: "https://mijn-ui.com",
      images: "/banner.png",
      siteName: "MijnUI",
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: "/banner.png",
      ...override.twitter,
    },
  }
}

export const baseUrl =
  process.env.NODE_ENV === "development" || !process.env.NEXT_PUBLIC_APP_URL
    ? new URL("http://localhost:3000")
    : new URL(`https://${process.env.NEXT_PUBLIC_APP_URL}`)
