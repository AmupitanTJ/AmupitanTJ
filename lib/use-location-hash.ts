"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  window.addEventListener("popstate", onChange);
  return () => {
    window.removeEventListener("hashchange", onChange);
    window.removeEventListener("popstate", onChange);
  };
}

const getSnapshot = () => window.location.hash;
const getServerSnapshot = () => "";

export function useLocationHash() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
