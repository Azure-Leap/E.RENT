import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<any>(null);
  const [supplier, setSupplier] = useState();
  const [supplierToken, setSupplierToken] = useState();

  useEffect(() => {
    const us = localStorage.getItem("user");
    const sup = localStorage.getItem("supplier");
    if (us) {
      setUser(JSON.parse(us));
    }
    if (sup) {
      setSupplier(JSON.parse(sup));
    }
  }, []);

  const setSupplierData = (data: any) => {
    setSupplier(data);
    localStorage.setItem("supplier", JSON.stringify(data));
  };

  const setUserData = (data: any) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        setUserData,
        setToken,
        setUser,
        supplier,
        setSupplier,
        supplierToken,
        setSupplierToken,
        setSupplierData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
