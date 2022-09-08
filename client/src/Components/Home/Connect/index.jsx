import React from "react";

const Connect = () => {
  return (
    <div className="container mx-auto flex flex-col items-center gap-6 my-10">
      <h2 className="text-5xl font-semibold">
        DON'T FORGET TO CONNECT WITH US
      </h2>
      <hr className="w-[45rem] h-[2px] bg-gray-300" />
      <p className="text-gray-500 text-2xl mt-6">
        Find out early about all upcoming promotions and new product releases
        with our newsletter.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Subscribed Successfully.");
          e.target.reset();
        }}
        className="mt-5"
      >
        <input
          type="email"
          placeholder="Enter your email address..."
          className="outline-none bg-gray-200 py-3 w-96 pl-8 font-semibold text-xl rounded-tl-[20px]"
          required
        />
        <button className="px-4 py-3 bg-red-500 text-white font-semibold text-xl hover:bg-red-600 focus:ring ring-red-300 rounded-br-[20px] outline-none">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default Connect;
