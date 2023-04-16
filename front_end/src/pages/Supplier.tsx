import React, { useState } from "react";

const Render = [
  {
    title: "Rents",
    text: "Rents хэсэг дарагдсан байна",
  },
  {
    title: "R.Histiory",
    text: "R.History хэсэг дарагдсан байна",
  },
];

const Supplier = () => {
  const [selectedRender, setSelectedRender] = React.useState({
    text: "",
  });

  const handleClicked = (text) => {
    setSelectedRender(text);
  };

  return (
    <div className="container mx-auto  w-full">
      <div style={{ height: "900px" }} className="flex pt-20">
        <div className="w-2/5 border border-2-black pt-20">
          <div className="flex justify-center">
            <img
              src="./images/SupplierProfile.png"
              alt="SupplierProfile"
              width={130}
            />
          </div>

          <p className="text-3xl flex justify-center pt-5">Name</p>
          <p className="text-xl flex justify-center pt-5">E-mail</p>
          <p className="text-xl flex justify-center pt-5">Phone</p>
          <p className="text-xl flex justify-center pt-5">Location</p>

          <div className="flex justify-center pt-20">
            <button className="p-3 w-40 rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500">
              Edit
            </button>
          </div>
        </div>
        <div className="w-3/5 border border-2-black flex justify-center items-center">
          <div
            style={{ width: "700px", height: "600px" }}
            className="border-2 border-2-black "
          >
            <div className="flex text-center w-full">
              {/* <div className="w-3/6 border border-black">Rents</div>
              <div className="w-3/6 border border-black">R.History</div> */}
              {Render.map((el, id) => (
                <div
                  key={id}
                  className="w-3/6 border border-black"
                  onClick={() => {
                    handleClicked(el);
                  }}
                >
                  {el.title}
                </div>
              ))}
            </div>
            <div className="bg-blue-500 text-2xl text-white h-96 p-8">
              <p>{selectedRender.text}</p>
            </div>
            <div className="flex justify-end">
              <div style={{ marginTop: "480px" }} className="p-3">
                <button className="p-5 w-40 rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500">
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supplier;
