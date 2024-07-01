import Login from "@/app/Login";
import { GlobalContextProvider } from "@/helpers/GlobalContext";

export default function HomePage() {
  return (
    <GlobalContextProvider>
      <Login />
    </GlobalContextProvider>
  );
}
