import React from "react";

const Cart = () => {
  return (
    <div className="container mx-auto  w-full">
      <div style={{ height: "900px" }} className="flex pt-20">
        <div className="w-3/5 border border-2-black pt-20 p-8">
          <h1 className="font-semibold text-3xl">Cart</h1>
          <div className="pt-5">
            <div
              style={{ height: "130px" }}
              className="flex gap-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md h-screen items-center"
            >
              <div className="p-8">
                <img
                  className="rounded-md"
                  src="./images/bike.png"
                  width={150}
                />
              </div>
              <div className="flex gap-20">
                <p>Name</p>
                <p>Description</p>
                <p>Price</p>
              </div>
            </div>
          </div>
          <div className="pt-5">
            <div
              style={{ height: "130px" }}
              className="flex gap-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md h-screen items-center"
            >
              <div className="p-8">
                <img
                  className="rounded-md"
                  src="./images/bike2.png"
                  width={150}
                />
              </div>
              <div className="flex gap-20">
                <p>Name</p>
                <p>Description</p>
                <p>Price</p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "280px" }} className="flex gap-3">
            <div className="flex p-2 text-3xl rounded-lg w-4/5 h-20 items-center text-white bg-gradient-to-r from-cyan-500 text-green-800 font-semibold to-blue-500">
              <span className="font-semibold text-black text-3xl p-2">
                Total Price:
              </span>{" "}
              $34205
            </div>
            <div className="flex rounded-lg justify-center items-center w-1/5 h-20 text-white bg-gradient-to-r from-cyan-500 to-blue-500">
              <h1>Payment</h1>
            </div>
          </div>
        </div>

        <div className="w-2/5 border border-2-black flex "></div>
      </div>
    </div>
  );
};

export default Cart;
