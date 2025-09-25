"use client";

import { BentoGridHome } from "@/components/Home/BentoGridHome";
import { AuroraBackground } from "@/components/ui/aurora-background";
import React from "react";

export default function Home() {
  return (
    <AuroraBackground>
      <BentoGridHome />
    </AuroraBackground>
  );
}
