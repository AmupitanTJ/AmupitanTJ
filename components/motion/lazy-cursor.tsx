"use client";

import dynamic from "next/dynamic";

const CursorFollower = dynamic(() => import("./cursor-follower"), { ssr: false });

export function LazyCursor() {
  return <CursorFollower />;
}
