"use client";

import { cx } from "class-variance-authority";
import { useRouter } from "next/navigation";
import { AnchorHTMLAttributes } from "react";
import { onStart } from "./NavigationEvents";

const anchorStyles = cx(
  "text-primary-outline",
  "cursor-pointer inline-block",
  "transition ease-in-out duration-300",
  "hover:text-primary-outline-hover"
);

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export const Anchor = ({
  className,
  children,
  to,
  onClick,
  ...rest
}: AnchorProps) => {
  const router = useRouter();

  function displayLoading() {
    const { pathname, search, hash } = window.location;
    if (to !== pathname + search + hash) onStart();
  }

  return (
    <a
      tabIndex={0}
      className={cx(anchorStyles, className)}
      onClick={(e) => {
        displayLoading();
        onClick && onClick(e);
        router.push(to);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          displayLoading();
          router.push(to);
        }
      }}
      {...rest}
    >
      {children}
    </a>
  );
};
