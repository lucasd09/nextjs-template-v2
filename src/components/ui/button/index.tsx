import { Slot } from "@radix-ui/react-slot"
import { ButtonProps } from "./types"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./consts"

export const Button = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}