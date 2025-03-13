import Link from "next/link"
import { Button } from "../components/ui/button"

export default function HomePage() {
  return (
    <section className="flex w-full max-w-4xl flex-1 flex-col items-center justify-center gap-4 px-5 text-start sm:px-8 md:px-10 md:text-center">
      <h1 className="bg-gradient-to-br from-main-text to-muted-text/70 bg-clip-text text-3xl/[1.2] font-bold tracking-tight text-transparent sm:text-4xl/[1.2] sm:font-extrabold lg:text-5xl/[1.2]">
        MijnUI Tailwind Components For HTML Projects
      </h1>
      <p className="w-full text-lg font-medium text-muted-text md:w-3/4">
        MijnUI-Tailwind offers flexible, ready-to-use components for building marketing sites, dashboards, and
        e-commerce platforms.
      </p>

      <div className="flex w-full items-center justify-start gap-2 md:justify-center">
        <Button asChild color="primary" size="sm" className="text-xs md:text-sm">
          <Link href={"/docs"}>Getting Started</Link>
        </Button>

        <Button asChild size="sm" variant="outlined" className="text-xs md:text-sm">
          <Link href={"/docs/components/accordion"}>Components</Link>
        </Button>
      </div>
    </section>
  )
}
