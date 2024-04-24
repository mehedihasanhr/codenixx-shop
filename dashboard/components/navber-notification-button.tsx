import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IconBell } from "@tabler/icons-react";

export default function NavbarNotificationButton() {
  return (
    <Popover>
      <PopoverTrigger className="w-10 h-10 rounded-full flex items-center justify-center bg-background hover:bg-primary group transition-colors duration-200">
        <div className="relative">
          <IconBell className="text-gray-500 group-hover:text-white transition-colors duration-200" />

          <span className="absolute top-0.5 right-0.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 border bg-red-600"></span>
            </span>
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  );
}
