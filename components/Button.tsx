"use client";

import { cva, cx } from "class-variance-authority";
import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes } from "react";
import { onStart } from "./NavigationEvents";

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
        "secondary-filled": [
          "rounded-2xl px-4 py-3",
          "bg-primary-card-bg text-primary-text",
          "hover:bg-primary-card-bg-hover",
          "hover:ring-zinger-default",
          "active:ring-zinger-default",
          "active:bg-primary-card-bg-active",
          "focus:bg-primary-card-bg-active",
          "focus:ring-zinger-default",
        ],
        icon: [
          "rounded-full w-10 p-2",
          "bg-primary-card-bg text-primary-text",
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

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  variant?: "filled" | "secondary-filled" | "icon";
}

export const Button = ({
  to,
  variant,
  className,
  children,
  onClick,
  ...rest
}: ButtonProps) => {
  const router = useRouter();

  function displayLoading() {
    const { pathname, search, hash } = window.location;
    if (to !== pathname + search + hash) onStart();
  }

  return (
    <button
      className={cx(button({ variant }), className)}
      onClick={(e) => {
        to && displayLoading();
        onClick && onClick(e);
        to && router.push(to);
      }}
      {...rest}
    >
      {children}
    </button>
  );
};
