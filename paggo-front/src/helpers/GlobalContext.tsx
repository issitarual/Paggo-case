"use client";

import React, { useState } from "react";

interface IGlobalContextProps {
  userId: string;
  loading: boolean;
  openDrawer: boolean;
  setUserId: (user: string) => void;
  setLoading: (loading: boolean) => void;
  setOpenDrawer: (open: boolean) => void;
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  userId: "",
  loading: false,
  openDrawer: false,
  setUserId: () => {},
  setLoading: () => {},
  setOpenDrawer: () => {},
});

export const GlobalContextProvider = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const [userId, setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        userId,
        loading: isLoading,
        openDrawer,
        setUserId,
        setLoading: setIsLoading,
        setOpenDrawer,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};