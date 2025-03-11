const filled = {
  default: "bg-default text-default-text",
  primary: "bg-primary text-primary-text",
  secondary: "bg-secondary text-secondary-text",
  success: "bg-success text-success-filled-text",
  info: "bg-info text-info-filled-text",
  warning: "bg-warning text-warning-filled-text",
  danger: "bg-danger text-danger-filled-text",
}

const outlined = {
  default: "bg-transparent border-main-border text-default-text",
  primary: "bg-transparent border-primary text-primary",
  secondary: "bg-transparent border-secondary text-secondary",
  success: "bg-transparent border-success text-success",
  info: "bg-transparent border-info text-info",
  warning: "bg-transparent border-warning text-warning",
  danger: "bg-transparent border-danger text-danger",
}

const ghost = {
  default: "text-default-text",
  primary: "text-primary",
  secondary: "text-secondary",
  success: "text-success",
  info: "text-info",
  warning: "text-warning",
  danger: "text-danger",
}

const subtle = {
  default: "bg-default/40 text-default-text",
  primary: "bg-primary/20 dark:bg-primary/10 text-primary",
  secondary: "bg-secondary/20 dark:bg-secondary/10 text-secondary",
  success: "bg-success/20 dark:bg-success/10 text-success",
  info: "bg-info/20 dark:bg-info/10 text-info",
  warning: "bg-warning/20 dark:bg-warning/10 text-warning",
  danger: "bg-danger/20 dark:bg-danger/10 text-danger",
}

export const colorVariants = {
  filled,
  outlined,
  ghost,
  subtle,
}
