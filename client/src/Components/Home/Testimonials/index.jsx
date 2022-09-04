import React, { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoMdQuote } from "react-icons/io";

const Testimonials = () => {
  const [arrow, setArrow] = useState(true);

  const Testimonials = [
    {
      name: "Megan H.",
      photo: "https://i.pravatar.cc/150?img=32",
      review:
        "After a two-year search, we finally found the ideal modern home for our family and we couldn’t be happier. The build quality is impressive, and the Habile team has always taken great care of us, even well-after the purchase.",
    },
    {
      name: "Danny M.",
      photo: "https://i.pravatar.cc/150?img=12",
      review:
        "We fell in love with our Habile the moment we first entered it over three years ago. We call it ‘the rainbow house’ by virtue of the rainbows that appear on the walls and sleek wood floors all around the house from the many windows.",
    },
  ];

  return (
    <div className="container mx-auto flex flex-col">
      <h3 className="text-center text-xl text-gray-500 font-semibold">
        TESTIMONIALS
      </h3>
      <h4 className="text-center text-6xl font-semibold ">
        Client says about us
      </h4>
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
      <div className="flex items-center gap-36 mx-36 my-10">
        {Testimonials.map((testimonial, index) => (
          <div
            className="flex items-center shadow-[0px_0px_10px_10px_rgba(0,0,0,0.1)] p-5 pl-20 gap-5 relative"
            style={{ borderRadius: "60px 0px" }}
            key={index}
          >
            <div className="w-36 absolute -left-20 top-14">
              <img
                src={testimonial.photo}
                alt="profile"
                className="w-full"
                style={{ borderRadius: "40px 0px" }}
              />
            </div>
            <IoMdQuote className="text-5xl text-red-500 right-5 top-5 absolute " />
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold">{testimonial.name}</h3>
              <p className="text-lg font-medium text-gray-500">
                {testimonial.review}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
