"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { SettingLayoutSidebar } from "./_component/sidebar";

export default function SettingModalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  React.useEffect(() => {
    if (pathname === "/settings") {
      router.replace("/settings/account");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // close modal
  const closeModal = () => router.back();
  return (
    <div className="fixed left-0 top-0 z-50 grid h-screen w-screen place-items-center">
      {/* overlay */}
      <div
        className="fixed left-0 top-0 -z-10 h-screen w-screen bg-[#181c22]/70"
        onClick={closeModal}
        onKeyUp={closeModal}
      />
      {/* content */}
      <div className="flex h-4/5 w-full max-w-[1080px] items-start rounded-xl bg-[#eaeaee] dark:bg-[#222831]">
        {/* sidebar */}
        <SettingLayoutSidebar />
        {/* content */}
        <div className="h-full min-h-full flex-1 p-4">
          <div className="min-h-full rounded-xl bg-white p-9 dark:bg-[#31363f]/30">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
