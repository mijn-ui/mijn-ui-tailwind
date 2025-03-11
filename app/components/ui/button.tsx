import * as React from "react"
import { Slot, Slottable } from "@radix-ui/react-slot"
import { colorVariants } from "./_shared/variants"
import { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"
import { disabledClasses, focusVisibleClasses } from "./_shared/classes"
import { cn } from "@/lib/utils"
import { SlotsToClasses } from "./_shared/type"
import { LuLoaderCircle } from "react-icons/lu"

/* -------------------------------------------------------------------------- */
/*                               ButtonVariants                               */
/* -------------------------------------------------------------------------- */

const buttonVariants = tv({
  slots: {
    base: [
      "inline-flex items-center justify-center gap-1 transition-colors duration-200 ease-in-out active:brightness-90",
      ...disabledClasses,
      ...focusVisibleClasses,
    ],
    icon: "mr-2 size-5 animate-spin text-current",
  },
  variants: {
    color: {
      default: "",
      primary: "",
      secondary: "",
      success: "",
      info: "",
      warning: "",
      danger: "",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
    size: {
      xs: "text-sm h-8 px-2",
      sm: "text-sm h-9 px-3",
      md: "text-sm h-10 px-3.5",
      lg: "text-md h-11 px-5",
      xl: "text-md h-12 px-6",
    },
    variant: {
      filled: "",
      outlined: "border border-current",
      ghost: "",
      subtle: "",
    },
    iconOnly: {
      true: "px-0 gap-0",
      false: "",
    },
  },
  defaultVariants: {
    variant: "filled",
    color: "default",
    radius: "md",
    size: "md",
  },
  compoundVariants: [
    {
      color: "default",
      variant: "outlined",
      class: {
        base: [colorVariants.outlined.default, "hover:bg-accent hover:text-accent-text"],
      },
    },
    {
      color: "primary",
      variant: "outlined",
      class: {
        base: [colorVariants.outlined.primary, "hover:bg-primary hover:text-primary-text"],
      },
    },
    {
      color: "secondary",
      variant: "outlined",
      class: {
        base: [colorVariants.outlined.secondary, "hover:bg-secondary hover:text-secondary-text"],
      },
    },
    {
      color: "success",
      variant: "outlined",
      class: {
        base: [colorVariants.outlined.success, "hover:bg-success hover:text-success-filled-text"],
      },
    },
    {
      color: "info",
      variant: "outlined",
      class: {
        base: [colorVariants.outlined.info, "hover:bg-info hover:text-info-filled-text"],
      },
    },
    {
      color: "warning",
      variant: "outlined",
      class: {
        base: [colorVariants.outlined.warning, "hover:bg-warning hover:text-warning-filled-text"],
      },
    },
    {
      color: "danger",
      variant: "outlined",
      class: {
        base: [colorVariants.outlined.danger, "hover:bg-danger hover:text-danger-filled-text"],
      },
    },

    /* --------------------------------- Subtle --------------------------------- */

    {
      color: "default",
      variant: "subtle",
      class: {
        base: colorVariants.subtle.default,
      },
    },
    {
      color: "primary",
      variant: "subtle",
      class: {
        base: colorVariants.subtle.primary,
      },
    },
    {
      color: "secondary",
      variant: "subtle",
      class: {
        base: colorVariants.subtle.secondary,
      },
    },
    {
      color: "success",
      variant: "subtle",
      class: {
        base: colorVariants.subtle.success,
      },
    },
    {
      color: "info",
      variant: "subtle",
      class: {
        base: colorVariants.subtle.info,
      },
    },
    {
      color: "warning",
      variant: "subtle",
      class: {
        base: colorVariants.subtle.warning,
      },
    },
    {
      color: "danger",
      variant: "subtle",
      class: {
        base: colorVariants.subtle.danger,
      },
    },

    /* ---------------------------------- Ghost --------------------------------- */
    {
      color: "default",
      variant: "ghost",
      class: {
        base: [colorVariants.ghost.default, "hover:bg-accent hover:text-accent-text"],
      },
    },
    {
      color: "primary",
      variant: "ghost",
      class: {
        base: [colorVariants.ghost.primary, "hover:bg-primary hover:text-primary-text"],
      },
    },
    {
      color: "secondary",
      variant: "ghost",
      class: {
        base: [colorVariants.ghost.secondary, "hover:bg-secondary hover:text-secondary-text"],
      },
    },
    {
      color: "success",
      variant: "ghost",
      class: {
        base: [colorVariants.ghost.success, "hover:bg-success hover:text-success-filled-text"],
      },
    },
    {
      color: "info",
      variant: "ghost",
      class: {
        base: [colorVariants.ghost.info, "hover:bg-info hover:text-info-filled-text"],
      },
    },
    {
      color: "warning",
      variant: "ghost",
      class: {
        base: [colorVariants.ghost.warning, "hover:bg-warning hover:text-warning-filled-text"],
      },
    },
    {
      color: "danger",
      variant: "ghost",
      class: {
        base: [colorVariants.ghost.danger, "hover:bg-danger hover:text-danger-filled-text"],
      },
    },

    /* --------------------------------- Filled --------------------------------- */
    {
      color: "default",
      variant: "filled",
      class: {
        base: [colorVariants.filled.default],
      },
    },
    {
      color: "primary",
      variant: "filled",
      class: {
        base: [colorVariants.filled.primary],
      },
    },
    {
      color: "secondary",
      variant: "filled",
      class: {
        base: [colorVariants.filled.secondary],
      },
    },
    {
      color: "success",
      variant: "filled",
      class: {
        base: [colorVariants.filled.success],
      },
    },
    {
      color: "info",
      variant: "filled",
      class: {
        base: [colorVariants.filled.info],
      },
    },
    {
      color: "warning",
      variant: "filled",
      class: {
        base: [colorVariants.filled.warning],
      },
    },
    {
      color: "danger",
      variant: "filled",
      class: {
        base: [colorVariants.filled.danger],
      },
    },
    {
      variant: ["filled", "subtle"],
      class: {
        base: "hover:opacity-hover",
      },
    },

    /* --------------------------------- Icon Only --------------------------------- */
    {
      iconOnly: true,
      size: "xs",
      class: {
        base: "size-8",
      },
    },
    {
      iconOnly: true,
      size: "sm",
      class: {
        base: "size-9",
      },
    },
    {
      iconOnly: true,
      size: "md",
      class: {
        base: "size-10",
      },
    },
    {
      iconOnly: true,
      size: "lg",
      class: {
        base: "size-11",
      },
    },
    {
      iconOnly: true,
      size: "xl",
      class: {
        base: "size-12",
      },
    },
  ],
})

export type ButtonVariantProps = VariantProps<typeof buttonVariants>
export type ButtonSlots = keyof ReturnType<typeof buttonVariants>
export { buttonVariants }

/* -------------------------------------------------------------------------- */
/*                              Button Component                              */
/* -------------------------------------------------------------------------- */

export type ButtonBaseProps = React.ComponentPropsWithRef<"button"> & {
  asChild?: boolean
  loading?: boolean
  classNames?: SlotsToClasses<ButtonSlots>
}

export type ButtonProps = ButtonBaseProps & ButtonVariantProps

const Button = ({
  className,
  classNames,
  color,
  variant,
  size,
  radius,
  iconOnly,
  loading,
  disabled,
  asChild = false,
  children,
  ...props
}: ButtonProps) => {
  const Component = asChild ? Slot : "button"
  const { base, icon } = buttonVariants({ color, variant, size, radius, iconOnly })

  return (
    <Component
      className={base({ className: cn(classNames?.base, className) })}
      disabled={loading || disabled}
      {...props}>
      {loading && <LuLoaderCircle className={icon({ className: classNames?.icon })} />}
      <Slottable>{loading ? "Loading..." : children}</Slottable>
    </Component>
  )
}

export { Button }
