import { cn } from "@/lib/utils"
import { Alert as MijnUIAlert, AlertIcon, AlertTitle, AlertDescription, alertVariants } from "./ui/alert"
import { LuCircleAlert, LuBug } from "react-icons/lu"
import { VariantProps } from "tailwind-variants"

type AlertProps = {
  title: string
  description: string
  color?: VariantProps<typeof alertVariants>["color"]
  className?: string
}

const Alert = ({ title, description, color = "info", className }: AlertProps) => {
  const Icon = color === "danger" ? LuBug : LuCircleAlert

  return (
    <MijnUIAlert className={cn("not-prose w-full backdrop-blur-md", className)} color={color}>
      <AlertIcon>
        <Icon />
      </AlertIcon>
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </MijnUIAlert>
  )
}

export default Alert
