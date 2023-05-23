import React from "react";
import All from "./all";

const AboutButton = [
  {
    title: "ALL",
    component: <All />,
  },
  {
    title: "TECHNOLOGY",
    // component: <Rent />,
  },
  {
    title: "MARKETING",
    // component: <Rent />,
  },
  {
    title: "CONTENT",
    // component: <Rent />,
  },
];

const About = () => {
  const [selectedAbout, setSelectedAbout] = React.useState({
    title: "",
    component: <All />,
  });

  const handleClicked = (eko: any) => {
    setSelectedAbout(eko);
  };
  return (
    <div className="p-8 bg-gradient-to-r from-blue-400 to-green-400 ...">
      <div className="container mx-auto">
        <div className="p-5 text-center ">
          <h1 style={{ fontSize: "50px" }} className="font-black  text-white">
            Манай баг
          </h1>
          <div className="rounded-3xl h-1.5 w-32 my-2 mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        </div>
        <div className="grid lg:grid-cols-4 gap-20">
          {AboutButton.map((el, id) => (
            <>
              <div
                key={id}
                onClick={() => {
                  handleClicked(el);
                }}
                className="border-2 border-gray-300 text-center p-3 rounded-3xl"
              >
                <h1 className="font-bold text-gray-200 text-lg">{el.title}</h1>
              </div>
            </>
          ))}
        </div>
        <div>
          <div className="p-10">{selectedAbout.component}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
