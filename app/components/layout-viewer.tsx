import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/app/components/ui/resizable"
import { Templates } from "@/static/_layout"

type BlockerViewerProps = {
  name: string
}

const LayoutViewer = ({ name }: BlockerViewerProps) => {
  const template = Templates[name]
  const url = `/view/${template.name}`

  return (
    <div>
      <div className="grid w-full gap-4">
        {/* <div className="flex w-full items-center justify-end">
          <Link
            href={url}
            target="_blank"
            className="inline-flex h-10 items-center justify-center gap-1 rounded-md px-3.5 text-sm text-default-text transition-colors duration-200 ease-in-out hover:bg-accent hover:text-accent-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-main active:brightness-90 disabled:pointer-events-none disabled:opacity-50">
            <LuExternalLink />
          </Link>
        </div> */}
        <ResizablePanelGroup direction="horizontal" className="relative z-10 rounded-xl">
          <ResizablePanel
            className="relative aspect-[4/2.5] rounded-xl border bg-main md:aspect-auto"
            defaultSize={100}
            minSize={30}>
            <iframe
              src={`/tailwind/${url}`}
              height={template.iframeHeight || 740}
              className="relative z-20 w-full bg-main"
            />
          </ResizablePanel>
          <ResizableHandle className="relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-x-px after:-translate-y-1/2 after:rounded-full after:bg-main-border after:transition-all after:hover:h-10 md:block" />
          <ResizablePanel defaultSize={0} minSize={0} />
        </ResizablePanelGroup>
      </div>
    </div>
  )
}

export { LayoutViewer }
