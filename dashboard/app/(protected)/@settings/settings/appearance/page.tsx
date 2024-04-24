import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  AccentColorButton,
  ColorSchemaProvider,
} from "../_component/accent-color-button";
import AppearanceThemeButton from "../_component/appearance-theme-button";
import SettingPageLayout from "../_component/setting-page-layout";

export default function AppearanceSettings() {
  return (
    <SettingPageLayout title="Appearance">
      <div className="mt-4">
        <h6 className="text-sm text-gray-700 dark:text-gray-100">Theme</h6>
        <p className="text-xs dark:text-gray-400">Customize your UI theme</p>

        <div className="mt-4 grid w-full max-w-[580px] grid-cols-12 gap-6">
          <div className="col-span-4 ">
            <AppearanceThemeButton theme="light" />
          </div>
          <div className="col-span-4 ">
            <AppearanceThemeButton theme="dark" className="bg-slate-900" />
          </div>
          <div className="2 col-span-4">
            <AppearanceThemeButton theme="system" />
          </div>
        </div>
      </div>

      <div className="mt-14 block">
        <Separator className="my-4 dark:bg-[#404550]" />
        <div className="flex items-center justify-between">
          <div>
            <h6 className="text-sm text-gray-700 dark:text-gray-100">
              Accent color
            </h6>
            <p className="text-xs dark:text-gray-400">
              Choose your accent color
            </p>
          </div>

          <ColorSchemaProvider className="flex items-center space-x-2">
            <AccentColorButton
              className="bg-green-500 ring-green-500"
              theme="green"
            />
            <AccentColorButton
              className="bg-blue-500 ring-blue-500"
              theme="blue"
            />

            <AccentColorButton
              className="bg-rose-500 ring-rose-500"
              theme="rose"
            />

            <AccentColorButton
              className="bg-purple-500 ring-purple-500"
              theme="purple"
            />

            <AccentColorButton
              className="bg-orange-500 ring-orange-500"
              theme="orange"
            />
          </ColorSchemaProvider>
        </div>
      </div>

      <div className="mt-5 block">
        <Separator className="my-4 dark:bg-[#404550]" />
        <div className="flex items-center justify-between">
          <div>
            <h6 className="text-sm text-gray-700 dark:text-gray-100">
              Font Style
            </h6>
            <p className="text-xs dark:text-gray-400">Choose your font style</p>
          </div>

          <div className="flex items-center space-x-2">
            <Select defaultValue="inter">
              <SelectTrigger className="h-10 w-48 px-2.5 text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="inter">Inter</SelectItem>
                <SelectItem value="mukta">Mukta</SelectItem>
                <SelectItem value="poppins">Poppins</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </SettingPageLayout>
  );
}
