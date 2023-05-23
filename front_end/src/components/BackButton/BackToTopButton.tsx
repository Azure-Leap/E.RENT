import React from "react";
import { useEffect, useState } from "react";
import upIcon from "../../../public/images/up-arrow.png";
import Image from "next/image";
const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTopButton && (
        <button
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            height: "60px",
            width: "60px",
            fontSize: "50px",
          }}
          onClick={scrollUp}
        >
          <Image src={upIcon} alt="icon" />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
