import React from "react";

const HeroComponent = () => {
  return (
    <div className="container m-auto flex gap-12">
      <div className="w-1/2 flex flex-col justify-center gap-4">
        <h3 className="text-xl font-semibold text-gray-600 pl-4">
          MODERN INTERIOR
        </h3>
        <h2 className="text-8xl font-bold pl-4">A Better Way To</h2>
        <h1 className="text-9xl font-bold pl-2">Build</h1>
        <p className="text-lg text-gray-500 pl-4 pr-10">
          Homes created through the Habile Construction are assembled on site
          using a set of easy-to-install smart components, eliminating the need
          for highly-specialized subcontractors.
        </p>
        <button
          className="flex ml-4 px-4 py-2 w-fit bg-red-500 text-white font-semibold text-xl hover:bg-red-600 focus:ring focus:ring-red-300 outline-none"
          style={{ borderRadius: "20px 0px" }}
        >
          TALK TO US
        </button>
      </div>
      <div className="w-1/2 flex items-center justify-center relative">
        <div className="w-full h-[40rem] absolute -top-10 -left-10">
          <img
            src="https://media.designcafe.com/wp-content/uploads/2019/11/17054904/interior-designer-or-decorator-make-your-choice-1.jpg"
            alt="interior-designer-or-decorator-make-your-choice-1"
            className="h-full w-full shadow-2xl"
            style={{ borderRadius: "180px 0px" }}
          />
        </div>
        <div
          className="w-full h-[40rem] border-2 border-red-500 shadow-lg"
          style={{ borderRadius: "180px 0px" }}
        ></div>
      </div>
    </div>
  );
};

export default HeroComponent;
