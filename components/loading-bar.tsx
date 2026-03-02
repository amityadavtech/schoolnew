"use client";

import { useEffect, useTransition } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// configure default styles here or in globals.css if you prefer
NProgress.configure({ showSpinner: false });

export default function LoadingBar() {
  // `useTransition` reflects pending low‑priority updates such as
  // client-side navigations from <Link> or router.push. Next.js wraps
  // navigations with `startTransition` internally, so this hook works
  // as a drop‑in replacement for the old `useNavigation` API.
  const [isPending] = useTransition();

  useEffect(() => {
    if (isPending) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [isPending]);

  return null;
}
