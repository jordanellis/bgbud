import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import { Suspense, useEffect } from "react";

export function onStart() {
  NProgress.start();
}

export function onComplete() {
  NProgress.done();
}

function useOnComplete() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => onComplete(), [pathname, searchParams]);
}

function __NavigationEvents() {
  useOnComplete();
  return null;
}

export function NavigationEvents({ children }: React.PropsWithChildren) {
  return (
    <>
      {children}
      <Suspense>
        <__NavigationEvents />
      </Suspense>
    </>
  );
}
