"use client";

import { usePathname } from "next/navigation";

export default function RenderChildren({
  children,
  currentPath,
}: {
  children: React.ReactNode;
  currentPath: string;
}) {
  const pathname = usePathname();
  return pathname === currentPath && pathname !== "/" && children;
}
