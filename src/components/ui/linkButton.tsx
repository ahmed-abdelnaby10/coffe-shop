import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import NextLink from "next/link"
import { cn } from "@/lib/utils"

const linkVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        facebook: "hover:bg-accent hover:text-facebook",
        instagram: "hover:bg-accent hover:text-instagram",
        tiktok: "hover:bg-accent hover:text-tiktok",
        linkedin: "hover:bg-accent hover:text-linkedin",
        mail: "hover:bg-accent hover:text-mail",
        snapchat: "hover:bg-accent hover:text-snapchat",
        whatsapp: "hover:bg-accent hover:text-whatsapp",
        link: "text-primary underline-offset-4 hover:underline",
        navLink: "text-primary hover:bg-mainBackground bg-transparent hover:text-mainColor relative before:absolute before:content-[''] before:left-0 before:bottom-0 before:h-1 before:bg-mainColor before:w-0 hover:before:w-full duration-300 before:duration-300",
				hirisk: "text-mainColor border-mainColor border-2 border-solid rounded-3xl hover:bg-mainColor hover:text-white duration-300",
        "hirisk-reverse": "hover:text-mainColor hover:bg-transparent border-mainColor border-2 border-solid rounded-3xl bg-mainColor text-white duration-300",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  asChild?: boolean
	href: string
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, asChild = false, href, ...props }, ref) => {
    const Comp = asChild ? Slot : NextLink
    return (
      <Comp
				href={href}
        className={cn(linkVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Link.displayName = "Link"

export { Link, linkVariants }
