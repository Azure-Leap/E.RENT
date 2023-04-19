import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NavContext } from "@/context/NavContext";
import Navbar from "@/components/Navbar";
import Sidenav from "@/components/Sidenav";
import LoginModal from "@/components/Auth/Login";
import RegisterUserModal from "@/components/Auth/RegisterUser";
import RegisterBusinessModal from "@/components/Auth/RegisterBusiness";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavContext>
      <Navbar />
      <Sidenav />
      <Component {...pageProps} />
      <LoginModal />
      <RegisterUserModal />
      <RegisterBusinessModal />
    </NavContext>
  );
}
