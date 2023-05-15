import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }: any) => {
  const [supplier, setSupplier] = useState<any>(null);
  const [supplier_role, setSupplier_role] = useState<any>("");
  const setUser = (sup: any) => {
    setSupplier(sup);
    // localStorage.setItem("user", JSON.stringify(sup));
  };

  const logOut = () => {
    console.log("Clicked Log Out Button");
    setSupplier(null);
    // localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ supplier, setUser, logOut, setSupplier_role, supplier_role }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
