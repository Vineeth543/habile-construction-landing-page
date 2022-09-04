import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto flex flex-col gap-40">
      <div className="flex gap-20">
        <div className="w-1/2 flex items-center justify-center relative">
          <div className="w-full h-[50rem] absolute top-10 left-10">
            <img
              src="https://media.designcafe.com/wp-content/uploads/2019/11/17054904/interior-designer-or-decorator-make-your-choice-1.jpg"
              alt="interior-designer-or-decorator-make-your-choice-1"
              className="h-full w-full shadow-2xl"
              style={{ borderRadius: "180px 0px" }}
            />
          </div>
          <div
            className="w-full h-[50rem] border-2 border-red-500 shadow-lg"
            style={{ borderRadius: "180px 0px" }}
          ></div>
        </div>
        <div className="w-1/2 flex flex-col justify-center gap-10 pl-20">
          <h3 className="text-xl font-semibold text-gray-600">ABOUT US</h3>
          <h2 className="text-6xl font-bold">
            Interioris The Will of An Epoch Mextreo
          </h2>
          <p className="text-xl text-gray-500 pr-20">
            The HABILE PLATFORM simplifies every step of the homebuilding
            process by providing everything you need for your build: from
            planning, design development and permitting to the building
            materials and components, as well as easy-to-follow assembly
            instructions and post-occupancy services.
          </p>
          <button
            className="flex px-4 py-2 w-fit bg-red-500 text-white font-semibold text-xl hover:bg-red-600 focus:ring focus:ring-red-300 outline-none"
            style={{ borderRadius: "20px 0px" }}
          >
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="flex gap-20">
        <div className="w-1/2 flex flex-col items-center justify-center gap-10">
          <div className="flex items-center justify-center h-[15rem]">
            <h1 className="text-[20rem] bg-[url('https://5.imimg.com/data5/IZ/PV/RU/SELLER-47382193/wall-coverings-500x500.jpg')] font-bold text-center text-transparent bg-clip-text">
              20
            </h1>
          </div>
          <h2 className="text-6xl font-bold text-center">
            Years Of Successful Working The Market
          </h2>
          <button
            className="flex px-4 py-2 w-fit bg-red-500 text-white font-semibold text-xl hover:bg-red-600 focus:ring focus:ring-red-300 outline-none"
            style={{ borderRadius: "20px 0px" }}
          >
            READ MORE
          </button>
        </div>
        <div className="w-1/2 flex items-center justify-center relative">
          <div className="w-full h-[50rem] absolute -top-10 -left-10">
            <img
              src="https://media.designcafe.com/wp-content/uploads/2019/11/17054904/interior-designer-or-decorator-make-your-choice-1.jpg"
              alt="interior-designer-or-decorator-make-your-choice-1"
              className="h-full w-full shadow-2xl"
              style={{ borderRadius: "180px 0px" }}
            />
          </div>
          <div
            className="w-full h-[50rem] border-2 border-red-500 shadow-lg"
            style={{ borderRadius: "180px 0px" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
