import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { useTheme } from "next-themes"; // Import useTheme to manage themes
import { cn } from "@/src/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-blue-600",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  const { theme } = useTheme(); // Get the current theme (light or dark)

  // Conditionally set text and background colors based on the theme
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const badgeBgColor = theme === "dark" ? "bg-white" : "bg-gray-200";

  return (
    <div
      className={cn(
        badgeVariants({ variant }),
        `${textColor} ${badgeBgColor}`, // Apply dynamic text and background color
        className
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
