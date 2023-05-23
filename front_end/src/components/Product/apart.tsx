import React, { useState, useEffect } from "react";
import apartment from "../../../public/images/apartment.png";
import Image from "next/image";
import axios from "axios";
import bike from "../../../public/images/bike.png";
import Link from "next/link";
const Apart = () => {
  const [products, setProducts] = useState([]);

  const getAllBranches = async () => {
    try {
      const result = await axios.get("https://erent.onrender.com/products");
      console.log(result.data.products);
      setProducts(result.data.products);
    } catch (err) {
      console.log("Err", err);
    }
  };
  useEffect(() => {
    getAllBranches();
  }, []);
  return (
    <div className="pt-10">
      <div style={{ background: "#FFEA20" }} className="w-full p-10">
        <div className="container mx-auto grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1 ">
            <Image
              className="max-sm:hidden sm:hidden md:block"
              src={apartment}
              alt="poster"
              width={300}
            />
          </div>
          <div className="grid md:grid-cols-4 md:col-span-2 max-sm:space-y-4 sm:space-y-4 md:space-y-0 gap-4">
            {products.length > 0 &&
              products.map((product) => (
                <>
                  <div className="border-2 border-black rounded-lg p-10"></div>
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apart;
