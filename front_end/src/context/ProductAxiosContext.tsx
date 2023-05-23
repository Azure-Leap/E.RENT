import React, { useState, createContext, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import { CatchingPokemon } from "@mui/icons-material";
import { toast } from "react-toastify";
import { BASE_URL_API } from "@/util/variables";
export const ProductAxiosContext = createContext({});

const ProductAxiosProvider = ({ children }: any) => {
  const { supplier, setSupplier } = useContext(AuthContext);
  const [subCat, setSubCat] = useState([]);
  const [createPro, setCreatePro] = useState({});
  const [categoryId, setCategoryId] = React.useState();

  const handleChange = (event: any) => {
    console.log(event.target.value);
    setCreatePro({ ...createPro, subcategory: event.target.value });
    // setCategoryId(event.target.value);
  };
  const travelBarilt = (e: any) => {
    console.log(e.target.value);
    const createObj = {};
    // createObj[e.target.name] = e.target.value;
    setCreatePro({ ...createPro, ...createObj });
  };

  const createProduct = async () => {
    console.log("Түрээслэгч", supplier);
    if (supplier) {
      try {
        const result = await axios.post(`${BASE_URL_API}/products`, {
          ...createPro,
          supplier_id: supplier._id,
          rent_start_day: new Date(),
        });
        console.log(result);
      } catch (err) {
        console.log("Err", err);
      }
    } else {
      toast.error("Та нэвтрэнэ үү!", {
        autoClose: 1000,
        position: "bottom-right",
      });
    }
  };

  const getAllSubcategories = async () => {
    try {
      const result = await axios.get(`${BASE_URL_API}/subcategories`);
      console.log(result.data.categories);
      setSubCat(result.data.categories);
    } catch (err) {
      console.log("Err", err);
    }
  };

  return (
    <ProductAxiosContext.Provider
      value={{
        subCat,
        setSubCat,
        createProduct,
        handleChange,
        travelBarilt,
        getAllSubcategories,
      }}
    >
      {children}
    </ProductAxiosContext.Provider>
  );
};

export default ProductAxiosProvider;
