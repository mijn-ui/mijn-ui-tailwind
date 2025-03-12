"use client"

import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

type PreviewTabsProps = React.ComponentProps<typeof Tabs> & {
  items: string[]
}

const PreviewTabs = ({ items, children, ...props }: PreviewTabsProps) => {
  const [value, onValueChange] = React.useState(items[0])

  return (
    <Tabs className="mb-8" value={value} onValueChange={onValueChange} {...props}>
      <TabsList className="mb-2 h-12 w-full justify-start rounded-none border-b !bg-transparent">
        {items.map((item) => (
          <TabsTrigger className="rounded-md data-[state=active]:bg-default" key={item} value={item}>
            {item}
          </TabsTrigger>
        ))}
      </TabsList>

      {children}
    </Tabs>
  )
}

export { PreviewTabs, TabsContent as PreviewTab }
