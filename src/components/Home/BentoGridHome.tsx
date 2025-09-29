"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { inactiveGrid, items } from "./constant";
import RenderChildren from "@/helpers/RenderChildren";

type gridTransitionHandlerType = {
  type: "row" | "col";
  id: number;
  colRow: number;
};

export default function BentoGrid({
  children,
}: {
  children: React.ReactNode | null;
}) {
  const [active, setActive] = useState<number | null>(null);

  const gridTransitionHandler = ({
    type,
    id,
    colRow,
  }: gridTransitionHandlerType) => {
    const newGrid = active ? inactiveGrid[active - 1] : null;

    if (active && newGrid) {
      if (active === id) {
        if (type === "col") return "span 10";
        if (type === "row") return "span 5";
      } else {
        if (type === "col") return `span ${newGrid[id - 1].col}`;
        if (type === "row") return `span ${newGrid[id - 1].row}`;
      }
    } else return `span ${colRow}`;
  };

  const handleText = (id: number) => {
    const bigSize = "text-5xl";
    const smallSize = "text-lg";
    if (active) {
      if (active === id) return bigSize;
      else return smallSize;
    } else return bigSize;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 h-[100vh] w-[100%] z-999 p-4 gap-4">
      {items.map(({ id, col, row, title, href }) => (
        <motion.div
          key={id}
          layout
          transition={{
            layout: { type: "spring", stiffness: 180, damping: 24 }, // khusus position
            gridColumn: { duration: 0.6, ease: "easeInOut" }, // size manual
            gridRow: { duration: 0.6, ease: "easeInOut" },
          }}
          onClick={() => setActive(active === id ? null : id)}
          className="flex items-center justify-center font-bold shadow-lg cursor-pointer backdrop-blur-2xl bg-white/5 rounded-2xl"
          style={{
            gridColumn: gridTransitionHandler({
              type: "col",
              id: id,
              colRow: col,
            }),
            gridRow: gridTransitionHandler({
              type: "row",
              id: id,
              colRow: row,
            }),
          }}
        >
          <Link href="#" className="p-4 w-full h-full grid items-center" onClick={(e) => e.preventDefault()}>
            <motion.h2
              layout
              className={cn(
                "overflow-visible whitespace-nowrap font-bitcount",
                handleText(id)
              )}
            >
              {title}
            </motion.h2>
            {/* <RenderChildren currentPath={href}>{children}</RenderChildren> */}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
