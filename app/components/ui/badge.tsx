import { tv, VariantProps } from "tailwind-variants"
import { colorVariants } from "./_shared/variants"

/* -------------------------------------------------------------------------- */
/*                               Badge Variants                               */
/* -------------------------------------------------------------------------- */

const badgeVariants = tv({
  slots: {
    base: "focus:ring-ring inline-flex items-center font-medium transition-colors focus:outline-none focus:ring-2",
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
    variant: {
      filled: "",
      outlined: "border border-current",
      ghost: "bg-transparent",
      subtle: "",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
    size: {
      xs: "px-1.5 py-0.5 text-xs",
      sm: "px-2 py-0.5 text-sm",
      md: "px-2.5 py-1 text-sm",
      lg: "px-3 py-1 text-md",
    },
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
        base: [colorVariants.filled.default, "hover:bg-accent hover:text-accent-text shadow-sm"],
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
    {
      variant: ["filled", "subtle"],
      color: ["primary", "secondary", "success", "info", "warning", "danger"],
      class: {
        base: "hover:opacity-hover",
      },
    },
  ],
  defaultVariants: {
    size: "md",
    color: "default",
    variant: "filled",
    radius: "full",
  },
})

export type BadgeVariantsProps = VariantProps<typeof badgeVariants>
export type BadgeSlots = keyof ReturnType<typeof badgeVariants>

export { badgeVariants }

/* -------------------------------------------------------------------------- */
/*                               Badge Component                              */
/* -------------------------------------------------------------------------- */

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & BadgeVariantsProps

const Badge = ({ className, size, color, variant, radius, ...props }: BadgeProps) => {
  const { base } = badgeVariants({ color, size, variant, radius })

  return <div className={base({ className })} {...props} />
}

export { Badge }
