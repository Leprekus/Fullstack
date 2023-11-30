import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import NextLink from 'next/link'
import { AnchorHTMLAttributes, forwardRef, Ref } from 'react'

const linkVariants = cva(
    "active:bg-primary/70 transition inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline:
            "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-gray-400 underline-offset-4 hover:underline",
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
    extends AnchorHTMLAttributes<typeof NextLink>,
      VariantProps<typeof linkVariants> {}
  
const Link = ({ className, variant, size, href, children }: LinkProps) => 
    <NextLink 
        className={cn(linkVariants({ variant, size, className }))}
        href={href as string}
    >
        { children }
    </NextLink>
  
export default Link