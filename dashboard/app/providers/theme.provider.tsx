"use client";

import { applyTheme, type ColorTheme } from "@/lib/color-theme";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import React from "react";
import { useLocalStorage } from "react-use";

interface ThemeConfig {
  colorSchema: ColorTheme;
  fontFamily: string;
  borderRadius: string;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // default theme configuration
  const [themeConfig, setThemeConfig] =
    useLocalStorage<ThemeConfig>("theme-config");

  React.useEffect(() => {
    if (themeConfig === undefined) {
      setThemeConfig({
        colorSchema: "blue",
        fontFamily: "inter",
        borderRadius: "sm",
      });
      applyTheme("blue");
    } else {
      applyTheme(themeConfig.colorSchema);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
