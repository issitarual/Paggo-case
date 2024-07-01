"use client";

import React, { useState } from "react";

interface IGlobalContextProps {
  loading: boolean;
  openDrawer: boolean;
  setLoading: (loading: boolean) => void;
  setOpenDrawer: (open: boolean) => void;
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  loading: false,
  openDrawer: false,
  setLoading: () => {},
  setOpenDrawer: () => {},
});

export const GlobalContextProvider = (props: {
  children:
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        loading: isLoading,
        openDrawer,
        setLoading: setIsLoading,
        setOpenDrawer,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};