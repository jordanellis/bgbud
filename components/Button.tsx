import { cva, cx } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const button = cva(
  [
    "items-center",
    "outline-none border-none",
    "hover:ring-1 focus:ring-2",
    "transition ease-in-out duration-300",
    "text-body2",
  ],
  {
    defaultVariants: {
      variant: "filled",
    },
    variants: {
      variant: {
        filled: [
          "rounded-2xl px-4 py-3",
          "bg-secondary-default text-secondary-text",
          "hover:bg-secondary-default-darker",
          "hover:ring-primary-outline-hover",
          "active:ring-primary-outline-active",
          "active:bg-secondary-default-darkest",
          "focus:bg-secondary-default-darker",
          "focus:ring-primary-outline-hover",
        ],
        icon: [
          "rounded-full w-10 p-2",
          "bg-primary-card-bg text-secondary-text",
          "hover:bg-primary-card-bg-hover",
          "hover:ring-primary-card-outline",
          "active:ring-primary-card-outline",
          "active:bg-primary-card-bg-active",
          "focus:bg-primary-card-bg-active",
          "focus:ring-primary-card-outline",
        ],
      },
    },
  }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "icon";
}

export const Button = ({
  variant,
  className,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button className={cx(button({ variant }), className)} {...rest}>
      {children}
    </button>
  );
};
