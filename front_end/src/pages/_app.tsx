import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NavContext } from "@/context/NavContext";
import Navbar from "@/components/Navbar";
import Sidenav from "@/components/Sidenav";
import LoginModal from "@/components/Auth/Login";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavContext>
      <Navbar />
      <Sidenav />
      <Component {...pageProps} />
      <LoginModal/>
    </NavContext>
  );
}
