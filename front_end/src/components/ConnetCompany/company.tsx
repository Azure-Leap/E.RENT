import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const Company = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const counto = useMotionValue(0);
  const roundedo = useTransform(counto, Math.round);
  useEffect(() => {
    const animation = animate(count, 3923, { duration: 10 });
    const niitTurees = animate(counto, 646, { duration: 10 });
    return animation.stop, niitTurees.stop;
  }, []);
  return (
    <div className="bg-gray-200">
      <div className="flex justify-center pt-10 ">
        <h1 className="p-2 px-3 font-bold text-xs bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
          ЯАГААД МАНАЙ ҮЙЛЧИЛГЭЭ ГЭЖ?
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 gap-5 p-10">
          <div className="bg-white h-40 p-12 shadow-xl">
            <motion.h1 className="font-black text-3xl">{rounded}</motion.h1>
            <p className="text-gray-600 pt-2 font-light">Гэрээт компаниуд</p>
          </div>
          <div className="bg-white h-40 p-12 shadow-xl">
            <motion.h1 className="font-black text-3xl">{roundedo}</motion.h1>
            <p className="text-gray-600 pt-2">Нийт түрээс</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
