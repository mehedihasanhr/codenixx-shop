"use client";

import * as React from "react";
import { useLocalStorage } from "react-use";

interface IAppContext {
  config: {
    sidebar: "show" | "hide";
  };
  sidebarToggler: () => void;
}

const defaultValue: IAppContext = {
  config: {
    sidebar: "show",
  },
  sidebarToggler: () => {},
};

export const AppContext = React.createContext<IAppContext>(defaultValue);

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarStatus, setSidebarStatus] = useLocalStorage<
    "show" | "hide" | undefined
  >("sidebar", "show");
  const [sidebar, setSidebar] = React.useState<"show" | "hide">("show");

  // default sidebar status
  React.useLayoutEffect(() => {
    if (sidebarStatus !== undefined) {
      setSidebar(sidebarStatus);
    }
  }, [sidebarStatus]);

  // sidebar toggler for mobile
  const sidebarToggler = () => {
    if (sidebarStatus !== undefined && sidebarStatus === "show") {
      setSidebarStatus("hide");
      setSidebar("hide");
    } else {
      setSidebarStatus("show");
      setSidebar("show");
    }
  };

  const contextValue = {
    config: {
      sidebar,
    },
    sidebarToggler,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  const context = React.useContext(AppContext);
  return context;
}
