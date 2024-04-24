"use client";

import { applyTheme, type ColorTheme } from "@/lib/color-theme";
import { cn } from "@/lib/utils";
import React from "react";
import { useLocalStorage } from "react-use";

interface IProps {
  className?: string;
  theme: ColorTheme;
}

interface IColorSchema {
  colorSchema: ColorTheme;
  setColorSchema: (value: ColorTheme) => void;
}

interface ThemeConfig {
  colorSchema: ColorTheme;
  fontFamily: string;
  borderRadius: "md";
}

const ColorSchema = React.createContext<IColorSchema | null>(null);

export const useColorSchema = () => {
  const context = React.useContext(ColorSchema);
  if (context === null) throw new Error("Please use with ColorSchemaProvider");
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
    if (themeConfig !== undefined) {
      setSelectedTheme(() => themeConfig.colorSchema);
    }
  }, [themeConfig]);

  const handleThemeChange = (value: ColorTheme) => {
    if (themeConfig !== undefined) {
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
        "h-7 w-8 rounded-sm ring-offset-2 hover:ring-1 data-[selected=true]:ring-1",
        props.className
      )}
      onClick={() => setColorSchema(props.theme)}
      onKeyUp={() => setColorSchema(props.theme)}
      data-selected={colorSchema === props.theme}
    />
  );
}
