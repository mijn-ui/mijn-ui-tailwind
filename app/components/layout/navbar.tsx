"use client"

import { useState } from "react"
import Link from "next/link"
import { TopRightRadialGradient } from "@/app/components/decorators/gradient-bg"
import Logo from "@/app/components/ui/logo"
import ThemeToggler from "@/app/components/theme-toggler"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { Separator } from "../ui/separator"
import { SidebarTrigger } from "fumadocs-core/sidebar"
import { useSearchContext, useSidebar } from "fumadocs-ui/provider"
import { LuChevronDown, LuExternalLink, LuGithub, LuMenu, LuSearch, LuX } from "react-icons/lu"
import ClickAwayListener from "react-click-away-listener"
import { usePathname } from "next/navigation"
import { Button, buttonVariants } from "../ui/button"
import { Badge } from "../ui/badge"
import { cn } from "@/lib/utils"

const GITHUB_URL = "https://github.com/mijn-ui/mijn-ui-tailwind"

const Navbar = () => {
  const { setOpenSearch } = useSearchContext()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { open: isSidebarOpen } = useSidebar()
  const pathname = usePathname()

  // Check if the pathname starts with '/docs'
  const isDocsPage = /^\/docs/.test(pathname)

  const renderSidebarTrigger = (
    <SidebarTrigger
      className={cn(
        buttonVariants().base({
          variant: "ghost",
          iconOnly: true,
          className: "-me-2 text-muted-text md:hidden",
        }),
      )}>
      {isSidebarOpen ? <LuX /> : <LuMenu />}
    </SidebarTrigger>
  )

  return (
    <header className="sticky inset-x-0 top-0 z-50 h-[var(--navbar-height)] w-full flex-col items-center justify-center border-b bg-transparent backdrop-blur-md md:flex">
      <nav className="flex w-full items-center justify-between px-5 py-2">
        <div className="flex items-center gap-4">
          <Link href={"/"} className="flex items-center gap-2 font-bold">
            <Logo className="size-5 items-center fill-fd-foreground" />
            MijnUI
          </Link>
          <Badge size="xs" variant="subtle" color="primary">
            v0.0.1
          </Badge>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <Button onClick={() => setOpenSearch(true)} variant={"outlined"} size={"sm"} className="gap-2">
            <LuSearch />
            <span className="inline-block text-muted-text">Search...</span>
            <div className="ml-4 inline-flex h-5 gap-1 rounded-full border px-2 py-px">
              <kbd className="text-xxs">Ctrl+</kbd>
              <kbd className="text-xxs">K</kbd>
            </div>
          </Button>

          <Button size={"sm"} iconOnly className="border px-2" asChild>
            <Link target="_blank" href={GITHUB_URL}>
              <LuGithub size={18} />
            </Link>
          </Button>

          <ThemeToggler />
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setOpenSearch(true)}
            className="inline-flex size-8 items-center justify-center text-muted-text transition duration-200 hover:text-secondary-text">
            <LuSearch />
          </button>

          <ClickAwayListener onClickAway={() => setDropdownOpen(false)}>
            <Collapsible open={dropdownOpen} onOpenChange={setDropdownOpen}>
              <CollapsibleTrigger className="flex size-8 items-center justify-center text-muted-text transition duration-200 hover:text-secondary-text">
                <LuChevronDown className="text-lg" />
              </CollapsibleTrigger>
              <CollapsibleContent className="top-[calc(var(--navbar-height)] data-[state=closed]:animate-collapsible-close data-[state=open]:animate-collapsible-open absolute inset-x-0 mt-2 overflow-hidden bg-surface text-sm transition-[height]">
                <div className="relative flex w-full flex-col items-start justify-between space-y-2 px-4 py-2">
                  <Separator />

                  <div className="flex w-full items-center justify-between">
                    <Link
                      className="inline-flex items-center gap-2 text-muted-text hover:text-secondary-text"
                      target="_blank"
                      href={GITHUB_URL}>
                      Github <LuExternalLink />
                    </Link>
                    <ThemeToggler />
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </ClickAwayListener>

          {isDocsPage && renderSidebarTrigger}
        </div>
      </nav>

      <TopRightRadialGradient />
    </header>
  )
}

export default Navbar
