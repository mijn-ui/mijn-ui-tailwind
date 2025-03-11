import type { ReactNode } from "react"
import Footer from "../components/layout/footer"
import Navbar from "@/app/components/layout/navbar"

export default function Layout({ children }: { children: ReactNode }): React.ReactElement {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
