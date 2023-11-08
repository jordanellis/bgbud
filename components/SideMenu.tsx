import { cx } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { ChevronLeftIcon } from "../icons";
import { Button } from "./Button";

const menuStyles = cx(
  "z-50 fixed top-0 left-0",
  "transition ease-in-out duration-300"
);

const overlayStyles = cx(
  "bg-secondary-text opacity-50",
  "h-screen w-screen fixed top-0 left-0 z-40"
);

const containerStyles = cx(
  "h-screen",
  "min-w-[200px]",
  "bg-primary-card-bg text-primary-text",
  "p-4 z-50"
);

interface SideMenuProps extends HTMLAttributes<HTMLElement> {
  open: boolean;
  onClose: () => void;
}

export const SideMenu = ({
  className,
  children,
  open,
  onClose,
  ...rest
}: SideMenuProps) => {
  return (
    <div>
      <div className={cx(menuStyles, !open && "-translate-x-full")}>
        <div className={containerStyles} {...rest}>
          <div className="w-full pb-6">
            <Button className="my-auto" variant="icon" onClick={onClose}>
              <ChevronLeftIcon />
            </Button>
          </div>
          <div className={className}>{children}</div>
        </div>
      </div>
      {open && <div className={overlayStyles} onClick={onClose} />}
    </div>
  );
};
