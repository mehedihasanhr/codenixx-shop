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
    <div className="fixed top-0 left-0 grid place-items-center w-screen h-screen">
      {/* overlay */}
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-[#181c22]/70 -z-10"
        onClick={closeModal}
      />
      {/* content */}
      <div className="flex items-start w-full max-w-[1080px] h-4/5 bg-[#eaeaee] dark:bg-[#222831] rounded-xl">
        {/* sidebar */}
        <SettingLayoutSidebar />
        {/* content */}
        <div className="p-4 flex-1 h-full min-h-full">
          <div className="min-h-full bg-white dark:bg-[#31363f]/30 rounded-xl p-9">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
