import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";


const btnVariants = tv({
  base: "font-medium flex items-center justify-center gap-2 text-zinc-50 rounded-xl",
  variants: {
    variant: {
      primary: "bg-green-500 text-zinc-50",
      secondary: "bg-zinc-800",
    },

    size: {
      default: "py-2 px-3",
      padding: "py-3 px-4"
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

interface buttonProps
  extends ComponentProps<"button">,
    VariantProps<typeof btnVariants> {
  children: ReactNode;
}

export function Button({ children, variant, size, ...props }: buttonProps) {
  return <button  {...props} className={btnVariants({ variant: variant, size })}>
    {children}
    </button>;
}
