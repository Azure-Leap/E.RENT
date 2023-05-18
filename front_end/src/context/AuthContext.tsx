import React, { createContext, useState,useEffect } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

const AuthProvider = ({ children }: any) => {
  const [supplier, setSupplier] = useState<any>(null);
  const setUserSupplier = (sup: any) => {
    setSupplier(sup);
    // localStorage.setItem("user", JSON.stringify(sup));
  };
  const [renter, setRenter] = useState<any>(null);
  const setUserRenter = (sup: any) => {
    setRenter(sup);
    localStorage.setItem("renter", JSON.stringify(sup));
    console.log("local",localStorage)
  };
  const [isLogged,setIsLogged]=useState<any>(false)
  const setLogged = (sup:any)=>{
    setIsLogged(sup)
    localStorage.setItem("isLogged",JSON.stringify(sup))
  }

  const logOut = () => {
    console.log("Clicked Log Out Button");
    setSupplier(null);
    setRenter(null);
    setLogged(false);
    localStorage.removeItem("renter");
    console.log("renter",renter)
    toast.error("Гарлаа", { autoClose: 1000, position: "bottom-right" });
  };


  return (
    <AuthContext.Provider value={{ supplier, setUserSupplier, renter, setUserRenter, logOut ,setLogged,isLogged}}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
