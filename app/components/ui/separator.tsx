"use client"

import { tv, VariantProps } from "tailwind-variants"
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

const separatorVariants = tv({
  slots: {
    base: "bg-main-border shrink-0",
  },
  variants: {
    orientation: {
      horizontal: {
        base: "h-divider w-full",
      },
      vertical: {
        base: "h-full w-divider",
      },
    },
  },
})

export type SeparatorVariantProps = VariantProps<typeof separatorVariants>
export type SeparatorSlots = keyof ReturnType<typeof separatorVariants>

export { separatorVariants }

/* -------------------------------------------------------------------------- */
/*                             Separator Component                            */
/* -------------------------------------------------------------------------- */

export type SeparatorProps = React.ComponentPropsWithRef<typeof SeparatorPrimitive.Root>

const Separator = ({ className, orientation = "horizontal", decorative = true, ...props }: SeparatorProps) => {
  const { base } = separatorVariants({ orientation })

  return (
    <SeparatorPrimitive.Root
      decorative={decorative}
      orientation={orientation}
      className={base({ className })}
      {...props}
    />
  )
}

export { Separator }
