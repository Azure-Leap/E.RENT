import React from "react";

const RightLeft01 = () => {
  return (
    <div className="grid  justify-items-stretch grid-cols-1 ">
      <div className="justify-self-start ">
        <button className=" text-gray-50 font-extrabold text-3xl p-4">←</button>
      </div>
      <div className="justify-self-end">
        <button className=" text-gray-50 font-bold p-4">✘</button>
      </div>
    </div>
  );
};

export default RightLeft01;
