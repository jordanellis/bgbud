import { cva, cx } from "class-variance-authority";
import { InputHTMLAttributes } from "react";

const button = cva([
  "text-center",
  "font-semibold",
  "outline-none border-none",
  "hover:ring-1 focus:ring-2",
  "transition ease-in-out duration-300",
  "text-h4",
  "rounded-full px-6 py-4",
  "bg-secondary-default text-secondary-text",
  "hover:bg-secondary-default-darker",
  "hover:ring-zinger-default",
  "active:ring-zinger-default",
  "active:bg-secondary-default-darkest",
  "focus:bg-secondary-default-darker",
  "focus:ring-zinger-default",
]);

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, children, ...rest }: InputProps) => {
  return (
    <input className={cx(button(), className)} {...rest}>
      {children}
    </input>
  );
};
