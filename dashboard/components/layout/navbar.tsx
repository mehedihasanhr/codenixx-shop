import NavbarProfileButton from "../navbar-profile-button";
import NavbarNotificationButton from "../navber-notification-button";

export default function Navbar() {
  return (
    <div className="flex h-[72px] items-center justify-start border-b bg-white px-8 dark:bg-[#31363F]">
      <div className="ml-auto flex items-center">
        <NavbarNotificationButton />
        <div className="ml-10">
          <NavbarProfileButton />
        </div>
      </div>
    </div>
  );
}
