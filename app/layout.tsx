import { baseUrl, createMetadata } from "@/lib/metadata"
import "./css/global.css"
import { RootProvider } from "fumadocs-ui/provider"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata = createMetadata({
  title: {
    template: "%s | MijnUI",
    default: "MijnUI",
  },
  description:
    "MijnUI-Tailwind offers flexible, ready-to-use components for building marketing sites, dashboards, and e-commerce platforms.",
  metadataBase: baseUrl,
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider
          search={{
            options: {
              api: "/tailwind/api/search",
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
