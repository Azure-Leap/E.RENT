import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NavContext } from "@/context/NavContext";
import { AuthProvider } from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductAxiosProvider, { ProductAxiosContext } from "@/context/ProductAxiosContext";
import { CartContextProvider } from "@/context/CartContext";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => localStorage.removeItem("supplier"));
  // useEffect(() => localStorage.removeItem("user"));
  return (
    <AuthProvider>
      <CartContextProvider>
        <NavContext>
          <ProductAxiosProvider>
            <Component {...pageProps} />
            <ToastContainer />
            {/* <Footer /> */}
          </ProductAxiosProvider>
        </NavContext>
      </CartContextProvider>
    </AuthProvider>
  );
}
