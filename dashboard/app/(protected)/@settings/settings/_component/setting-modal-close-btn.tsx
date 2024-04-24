"use client";

import { IconX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { Button } from "../../../../../components/ui/button";

export default function SettingModalCloseButton() {
  const router = useRouter();
  const close = () => router.back();

  return (
    <Button
      size="sm"
      variant="ghost"
      className="w-8 h-8 p-0 text-gray-500"
      onClick={close}
    >
      <IconX size={16} />
    </Button>
  );
}
