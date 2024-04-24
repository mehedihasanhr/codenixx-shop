"use client";

import _ from "lodash";
import React from "react";
import { Accordion } from "../ui/accordion";
import { ScrollArea } from "../ui/scroll-area";
import { Skeleton } from "../ui/skeleton";
import Logo from "./logo";
import SidebarItem from "./sidebar-item";
import { SidebarData, type TSidebarItem } from "./sidebar.data";

export function Sidebar(): React.ReactNode {
  const [isLoading, setIsLoading] = React.useState(true);
  const [defaultActiveRoute, setDefaultActiveRoute] =
    React.useState("dashboard");

  return (
    <aside className="flex h-screen w-full max-w-[250px] flex-col border-r border-gray-200 bg-white dark:border-gray-600 dark:bg-[#31363F]">
      {/* Logo */}
      <div className="border-b border-gray-200 px-4 py-2.5 dark:border-gray-600">
        <Logo />
      </div>

      <ScrollArea className="flex-1">
        <Accordion
          type="single"
          collapsible
          value={defaultActiveRoute}
          className="py-5"
        >
          <div className="px-2.5">
            {_.map(
              SidebarData(),
              (item: { id: string; group: string; items: TSidebarItem[] }) => (
                <React.Fragment key={item.id}>
                  {item.group !== "" ? (
                    isLoading ? (
                      <Skeleton className="mb-3 mt-4 h-3.5 w-2/3" />
                    ) : (
                      <span className="mb-3 mt-4 block text-xs font-medium text-gray-500">
                        {item.group}
                      </span>
                    )
                  ) : null}

                  {_.map(item.items, (d: TSidebarItem) => (
                    <SidebarItem
                      key={d.id}
                      item={d}
                      isLoading={isLoading}
                      toggleActiveRoute={(value: string) => {
                        setDefaultActiveRoute(value);
                        setIsLoading(false);
                      }}
                    />
                  ))}
                </React.Fragment>
              )
            )}
          </div>
        </Accordion>
      </ScrollArea>
    </aside>
  );
}
