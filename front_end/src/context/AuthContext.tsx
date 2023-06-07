import React, { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { CartContext } from "./CartContext";

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [orders, setOrders] = useState<any>(null);
  const [token, setToken] = useState<any>(null);
  const [supplier, setSupplier] = useState();
  const [supplierToken, setSupplierToken] = useState();

  useEffect(() => {
    const us = localStorage.getItem("user");
    const sup = localStorage.getItem("supplier");
    const tok = localStorage.getItem("token");
    if (us) {
      setUser(JSON.parse(us));
    }
    if (sup) {
      setSupplier(JSON.parse(sup));
    }
    setToken(tok);
  }, []);

  const setSupplierData = (data: any) => {
    setSupplier(data);
    localStorage.setItem("supplier", JSON.stringify(data));
  };

  const setUserData = (data: any) => {
    setUser(data.user);
    localStorage.setItem("user", JSON.stringify(data.user));
    setToken(data.token);
    localStorage.setItem("token", JSON.stringify(data.token));
    setOrders(data.orders);
    localStorage.setItem("orders", JSON.stringify(data.orders));
  };

  const logout = () => {
    console.log("Logout Start");
    setUser(null);
    setToken(null);
    localStorage.clear();
    console.log("Logout End");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        logout,
        token,
        setUserData,
        setToken,
        setUser,
        orders,
        setOrders,
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
