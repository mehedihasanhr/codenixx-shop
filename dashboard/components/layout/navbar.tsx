import { IconMenu2 } from "@tabler/icons-react";
import NavbarProfileButton from "../navbar-profile-button";
import NavbarNotificationButton from "../navber-notification-button";
import SidebarToggler from "./sidebar-toggler";

export default function Navbar() {
  return (
    <div className="sticky left-0 top-0 z-10 flex h-[73px] w-full items-center justify-start border-b bg-white px-8 dark:bg-[#31363F]">
      <SidebarToggler>
        <IconMenu2 />
      </SidebarToggler>

      <div className="ml-auto flex items-center">
        <NavbarNotificationButton />
        <div className="ml-10">
          <NavbarProfileButton />
        </div>
      </div>
    </div>
  );
}
