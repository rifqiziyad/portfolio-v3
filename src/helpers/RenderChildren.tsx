"use client";
import { usePathname } from "next/navigation";
import { ReactNode, useRef, useLayoutEffect, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface RenderChildrenProps {
  currentPath: string;
  children: ReactNode;
}

export default function RenderChildren({
  currentPath,
  children,
}: RenderChildrenProps) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);
  const [visible, setVisible] = useState(false);
  console.log({ visible });

  // Perbarui height sesuai konten
  useLayoutEffect(() => {
    if (ref.current) setHeight(ref.current.scrollHeight);
  }, [children]);

  // Ubah visible sesuai path
  useEffect(() => {
    console.log({pathname, currentPath});

    setVisible(pathname === currentPath && pathname !== "/");
  }, [pathname, currentPath]);

  return (
    <motion.div
      animate={{
        height: visible ? height : 0,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      style={{
        overflow: "hidden",
        width: "100%",
        border: "solid 1px black"
      }}
    >
      <div ref={ref}>{children}</div>
    </motion.div>
  );
}
