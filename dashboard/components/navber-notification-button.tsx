import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IconBell } from "@tabler/icons-react";

export default function NavbarNotificationButton() {
  return (
    <Popover>
      <PopoverTrigger className="group flex h-10 w-10 items-center justify-center rounded-full bg-background transition-colors duration-200 hover:bg-primary">
        <div className="relative">
          <IconBell className="text-gray-500 transition-colors duration-200 group-hover:text-white" />

          <span className="absolute right-0.5 top-0.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full border bg-red-600"></span>
            </span>
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  );
}
