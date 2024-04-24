"use client";

import { applyTheme, ColorTheme } from "@/lib/color-theme";
import { cn } from "@/lib/utils";
import React from "react";
import { useLocalStorage } from "react-use";

interface IProps {
  className?: string;
  theme: ColorTheme;
}

interface IColorSchema {
  colorSchema: ColorTheme;
  setColorSchema: Function;
}

type ThemeConfig = {
  colorSchema: ColorTheme;
  fontFamily: string;
  borderRadius: "md";
};

const ColorSchema = React.createContext<IColorSchema | null>(null);

export const useColorSchema = () => {
  const context = React.useContext(ColorSchema);
  if (!context) throw new Error("Please use with ColorSchemaProvider");
  return context;
};

export function ColorSchemaProvider({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [themeConfig, setThemeConfig] =
    useLocalStorage<ThemeConfig>("theme-config");
  const [selectedTheme, setSelectedTheme] = React.useState<ColorTheme>("blue");

  // set default
  React.useEffect(() => {
    if (themeConfig) {
      setSelectedTheme(() => themeConfig.colorSchema);
    }
  }, [themeConfig]);

  const handleThemeChange = (value: ColorTheme) => {
    if (themeConfig) {
      setThemeConfig({ ...themeConfig, colorSchema: value });
    } else {
      setThemeConfig({
        fontFamily: "inter",
        borderRadius: "md",
        colorSchema: value,
      });
    }
    setSelectedTheme(value);
    applyTheme(value);
  };

  return (
    <ColorSchema.Provider
      value={{
        colorSchema: selectedTheme,
        setColorSchema: handleThemeChange,
      }}
    >
      <div className={cn("flex items-center space-x-2", className)}>
        {children}
      </div>
    </ColorSchema.Provider>
  );
}

export function AccentColorButton(props: IProps) {
  const { colorSchema, setColorSchema } = useColorSchema();

  return (
    <div
      className={cn(
        "w-8 h-7 rounded-sm hover:ring-1 data-[selected=true]:ring-1 ring-offset-2",
        props.className
      )}
      onClick={() => setColorSchema(props.theme)}
      data-selected={colorSchema === props.theme}
    />
  );
}
