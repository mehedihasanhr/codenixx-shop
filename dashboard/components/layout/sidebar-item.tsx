"use client";

import { IconPointFilled } from "@tabler/icons-react";
import _ from "lodash";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Skeleton } from "../ui/skeleton";
import { type TSidebarItem } from "./sidebar.data";

export default function SidebarItem({
  item,
  isLoading,
  toggleActiveRoute,
}: {
  item: TSidebarItem;
  isLoading: boolean;
  toggleActiveRoute: (value: string) => void;
}) {
  const { Icon, title, href, subItems } = item;
  const pathname = usePathname();
  const pathnames: string[] =
    subItems !== null && _.isArray(subItems)
      ? subItems.map((d) => d.href)
      : [href];

  const handleExpend = () => toggleActiveRoute(item.id);

  React.useEffect(() => {
    _.map(pathnames, (p: string) => {
      if (pathname.startsWith(p)) {
        toggleActiveRoute(item.id);
        return null;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (isLoading) {
    return (
      <div className="flex h-10 items-center">
        <Skeleton className="mb-1 h-5 w-full">
          <span className="invisible">{title}</span>
        </Skeleton>
      </div>
    );
  }

  if (subItems === undefined && href !== undefined) {
    return (
      <AccordionItem value={item.id} className="mb-1 border-none" asChild>
        <Link href={href}>
          <AccordionTrigger className="flex items-center justify-start rounded-[6px] border-none px-2.5 py-2 text-base font-normal text-gray-600 hover:bg-gray-100 data-[state=open]:bg-slate-500/10 data-[state=open]:text-slate-700 dark:text-gray-200 dark:hover:bg-[#222831]/50 dark:data-[state=open]:bg-[#222831] dark:data-[state=open]:text-white last:[&>svg]:hidden">
            <Icon />
            <div className="f mr-auto px-2.5">{title}</div>
          </AccordionTrigger>
        </Link>
      </AccordionItem>
    );
  }

  return (
    <AccordionItem value={item.id} className="mb-1 border-none">
      <AccordionTrigger
        onClick={handleExpend}
        className="flex items-center justify-start rounded-[6px] border-none px-2.5 py-2 text-base text-gray-600 hover:bg-gray-100 data-[state=open]:bg-slate-500/10 data-[state=open]:text-slate-700 dark:text-gray-50 dark:hover:bg-[#222831]/50 dark:data-[state=open]:bg-[#222831] dark:data-[state=open]:text-white"
      >
        <Icon />
        <div className="mr-auto px-2.5">{title}</div>
      </AccordionTrigger>

      <AccordionContent className="mt-1 rounded-[6px] bg-gray-50 p-0 dark:bg-[#222831]">
        <ul className="px-4 py-1.5">
          {_.map(subItems, (s: Partial<TSidebarItem>) =>
            s.href !== undefined ? (
              <li key={s.id}>
                <Link
                  href={s.href}
                  data-active={pathname.includes(s.href)}
                  className="flex items-center py-1.5 hover:text-primary data-[active=true]:font-medium data-[active=true]:text-primary"
                >
                  <IconPointFilled size={16} />
                  <span className="px-1.5"> {s.title} </span>
                </Link>
              </li>
            ) : null
          )}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}
