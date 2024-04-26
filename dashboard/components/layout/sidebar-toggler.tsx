"use client";

import { useAppContext } from "@/app/providers/app.provider";
import { Button } from "@/components/ui/button";
import React from "react";

export default function SidebarToggler({
  children,
}: {
  children: React.ReactNode;
}) {
  const { sidebarToggler } = useAppContext();

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      className="lg:hidden"
      onClick={sidebarToggler}
    >
      {children}
    </Button>
  );
}
