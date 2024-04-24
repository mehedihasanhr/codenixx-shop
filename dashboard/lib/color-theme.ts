import { colorThemes } from "@/app/themes";

// Function to apply theme to document.documentElement
export type ColorTheme = keyof typeof colorThemes;

export const applyTheme = (theme: ColorTheme = "blue") => {
  const colorTheme = colorThemes[theme];
  // Create a style element for the color theme
  let colorStyle = document.querySelector(`style[data-theme="theme-variable"]`);
  if (!colorStyle) {
    colorStyle = document.createElement("style");
    colorStyle.setAttribute("data-theme", "theme-variable");
    document.head.appendChild(colorStyle);
  }
  colorStyle.textContent = colorTheme;
};
