"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { inactiveGrid, items } from "./constant";
import RenderChildren from "@/helpers/RenderChildren";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

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

  return (
    <motion.div
      className={cn(
        "grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 h-[100vh] w-[100vw] z-999 p-4 gap-4"
      )}
    >
      {items.map(({ id, col, row, title, href }) => {
        const isActive = active === id;

        return (
          <motion.div
            key={id}
            layout
            // transition={{
            //   layout: { type: "spring", stiffness: 180, damping: 24 },
            //   gridColumn: { duration: 0.6, ease: "easeInOut" },
            //   gridRow: { duration: 0.6, ease: "easeInOut" },
            // }}
            className={cn(
              "relative flex flex-col font-bold shadow-lg cursor-pointer backdrop-blur-2xl bg-white/5 rounded-2xl overflow-hidden"
            )}
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
            {/* Tombol close hanya muncul saat active */}
            {isActive && (
              <div
                className="absolute top-3 right-4 text-white text-lg cursor-pointer z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setActive(null);
                  router.push("/");
                }}
              >
                ✕
              </div>
            )}

            <div
              className={cn(
                "p-6 flex flex-col transition-all duration-500 w-full h-full",
                isActive ? "justify-start" : "justify-center items-center"
              )}
              onClick={() => {
                if (active === null) {
                  setActive(id);
                  router.push(href);
                }
              }}
            >
              {/* Title */}
              <motion.h2
                layout={"position"}
                // transition={{ duration: 0.5, ease: "easeInOut" }}
                className={cn(
                  "font-bitcount text-5xl text-center md:text-left whitespace-nowrap"
                  // isActive ? "mb-6" : "mb-0"
                )}
              >
                {title}
              </motion.h2>

              {/* Content dengan animasi height */}
              <RenderChildren currentPath={href}>{children}</RenderChildren>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
