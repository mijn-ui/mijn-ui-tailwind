"use client"

import { tv, VariantProps } from "tailwind-variants"
import { disabledClasses } from "./_shared/classes"
import { createContext } from "./_shared/create-context"
import { SlotsToClasses } from "./_shared/type"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/*                                Tab Variants                                */
/* -------------------------------------------------------------------------- */

const tabsVariants = tv({
  slots: {
    base: "",
    list: "bg-main text-muted-text inline-flex h-10 items-center justify-center rounded-lg p-1",
    trigger: [
      ...disabledClasses,
      "focus-visible:ring-ring data-[state=active]:bg-default data-[state=active]:text-default-text inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 data-[state=active]:shadow-sm",
    ],
    content: "focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-1",
  },
})

export type TabsVariantProps = VariantProps<typeof tabsVariants>
export type TabsSlots = keyof ReturnType<typeof tabsVariants>

export { tabsVariants }

/* -------------------------------------------------------------------------- */
/*                               Tab Components                               */
/* -------------------------------------------------------------------------- */

type TabsBaseProps = {
  classNames?: SlotsToClasses<TabsSlots>
}

type TabsContextType = TabsBaseProps & ReturnType<typeof tabsVariants>

const [TabsProvider, useTabsContext] = createContext<TabsContextType>({
  name: "TabsContext",
  strict: true,
  errorMessage: "useTabsContext: `context` is undefined. Seems you forgot to wrap component within <Tabs />",
})

/* -------------------------------------------------------------------------- */
/*                                    Tabs                                    */
/* -------------------------------------------------------------------------- */

export type TabsProps = React.ComponentPropsWithRef<typeof TabsPrimitive.Root> & TabsVariantProps & TabsBaseProps

const Tabs = ({ children, className, classNames, ...props }: TabsProps) => {
  const styles = tabsVariants()

  return (
    <TabsProvider value={{ ...styles, classNames }}>
      <TabsPrimitive.Root className={styles.base({ className: cn(classNames?.base, className) })} {...props}>
        {children}
      </TabsPrimitive.Root>
    </TabsProvider>
  )
}

/* -------------------------------------------------------------------------- */
/*                                  TabsList                                  */
/* -------------------------------------------------------------------------- */

export type TabsListProps = React.ComponentPropsWithRef<typeof TabsPrimitive.List>

const TabsList = ({ className, ...props }: TabsListProps) => {
  const { list, classNames } = useTabsContext()

  return (
    <TabsPrimitive.List
      className={list({
        className: cn(classNames?.list, className),
      })}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                 TabsTrigger                                */
/* -------------------------------------------------------------------------- */

export type TabsTriggerProps = React.ComponentPropsWithRef<typeof TabsPrimitive.Trigger>

const TabsTrigger = ({ className, ...props }: TabsTriggerProps) => {
  const { trigger, classNames } = useTabsContext()

  return (
    <TabsPrimitive.Trigger
      className={trigger({
        className: cn(classNames?.trigger, className),
      })}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                 TabsContent                                */
/* -------------------------------------------------------------------------- */

export type TabsContentProps = React.ComponentPropsWithRef<typeof TabsPrimitive.Content>

const TabsContent = ({ className, ...props }: TabsContentProps) => {
  const { content, classNames } = useTabsContext()

  return (
    <TabsPrimitive.Content
      className={content({
        className: cn(classNames?.content, className),
      })}
      {...props}
    />
  )
}

export { Tabs, TabsContent, TabsList, TabsTrigger, useTabsContext }
