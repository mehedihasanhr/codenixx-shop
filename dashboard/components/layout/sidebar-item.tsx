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
import { TSidebarItem } from "./sidebar.data";

export default function SidebarItem({
  item,
  isLoading,
  toggleActiveRoute,
}: {
  item: TSidebarItem;
  isLoading: boolean;
  toggleActiveRoute: Function;
}) {
  const { Icon, title, href, segment, sub_items } = item;
  const pathname = usePathname();
  const pathnames =
    sub_items && _.isArray(sub_items) ? sub_items.map((d) => d.href) : [href];

  const handleExpend = () => toggleActiveRoute(item.id);

  React.useEffect(() => {
    _.map(pathnames, (p) => {
      if (pathname.startsWith(p)) {
        toggleActiveRoute(item.id);
        return;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (isLoading) {
    return (
      <div className="flex items-center h-10">
        <Skeleton className="h-5 w-full mb-1">
          <span className="invisible">{title}</span>
        </Skeleton>
      </div>
    );
  }

  if (!sub_items && href) {
    return (
      <AccordionItem value={item.id} className="border-none mb-1">
        <Link href={href} prefetch={false}>
          <AccordionTrigger className="flex justify-start items-center py-2 px-2.5 text-gray-600 dark:text-gray-200 font-normal text-base border-none rounded-[6px] data-[state=open]:bg-slate-500/10 data-[state=open]:text-slate-700 last:[&>svg]:hidden hover:bg-gray-100 dark:data-[state=open]:bg-[#222831] dark:data-[state=open]:text-white dark:hover:bg-[#222831]/50">
            <Icon />
            <div className="px-2.5 mr-auto f">{title}</div>
          </AccordionTrigger>
        </Link>
      </AccordionItem>
    );
  }

  return (
    <AccordionItem value={item.id} className="border-none mb-1">
      <AccordionTrigger
        onClick={handleExpend}
        className="flex justify-start items-center py-2 px-2.5 text-gray-600 dark:text-gray-50 text-base border-none rounded-[6px] data-[state=open]:bg-slate-500/10 data-[state=open]:text-slate-700 hover:bg-gray-100 dark:data-[state=open]:bg-[#222831] dark:data-[state=open]:text-white dark:hover:bg-[#222831]/50"
      >
        <Icon />
        <div className="px-2.5 mr-auto">{title}</div>
      </AccordionTrigger>

      <AccordionContent className="bg-gray-50 dark:bg-[#222831] rounded-[6px] mt-1 p-0">
        <ul className="py-1.5 px-4">
          {_.map(sub_items, (s: Partial<TSidebarItem>) =>
            !!s.href ? (
              <li key={s.id}>
                <Link
                  href={s.href}
                  prefetch={false}
                  data-active={pathname.includes(s.href)}
                  className="flex items-center py-1.5 hover:text-primary data-[active=true]:text-primary data-[active=true]:font-medium"
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
