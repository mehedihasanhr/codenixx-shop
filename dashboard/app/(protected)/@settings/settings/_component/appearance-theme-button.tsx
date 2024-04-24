"use client";

import { IconCircleCheckFilled } from "@tabler/icons-react";
import clsx from "clsx";
import _ from "lodash";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

interface IProps {
  theme: "dark" | "light" | "system";
  className?: string;
}

export default function AppearanceThemeButton(props: IProps) {
  const { theme, setTheme } = useTheme();
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    setIsActive(theme === props.theme);
  }, [theme, props.theme]);

  const content = () => {
    switch (props.theme) {
      case "light":
        return (
          <Image
            src="/appearance/light.png"
            alt="Dark-theme"
            width={200}
            height={180}
          />
        );
      case "dark":
        return (
          <Image
            src="/appearance/dark.png"
            alt="Dark-theme"
            width={200}
            height={180}
          />
        );
      case "system":
        return (
          <Image
            src="/appearance/system.png"
            alt="Dark-theme"
            width={200}
            height={180}
          />
        );
    }
  };
  return (
    <div
      className={clsx(
        "relative flex h-28 flex-col justify-end rounded-xl border border-gray-200 px-3 hover:ring-2  hover:ring-ring hover:ring-offset-2 hover:ring-offset-white dark:border-[#404550] dark:hover:ring-offset-[#272C35]",
        isActive &&
          "ring-2 ring-ring ring-offset-white dark:ring-offset-[#272C35]",
        props.className
      )}
      onClick={() => setTheme(props.theme)}
      onKeyUp={() => setTheme(props.theme)}
    >
      {content()}

      {isActive ? (
        <IconCircleCheckFilled className="absolute bottom-1 right-1.5 self-end text-primary" />
      ) : null}

      <span className="absolute -bottom-8 left-0 text-sm font-medium">
        {_.upperFirst(props.theme)}
      </span>
    </div>
  );
}
