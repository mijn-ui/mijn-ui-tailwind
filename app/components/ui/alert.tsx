"use client"

import { tv, VariantProps } from "tailwind-variants"
import { colorVariants } from "./_shared/variants"
import { createContext } from "./_shared/create-context"
import { SlotsToClasses } from "./_shared/type"
import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/*                               Alert Variants                               */
/* -------------------------------------------------------------------------- */

const alertVariants = tv({
  slots: {
    base: "group relative w-full rounded-lg px-3 py-4 [&>span~*]:pl-8",
    iconWrapper: "translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:size-5 [&>svg]:text-current",
    title: "w-full font-semibold leading-none",
    description: "mt-1 text-sm",
  },
  variants: {
    variant: {
      filled: "",
      outlined: { base: "border" },
      subtle: { base: "border" },
    },
    color: {
      default: "",
      success: "",
      info: "",
      warning: "",
      danger: "",
    },
  },
  compoundVariants: [
    {
      variant: "subtle",
      color: "default",
      class: {
        base: ["bg-main/20 text-main-text border-main-border"],
        title: "text-main-text",
        description: "text-muted-text",
      },
    },
    {
      variant: "subtle",
      color: "success",
      class: {
        base: [colorVariants.subtle.success, "border-success"],
        title: "text-success-text",
        description: "text-muted-text",
      },
    },
    {
      variant: "subtle",
      color: "info",
      class: {
        base: [colorVariants.subtle.info, "border-info"],
        title: "text-info-text",
        description: "text-muted-text",
      },
    },
    {
      variant: "subtle",
      color: "warning",
      class: {
        base: [colorVariants.subtle.warning, "border-warning"],
        title: "text-warning-text",
        description: "text-muted-text",
      },
    },
    {
      variant: "subtle",
      color: "danger",
      class: {
        base: [colorVariants.subtle.danger, "border-danger"],
        title: "text-danger-text",
        description: "text-muted-text",
      },
    },

    {
      variant: "filled",
      color: "default",
      class: {
        base: "bg-main-text text-main-text",
        title: "text-main-text",
        description: "text-main-text",
      },
    },
    {
      variant: "filled",
      color: "success",
      class: {
        base: [colorVariants.filled.success, "dark:bg-success/80"],
        title: "text-success-filled-text",
        description: "text-success-filled-text",
      },
    },
    {
      variant: "filled",
      color: "info",
      class: {
        base: [colorVariants.filled.info, "dark:bg-info/80"],
        title: "text-info-filled-text",
        description: "text-info-filled-text",
      },
    },
    {
      variant: "filled",
      color: "warning",
      class: {
        base: [colorVariants.filled.warning, "dark:bg-warning/80"],
        title: "text-warning-filled-text",
        description: "text-warning-filled-text",
      },
    },
    {
      variant: "filled",
      color: "danger",
      class: {
        base: [colorVariants.filled.danger, "dark:bg-danger/80"],
        title: "text-danger-filled-text",
        description: "text-danger-filled-text",
      },
    },

    {
      variant: "outlined",
      color: "default",
      class: {
        base: "border-main-text text-main-text",
        description: "text-muted-text",
      },
    },
    {
      variant: "outlined",
      color: "success",
      class: {
        base: [colorVariants.outlined.success],
        title: "text-success-text",
        description: "text-muted-text",
      },
    },
    {
      variant: "outlined",
      color: "info",
      class: {
        base: [colorVariants.outlined.info],
        title: "text-info-text",
        description: "text-muted-text",
      },
    },
    {
      variant: "outlined",
      color: "warning",
      class: {
        base: [colorVariants.outlined.warning],
        title: "text-warning-text",
        description: "text-muted-text",
      },
    },
    {
      variant: "outlined",
      color: "danger",
      class: {
        base: [colorVariants.outlined.danger],
        title: "text-danger-text",
        description: "text-muted-text",
      },
    },
  ],
  defaultVariants: {
    variant: "subtle",
    color: "default",
  },
})

export type AlertVariantProps = VariantProps<typeof alertVariants>
export type AlertSlots = keyof ReturnType<typeof alertVariants>
export { alertVariants }

/* -------------------------------------------------------------------------- */
/*                               Alert Component                              */
/* -------------------------------------------------------------------------- */

type AlertBaseProps = {
  classNames?: SlotsToClasses<AlertSlots>
}

type AlertContextType = AlertBaseProps & ReturnType<typeof alertVariants>

const [AlertProvider, useAlertContext] = createContext<AlertContextType>({
  name: "AlertContext",
  strict: true,
  errorMessage: "useAlertContext: `context` is undefined. Seems you forgot to wrap component within <Alert />",
})

/* -------------------------------------------------------------------------- */
/*                                    Alert                                   */
/* -------------------------------------------------------------------------- */

export type AlertProps = React.ComponentProps<"div"> & AlertVariantProps & AlertBaseProps

const Alert = ({ variant, color, className, classNames, ...props }: AlertProps) => {
  const styles = alertVariants({ variant, color })

  return (
    <AlertProvider value={{ ...styles, classNames }}>
      <div className={styles.base({ className: cn(classNames?.base, className) })} {...props} />
    </AlertProvider>
  )
}

/* -------------------------------------------------------------------------- */
/*                                  AlertIcon                                 */
/* -------------------------------------------------------------------------- */

export type AlertIconProps = React.ComponentProps<"span">

const AlertIcon = ({ className, ...props }: AlertIconProps) => {
  const { iconWrapper, classNames } = useAlertContext()

  return (
    <span
      className={iconWrapper({
        className: cn(classNames?.iconWrapper, className),
      })}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                 AlertTitle                                 */
/* -------------------------------------------------------------------------- */

export type AlertTitleProps = React.ComponentProps<"h5">

const AlertTitle = ({ className, ...props }: AlertTitleProps) => {
  const { title, classNames } = useAlertContext()

  return <h5 className={title({ className: cn(classNames?.title, className) })} {...props} />
}

/* -------------------------------------------------------------------------- */
/*                              AlertDescription                              */
/* -------------------------------------------------------------------------- */

export type AlertDescriptionProps = React.ComponentProps<"p">

const AlertDescription = ({ className, ...props }: AlertDescriptionProps) => {
  const { description, classNames } = useAlertContext()

  return (
    <p
      className={description({
        className: cn(classNames?.description, className),
      })}
      {...props}
    />
  )
}

export { Alert, AlertDescription, AlertIcon, AlertTitle, useAlertContext }
