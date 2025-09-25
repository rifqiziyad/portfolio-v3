"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Link from "next/link";
import clsx from "clsx";

export function BentoGridHome() {

  return (
    <ul
      className="grid grid-cols-1 grid-rows-none md:grid-cols-12 md:grid-rows-12 md:h-[100vh]"
    >
      <GridItem
        area="md:[grid-area:1/1/10/5]"
        icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="loremLaboris"
        description="Culpa nostrud deserunt eu consequat non eiusmod amet irure occaecat elit do incididunt cillum."
      />

      <GridItem
        area="md:[grid-area:10/1/13/5]"
        icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Est in sint"
        description="Quis ullamco nulla velit dolor Lorem exercitation."
      />

      <GridItem
        area="md:[grid-area:1/5/8/9]"
        icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Anim commodo"
        description="Qui excepteur ex et proident quis minim consequat fugiat ad quis fugiat sint ut tempor."
      />

      <GridItem
        area="md:[grid-area:1/9/4/13]"
        icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Non enim"
        description="Occaecat officia pariatur duis eiusmod consectetur voluptate ea duis."
      />

      <GridItem
        area="md:[grid-area:4/9/8/13]"
        icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Deserunt dolor"
        description="Proident labore non et ea nulla."
      />

      <GridItem
        area="md:[grid-area:8/5/13/13]"
        icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Deserunt dolor"
        description="Proident labore non et ea nulla."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={clsx("list-none border", area)}>
      <Link href={""} className="relative h-full p-0">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden p-6 md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit border border-gray-600 p-2">{icon}</div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};
