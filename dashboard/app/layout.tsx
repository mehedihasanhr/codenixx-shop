import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "./providers/app.provider";
import { ThemeProvider } from "./providers/theme.provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Codenixx Shop",
  description: "codenixx.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          themes={["dark", "light", "system"]}
          enableSystem
          disableTransitionOnChange
        >
          <AppContextProvider>{children}</AppContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
