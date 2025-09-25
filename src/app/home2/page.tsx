"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  { id: 1, color: "bg-red-300", col: 5, row: 4 },
  { id: 2, color: "bg-green-300", col: 3, row: 3 },
  { id: 3, color: "bg-blue-300", col: 4, row: 1 },
  { id: 4, color: "bg-purple-300", col: 4, row: 2 },
  { id: 5, color: "bg-yellow-300", col: 7, row: 3 },
  { id: 6, color: "bg-purple-300", col: 5, row: 2 },
];

const inactiveGrid1 = [
  { id: 1, col: 10, row: 5 },
  { id: 2, col: 1, row: 3 },
  { id: 3, col: 1, row: 1 },
  { id: 4, col: 1, row: 2 },
  { id: 5, col: 2, row: 3 },
  { id: 6, col: 10, row: 1 },
];

const inactiveGrid2 = [
  { id: 1, col: 1, row: 6 },
  { id: 2, col: 10, row: 5 },
  { id: 3, col: 1, row: 1 },
  { id: 4, col: 1, row: 2 },
  { id: 5, col: 1, row: 2 },
  { id: 6, col: 11, row: 1 },
];

const inactiveGrid3 = [
  { id: 1, col: 1, row: 4 },
  { id: 2, col: 1, row: 4 },
  { id: 3, col: 10, row: 5 },
  { id: 4, col: 2, row: 2 },
  { id: 5, col: 6, row: 1 },
  { id: 6, col: 4, row: 1 },
];

const inactiveGrid4 = [
  { id: 1, col: 1, row: 4 },
  { id: 2, col: 1, row: 3 },
  { id: 3, col: 10, row: 1 },
  { id: 4, col: 10, row: 5 },
  { id: 5, col: 1, row: 3 },
  { id: 6, col: 1, row: 2 },
];

const inactiveGrid5 = [
  { id: 1, col: 1, row: 4 },
  { id: 2, col: 1, row: 4 },
  { id: 3, col: 6, row: 1 },
  { id: 4, col: 4, row: 1 },
  { id: 5, col: 10, row: 5 },
  { id: 6, col: 2, row: 2 },
];

const inactiveGrid6 = [
  { id: 1, col: 3, row: 1 },
  { id: 2, col: 4, row: 1 },
  { id: 3, col: 3, row: 1 },
  { id: 4, col: 1, row: 6 },
  { id: 5, col: 1, row: 6 },
  { id: 6, col: 10, row: 5, },
];

const inactiveGrid = [inactiveGrid1, inactiveGrid2, inactiveGrid3, inactiveGrid4, inactiveGrid5, inactiveGrid6];

type gridTransitionHandlerType = {
  type: "row" | "col";
  id: number;
  colRow: number;
};

export default function Home() {
  const [active, setActive] = useState<number | null>(null);

  const gridTransitionHandler = ({
    type,
    id,
    colRow,
  }: gridTransitionHandlerType) => {
    const newGrid = active ? inactiveGrid[active - 1] : null;
    console.log({ newGrid });

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
    <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-4 md:p-4 h-[100vh]">
      {items.map((item) => (
        <motion.div
          key={item.id}
          layout
          onClick={() => setActive(active === item.id ? null : item.id)}
          className={`${item.color} rounded-lg cursor-pointer flex items-center justify-center text-white font-bold`}
          style={{
            gridColumn: gridTransitionHandler({
              type: "col",
              id: item.id,
              colRow: item.col,
            }),
            gridRow: gridTransitionHandler({
              type: "row",
              id: item.id,
              colRow: item.row,
            }),
          }}
        >
          <h2>Lorem, ipsum. {item.id}</h2>
        </motion.div>
      ))}
    </div>
  );
}
