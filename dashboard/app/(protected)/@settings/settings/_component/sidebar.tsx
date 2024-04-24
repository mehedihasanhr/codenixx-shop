"use client";

import { Separator } from "@/components/ui/separator";
import {
  IconBellRinging,
  IconCreditCard,
  IconKey,
  IconLock,
  IconMoonStars,
  IconPrinter,
  IconShieldCheck,
  IconUsers,
} from "@tabler/icons-react";
import _ from "lodash";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";
import AccountProfile from "./profile";

const data = [
  {
    id: "general",
    group: "General",
    items: [
      {
        id: "appearance",
        title: "Appearance",
        href: "appearance",
        Icon: IconMoonStars,
      },
      {
        id: "notification",
        title: "Notification",
        href: "notification",
        Icon: IconBellRinging,
      },
    ],
  },

  {
    id: "managements",
    group: "Managements",
    items: [
      {
        id: "user_managements",
        title: "User Managements",
        href: "user_managements",
        Icon: IconUsers,
      },
      {
        id: "permissions",
        title: "Permissions",
        href: "permissions",
        Icon: IconKey,
      },
      {
        id: "authentication",
        title: "Authentication",
        href: "authentication",
        Icon: IconLock,
      },
      {
        id: "payments",
        title: "Payments",
        href: "payments",
        Icon: IconCreditCard,
      },
      {
        id: "security_access",
        title: "Security & Access",
        href: "security_access",
        Icon: IconShieldCheck,
      },

      {
        id: "import_export_data",
        title: "Import & Export Data",
        href: "import_export_data",
        Icon: IconPrinter,
      },
    ],
  },
];

export function SettingLayoutSidebar() {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="w-full max-w-[280px] py-6 pr-3">
      <p className="block text-sm text-gray-400 pl-5">Account</p>
      <Link
        href="/settings/account "
        replace={true}
        prefetch={false}
        className="block ml-2 pl-3 py-1 mt-3 hover:bg-gray-100 dark:hover:bg-[#31363F] hover:cursor-pointer rounded-md"
      >
        <AccountProfile />
      </Link>
      <Separator className="bg-transparent h-8 pl-5" />
      {_.map(data, (content) => (
        <React.Fragment key={content.id}>
          <h6 className="text-sm text-[#9c9daf] dark:text-zinc-500 font-medium block pl-5">
            {content.group}
          </h6>
          <ul className="mt-2 mb-4">
            {_.map(content.items, ({ Icon, ...item }) => (
              <li className="mb-1 px-2" key={item.id}>
                <Link
                  href={"/settings/" + item.href}
                  replace={true}
                  prefetch={false}
                  data-active={segment === item.href}
                  className="flex items-center gap-1.5 text-base text-gray-700 dark:text-gray-300 py-2 hover:bg-gray-100 dark:hover:bg-[#31363F] pl-3 rounded-md data-[active=true]:bg-gray-100 dark:data-[active=true]:bg-[#31363F]"
                >
                  <Icon size={16} />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </div>
  );
}
