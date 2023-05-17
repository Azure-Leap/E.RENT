import React from "react";
import Rents from "./Rents";
import History from "./History";

const COMPONENTS = [
  {
    title: "Rents",
    component: <Rents />,
  },
  {
    title: "R.History",
    component: <History />,
  },
];

const SupplierProfile = () => {
  const [selectedComponent, setSelectedComponent] = React.useState({
    title: "",
    component: "",
  });

  const handleClicked = (eko: string) => {
    setSelectedComponent(eko);
  };
  return (
    <div className="grid md:grid-cols-3 p-4 gap-4">
      <div className="bg-white md:col-span-1 rounded-xl h-96">
        <div className="text-center pt-20">
          <div className="flex justify-center ">
            <img src="./images/user.png" width={100} />
          </div>
          <h1 className="font-semibold text-zinc-600 text-xl pt-5">
            Myagmardorj Bilguunerkh
          </h1>
          <p className="font-light text-zinc-600 ">Ulaanbaatar, Mongolia</p>
          <div className="p-5">
            <button
              style={{
                background:
                  "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
              }}
              className="w-40 h-12 rounded-lg text-white font-semibold text-lg"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white md:col-span-2 rounded-xl">
        <div className="h-96 p-10 rounded-2xl">
          <div className="flex justify-between p-4">
            <h1 className="font-medium text-xl text-stone-900">Full Name</h1>
            <p className="text-stone-500">Myagmardorj Bilguunerkh</p>
          </div>
          <div className="w-full h-0.5 bg-black my-2 scale-y-50 "></div>
          <div className="flex justify-between p-4">
            <h1 className="font-medium text-xl text-stone-900">Email</h1>
            <p className="text-stone-500">bilguunerkh@gmail.com</p>
          </div>
          <div className="w-full h-0.5 bg-black my-2 scale-y-50 "></div>
          <div className="flex justify-between p-4">
            <h1 className="font-medium text-xl text-stone-900">Phone Number</h1>
            <p className="text-stone-500">
              <span>+976</span> 85151195
            </p>
          </div>
          <div className="w-full h-0.5 bg-black my-2 scale-y-50 "></div>
          <div className="flex justify-between p-4">
            <h1 className="font-medium text-xl text-stone-900">Address</h1>
            <p className="text-stone-500">Ulaanbaatar, Mongolia</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 p-5 bg-white md:col-span-3 rounded-xl gap-4 h-96">
        <div className="md:col-span-1">
          <div className="grid md:grid-cols-2 gap-1 text-center">
            {COMPONENTS.map((el, id) => (
              <div
                key={id}
                onClick={() => {
                  handleClicked(el);
                }}
              >
                <h1 className="lg:font-bold text-stone-600 md:text-lg md:font-semibold border-2 border-black">
                  {el.title}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="border-2 border-black md:col-span-3 h-40 p-3">
            <p>{selectedComponent.component}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierProfile;
