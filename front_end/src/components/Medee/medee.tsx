import React from "react";
import medee1 from "../../../public/images/medee.png";
import medee2 from "../../../public/images/medee2.png";
import medee3 from "../../../public/images/medee3.png";
import Image from "next/image";
import Link from "next/link";

const Medee = () => {
  return (
    <div className="p-10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-5 gap-4">
          <div className="text-black shadow-lg border border-black md:hover:-translate-y-3 ease-in duration-300">
            <Link href="/media/">
              <Image src={medee1} alt="pic" />
            </Link>
            <footer className="pt-3 p-2">
              <Link href="/">
                <h6 className="font-light text-sm">2023/4/30</h6>
                <h4 className="font-semibold text-sm pt-1 ">БОГИНО ДОЛГИОНЫ ЗУУХНЫ ТАЛААРХ БУРУУ ОЙЛГОЛТУУД</h4>
              </Link>
            </footer>
          </div>
          <div className="text-black shadow-lg border border-black md:hover:-translate-y-3 ease-in duration-300">
            <Link href="/media/">
              <Image src={medee2} alt="pic" />
            </Link>
            <footer className="pt-3 p-2">
              <Link href="/">
                <h6 className="font-light text-sm">2023/4/30</h6>
                <h4 className="font-semibold text-sm pt-1">БОГИНО ДОЛГИОНЫ ЗУУХНЫ ТАЛААРХ БУРУУ ОЙЛГОЛТУУД</h4>
              </Link>
            </footer>
          </div>
          <div className="text-black shadow-lg border border-black md:hover:-translate-y-3 ease-in duration-300">
            <Link href="/media/">
              <Image src={medee3} alt="pic" />
            </Link>
            <footer className="pt-3 p-2">
              <Link href="/">
                <h6 className="font-light text-sm">2023/4/30</h6>
                <h4 className="font-semibold text-sm pt-1">БОГИНО ДОЛГИОНЫ ЗУУХНЫ ТАЛААРХ БУРУУ ОЙЛГОЛТУУД</h4>
              </Link>
            </footer>
          </div>
          <div className="text-black shadow-lg border border-black md:hover:-translate-y-3 ease-in duration-300">
            <a href="/media/">
              <Image src={medee1} />
            </a>
            <footer className="pt-3 p-2">
              <a href="/">
                <h6 className="font-light text-sm">2023/4/30</h6>
                <h4 className="font-semibold text-sm pt-1 ">
                  БОГИНО ДОЛГИОНЫ ЗУУХНЫ ТАЛААРХ БУРУУ ОЙЛГОЛТУУД
                </h4>
              </a>
            </footer>
          </div>
          <div className="text-black shadow-lg border border-black md:hover:-translate-y-3 ease-in duration-300">
            <a href="/media/">
              <Image src={medee3} />
            </a>
            <footer className="pt-3 p-2">
              <a href="/">
                <h6 className="font-light text-sm">2023/4/30</h6>
                <h4 className="font-semibold text-sm pt-1">
                  БОГИНО ДОЛГИОНЫ ЗУУХНЫ ТАЛААРХ БУРУУ ОЙЛГОЛТУУД
                </h4>
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medee;
