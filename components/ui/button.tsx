import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-light tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crafting-azul focus-visible:ring-offset-2 focus-visible:ring-offset-crafting-grafite disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5] relative overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-crafting-azul text-crafting-branco rounded-lg shadow-lg shadow-crafting-azul/20 hover:bg-crafting-azul/90 hover:shadow-xl hover:shadow-crafting-azul/30 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md",
        destructive:
          "bg-destructive text-destructive-foreground rounded-lg shadow-lg shadow-destructive/20 hover:bg-destructive/90 hover:shadow-xl hover:shadow-destructive/30 hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border border-crafting-verde/30 bg-transparent text-crafting-cinzaAlvo rounded-lg backdrop-blur-sm hover:border-crafting-azul/50 hover:bg-crafting-azul/10 hover:text-crafting-branco hover:shadow-lg hover:shadow-crafting-azul/10 hover:-translate-y-0.5 active:translate-y-0",
        secondary:
          "bg-crafting-grafite/50 border border-crafting-verde/20 text-crafting-cinzaAlvo rounded-lg backdrop-blur-sm hover:bg-crafting-grafite/70 hover:border-crafting-azul/40 hover:text-crafting-branco hover:shadow-lg hover:shadow-crafting-azul/10 hover:-translate-y-0.5 active:translate-y-0",
        ghost: 
          "text-crafting-cinzaAlvo rounded-lg hover:bg-crafting-azul/10 hover:text-crafting-branco",
        link: 
          "text-crafting-azul underline-offset-4 hover:underline hover:text-crafting-azul/80",
      },
      size: {
        default: "h-10 px-5 py-2.5",
        sm: "h-8 rounded-md px-4 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
