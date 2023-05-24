import "@/styles/globals.css";
import "../../node_modules/leaflet/dist/leaflet.css";
import type { AppProps } from "next/app";
import { NavContext } from "@/context/NavContext";
import { AuthProvider } from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductAxiosProvider, {
  ProductAxiosContext,
} from "@/context/ProductAxiosContext";
import CartProvider from "@/context/CartContext";

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => localStorage.removeItem("supplier"));
  // useEffect(() => localStorage.removeItem("user"));
  return (
    <AuthProvider>
      <CartProvider>
        <NavContext>
          <ProductAxiosProvider>
            <Component {...pageProps} />
            <ToastContainer />
            {/* <Footer /> */}
          </ProductAxiosProvider>
        </NavContext>
      </CartProvider>
    </AuthProvider>
  );
}
