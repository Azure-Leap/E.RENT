import React from "react";

const Right02 = () => {
  return (
    <div>
      <div className="mt-14">
        <div className="grid grid-cols-2">
          <h5 className="text-sm text-white font-medium">Company</h5>
          <p className="justify-self-end text-sm text-gray-50 font-medium">
            Apple
          </p>
        </div>
        <div className="grid grid-cols-2 mt-4">
          <h5 className="text-sm text-white font-medium">Order Number</h5>
          <p className="justify-self-end text-sm text-gray-50 font-medium">
            1266201
          </p>
        </div>
        <div className="grid grid-cols-2 mt-4">
          <h5 className="text-sm text-white font-medium">Product</h5>
          <p className="justify-self-end text-sm text-gray-50 font-medium">
            Macbook Air
          </p>
        </div>
        <div className="grid grid-cols-2 mt-4">
          <h5 className="text-sm text-white font-medium">VAT (20%)</h5>
          <p className="justify-self-end text-sm text-gray-50 font-medium">
            $100.00
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 border-t mt-4">
        <div className="mt-4">
          <p className="text-sm text-white font-medium">You have to pay</p>
          <p className="text-base text-gray-50 font-medium mt-2">
            <span className="text-base font-bold text-white">549.99</span>
            USD
          </p>
        </div>
        <div className="justify-self-end place-self-center">
          <img src="./images/order.png" alt="orderIcon" className="w-10" />
        </div>
      </div>
      <div className="flex justify-end pt-5">
        <button
          onClick={() => updateCard(product, "inc")}
          className="bg-blue-500 px-10 py-2.5 bg-gradient-to-r from-blue-300 from-10% via-sky-500 via-30% to-emerald-300 to-90% rounded-lg text-white font-semibold text-md"
        >
          Тооцоо хийх
        </button>
      </div>
    </div>
  );
};

export default Right02;
