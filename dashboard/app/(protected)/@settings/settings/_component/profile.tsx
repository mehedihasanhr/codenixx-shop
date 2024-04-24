import { IconShieldCheckFilled } from "@tabler/icons-react";

export default function AccountProfile() {
  return (
    <div className="flex items-center">
      <div className="grid h-9 w-9 place-content-center rounded-full bg-primary text-2xl font-medium text-white">
        M
      </div>
      <div className="flex-1 pl-2">
        <h5 className="flex items-center text-base font-medium text-gray-700 dark:text-gray-50 [&>svg]:ml-1 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-primary">
          MD Mehedi Hasan
          <IconShieldCheckFilled />
        </h5>
        <span className="-mt-0.5 block text-xs text-gray-500 dark:text-gray-400">
          Super Admin
        </span>
      </div>
    </div>
  );
}
