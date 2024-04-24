import { IconShieldCheckFilled } from "@tabler/icons-react";

export default function AccountProfile() {
  return (
    <div className="flex items-center">
      <div className="w-9 h-9 rounded-full bg-primary text-white font-medium text-2xl grid place-content-center">
        M
      </div>
      <div className="pl-2 flex-1">
        <h5 className="flex items-center text-base font-medium text-gray-700 dark:text-gray-50 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:fill-primary [&>svg]:ml-1">
          MD Mehedi Hasan
          <IconShieldCheckFilled />
        </h5>
        <span className="text-xs text-gray-500 dark:text-gray-400 -mt-0.5 block">
          Super Admin
        </span>
      </div>
    </div>
  );
}
