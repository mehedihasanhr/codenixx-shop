import GeneralAccountEditForm from "@/components/forms/general-account-edit-form";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import AccountProfile from "../_component/profile";
import SettingPageLayout from "../_component/setting-page-layout";

export default function AccountSettingPage() {
  return (
    <SettingPageLayout title="Account">
      <div className="flex items-center justify-between mb-9 mt-4">
        <AccountProfile />
        <Button
          size="sm"
          variant="secondary"
          className="text-sm h-8 hover:bg-gray-700 hover:text-white dark:bg-background"
        >
          Change Avatar
        </Button>
      </div>

      <span className="font-medium text-sm">General</span>
      <Separator className="mt-2 mb-5 " />

      {/* General Edit form */}
      <GeneralAccountEditForm />
    </SettingPageLayout>
  );
}
