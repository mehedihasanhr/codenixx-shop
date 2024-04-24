import * as React from "react";

import { Separator } from "@/components/ui/separator";
import SettingModalCloseButton from "./setting-modal-close-btn";

export default function SettingPageLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <div className="flex items-center justify-between">
        <span className="font-medium text-sm">{title}</span>
        <SettingModalCloseButton />
      </div>
      <Separator className="mt-2" />

      {children}
    </React.Fragment>
  );
}
