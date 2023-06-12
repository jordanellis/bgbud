import { cx } from "class-variance-authority";
import { HTMLAttributes } from "react";

const cardStyles = cx(
  "border border-primary-card-border",
  "rounded-2xl",
  "bg-primary-card-bg text-primary-text",
  "p-4"
);

export const Card = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLElement>) => {
  return (
    <div className={cx(cardStyles, className)} {...rest}>
      {children}
    </div>
  );
};
