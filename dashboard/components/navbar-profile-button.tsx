"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IconSettings, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function NavbarProfileButton() {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="group flex h-10 w-10 items-center justify-center rounded-full bg-background transition-colors duration-200 hover:bg-primary">
        <Avatar className="h-10 w-10">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            className="h-10 w-10"
          />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-52 p-0" align="end">
        <ul>
          <li>
            <Link
              href="/settings/account"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-2.5 py-1.5 hover:bg-background dark:hover:bg-[#31363F]"
            >
              <IconUser size={18} />
              Account
            </Link>
          </li>

          <li>
            <Link
              href="/settings/appearance"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-2.5 py-1.5 hover:bg-background dark:hover:bg-[#31363F]"
            >
              <IconSettings size={18} />
              Settings
            </Link>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
