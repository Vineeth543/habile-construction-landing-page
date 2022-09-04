import React from "react";

const Experience = () => {
  const Experience = [
    {
      count: 980,
      title: "Projects",
    },
    {
      count: 520,
      title: "Happy Client",
    },
    {
      count: 330,
      title: "Winners",
    },
    {
      count: 120,
      title: "Recoment",
    },
  ];

  return (
    <>
      <div className="bg-yellow-200 w-full py-20">
        <div className="container mx-auto flex flex-col gap-16">
          <div className="flex flex-col text-5xl font-semibold text-center gap-3">
            <h2>3000+ Completed Works </h2>
            <h2>Which We Have Successfully Done</h2>
          </div>
          <div className="flex justify-between">
            {Experience.map((experience, index) => (
              <div
                className={`flex flex-col items-center justify-center bg-white drop-shadow-2xl w-56 h-56 rounded-tl-[60px] rounded-br-[60px] gap-2 ${
                  index % 2 && "mt-28"
                }`}
                key={index}
              >
                <h4 className="font-bold text-6xl ">{experience.count}</h4>
                <p className="font-semibold text-xl">{experience.title}</p>
              </div>
              // {index !== Experience.length - 1 && (
              //   <>
              //     {index % 2 === 0 && (
              //       <div className="border border-gray-600 rotate-90 h-36 mt-10" />
              //     )}
              //     <div className="border border-gray-600 h-28 mt-28" />
              //     {index % 2 === 1 && (
              //       <div className="border border-gray-600" />
              //     )}
              //   </>
              // )}
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
