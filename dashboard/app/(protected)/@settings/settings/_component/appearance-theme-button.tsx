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
        "relative border border-gray-200 dark:border-[#404550] rounded-xl h-28 px-3 flex flex-col justify-end  hover:ring-ring hover:ring-2 hover:ring-offset-white dark:hover:ring-offset-[#272C35] hover:ring-offset-2",
        isActive &&
          "ring-ring ring-2 ring-offset-white dark:ring-offset-[#272C35]",
        props.className
      )}
      onClick={() => setTheme(props.theme)}
    >
      {content()}

      {isActive ? (
        <IconCircleCheckFilled className="text-primary self-end absolute right-1.5 bottom-1" />
      ) : null}

      <span className="absolute -bottom-8 left-0 text-sm font-medium">
        {_.upperFirst(props.theme)}
      </span>
    </div>
  );
}
