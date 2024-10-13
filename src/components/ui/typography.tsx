import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva(
  "leading-tight",
  {
    variants: {
      variant: {
        h1: "text-4xl font-bold",
        h2: "text-3xl font-semibold",
        h3: "text-2xl font-semibold",
        h4: "text-xl font-semibold",
        h5: "text-lg font-semibold",
        h6: "text-base font-medium",
        p: "text-base",
        caption: "text-sm",
      },
      size: {
        sm: "text-sm",
        base: "text-base",
        md: "text-lg",
        lg: "text-xl",
        xl: "text-2xl",
      },
      color: {
        default: "text-foreground",
        muted: "text-muted-foreground",
        primary: "text-primary",
        destructive: "text-destructive",
        main: "text-mainColor",
      },
    },
    defaultVariants: {
      variant: "p",
      size: "base",
      color: "default",
    },
  }
);

type ValidTypographyTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "caption";

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
  variant?: ValidTypographyTags;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = "p", size, color, ...props }, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Component = variant as any;

    return (
      <Component
        className={cn(typographyVariants({ variant, size, color, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };