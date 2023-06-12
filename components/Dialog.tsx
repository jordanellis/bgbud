import { cx } from "class-variance-authority";
import { DialogHTMLAttributes } from "react";

const cardStyles = cx(
  "border border-primary-card-border",
  "rounded-2xl",
  "bg-primary-card-bg text-primary-text",
  "p-4"
);

export const Dialog = ({
  className,
  children,
  ...rest
}: DialogHTMLAttributes<HTMLDialogElement>) => {
  return (
    <dialog className={cx(cardStyles, className)} {...rest}>
      {children}
    </dialog>
  );
};
