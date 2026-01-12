import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-light tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-crafting-azul focus:ring-offset-2 focus:ring-offset-crafting-grafite",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-crafting-azul text-crafting-branco shadow-lg shadow-crafting-azul/20 hover:bg-crafting-azul/90 hover:shadow-xl",
        secondary:
          "border-transparent bg-crafting-verde/20 text-crafting-cinzaAlvo hover:bg-crafting-verde/30",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground border-crafting-verde/50 hover:border-crafting-azul/70 hover:bg-crafting-azul/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
