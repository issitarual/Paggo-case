"use client";
import Home from "@/app/Home";
import { GlobalContextProvider } from "@/helpers/GlobalContext";

export default function HomePage() {
  return (
    <GlobalContextProvider>
      <Home />
    </GlobalContextProvider>
  );
}
