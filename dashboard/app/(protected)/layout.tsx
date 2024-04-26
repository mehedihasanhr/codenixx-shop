import Navbar from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import React, { Suspense } from "react";

export default function ProtectedRouteLayout({
  children,
  settings,
}: {
  children: React.ReactNode;
  settings: React.ReactNode;
}) {
  return (
    <main className="flex items-start">
      <Sidebar />
      <div className="flex-1">
        <div className="h-screen w-full overflow-y-auto">
          <Navbar />
          <div className="">{children}</div>
        </div>
      </div>
      <Suspense fallback={<>Loading...</>}>{settings}</Suspense>
    </main>
  );
}
