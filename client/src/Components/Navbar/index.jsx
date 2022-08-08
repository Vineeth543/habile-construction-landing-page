import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const Tabs = [
    "home",
    "project",
    "services",
    "about",
    "blog",
    "shop",
    "contact",
  ];

  return (
    <div className="container m-auto flex">
      <div className="w-1/4">
        <div className="w-48">
          <Link to="/" className="outline-none">
            <img
              src="https://raw.githubusercontent.com/Vineeth543/Project-Images/main/logo.png"
              alt="logo"
              className="w-full"
            />
          </Link>
        </div>
      </div>
      <div className="w-3/4 flex items-center justify-evenly">
        {Tabs.map((tab, index) => (
          <Link
            to={`/`}
            className="text-gray-600 text-lg font-semibold hover:text-red-600 outline-none"
            key={index}
          >
            {tab.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
