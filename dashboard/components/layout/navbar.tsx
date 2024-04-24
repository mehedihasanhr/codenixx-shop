import NavbarProfileButton from "../navbar-profile-button";
import NavbarNotificationButton from "../navber-notification-button";

export default function Navbar() {
  return (
    <div className="flex items-center justify-start h-[72px] border-b bg-white dark:bg-[#31363F] px-8">
      <div className="ml-auto flex items-center">
        <NavbarNotificationButton />
        <div className="ml-10">
          <NavbarProfileButton />
        </div>
      </div>
    </div>
  );
}
