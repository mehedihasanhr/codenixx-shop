import GeneralAccountEditForm from "@/components/forms/general-account-edit-form";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import AccountProfile from "../_component/profile";
import SettingPageLayout from "../_component/setting-page-layout";

export default function AccountSettingPage() {
  return (
    <SettingPageLayout title="Account">
      <div className="mb-9 mt-4 flex items-center justify-between">
        <AccountProfile />
        <Button
          size="sm"
          variant="secondary"
          className="h-8 text-sm hover:bg-gray-700 hover:text-white dark:bg-background"
        >
          Change Avatar
        </Button>
      </div>

      <span className="text-sm font-medium">General</span>
      <Separator className="mb-5 mt-2 " />

      {/* General Edit form */}
      <GeneralAccountEditForm />
    </SettingPageLayout>
  );
}
