import React, { createContext, useState } from "react";

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
    console.log("beforeloc",setRenter)
    localStorage.setItem("renter", JSON.stringify(sup));
    console.log("local",localStorage)
  };

  const logOut = () => {
    console.log("Clicked Log Out Button");
    setSupplier(null);
    setRenter(null);
    // localStorage.removeItem("user");
  };


  return (
    <AuthContext.Provider value={{ supplier, setUserSupplier, renter, setUserRenter, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
