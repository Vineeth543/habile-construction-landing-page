import React, { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";

const ServicesCards = () => {
  const [arrow, setArrow] = useState(true);

  const Services = [
    {
      title: "Interior Design",
      description:
        "We desined for a specific site, utilizing our’s algorithmic design system, using our proprietary components.",
    },
    {
      title: "Architecture",
      description:
        "Floor plans, elevations, sections, MEP design, structural engineering plans, for your specific site.",
    },
    {
      title: "Planning",
      description:
        "We supply and support every project at the 5 key points of its lifecycle - Design, Permitting, FACTORS™, Assembly, and Post-Occupancy.",
    },
  ];

  return (
    <>
      <div className="bg-yellow-200 w-full py-10">
        <div className="container mx-auto flex flex-col">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-gray-600">WHAT WE DO</h3>
            <h2 className="text-5xl font-semibold">Our Service</h2>
          </div>
          <div className="flex items-center justify-end gap-2 mb-5">
            <span
              className={`text-2xl rounded-3xl p-1 drop-shadow-lg cursor-pointer ${
                arrow ? "bg-white" : "bg-red-500 text-white"
              } `}
              onClick={() => !arrow && setArrow(!arrow)}
            >
              <MdOutlineNavigateNext className="rotate-180" />
            </span>
            <span
              className={`text-2xl rounded-3xl p-1 drop-shadow-lg cursor-pointer ${
                !arrow ? "bg-white" : "bg-red-500 text-white"
              } `}
              onClick={() => arrow && setArrow(!arrow)}
            >
              <MdOutlineNavigateNext />
            </span>
          </div>
          <div className="flex gap-10">
            {Services.map((service, index) => (
              <div
                className={`flex gap-5 px-10 py-5 w-fit ${
                  index % 2 ? "bg-red-500 text-white" : "bg-white"
                }`}
                style={{ borderRadius: "60px 0px" }}
                key={index}
              >
                <div className="w-20 h-12">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2714/2714144.png"
                    alt="logo"
                    className={`w-full h-full ${
                      index % 2 ? "text-white" : "bg-white"
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-4" key={index}>
                  <h3 className="text-2xl font-semibold ">{service.title}</h3>
                  <p
                    className={`text-lg font-medium ${
                      !(index % 2) && "text-gray-500"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCards;
