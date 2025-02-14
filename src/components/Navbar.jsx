import React from "react";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <div>
      <div className="bg-white w-full py-3 drop-shadow-md flex justify-center">
        <div className="w-[80%] flex justify-between">
          <div className="flex gap-10 items-center max-w-[40%]">
            <img src={Logo} alt="" />
            <button className="bg-blue-500 hover:bg-blue-600 cursor-pointer w-30 py-2 text-white rounded-lg">
              Courses
            </button>
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-blue-600 cursor-pointer w-40 py-2 text-white rounded-lg">
              Try for free
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
