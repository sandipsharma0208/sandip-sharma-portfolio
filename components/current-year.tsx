"use client";

import { useSyncExternalStore } from "react";

export function CurrentYear() {
  const year = useSyncExternalStore(() => () => {}, () => String(new Date().getFullYear()), () => "");
  return <>{year}</>;
}