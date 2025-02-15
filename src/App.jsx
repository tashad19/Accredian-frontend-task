import bgVideo from "./assets/bgVideo.mp4";
import Popup from "./components/Popup";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const popup = (e) => {
    e.preventDefault();
    setOpenModal(true);
  }

  return (
    <>
      <Navbar />
      {openModal && <Popup openModal={openModal} setOpenModal={setOpenModal} />}

      <div>
        <div className="flex justify-center items-center my-10">
          <div className="flex flex-wrap relative w-full drop-shadow-[0px_0px_35px_rgba(0,0,0,0.2)] z-1 sm:w-[80%]">
            <div className="relative grow shrink px-10 bg-stone-100 h-full flex justify-center items-center max-w-full sm:absolute sm:max-w-[40%] sm:bg-transparent">
              
              <div className="flex flex-col justify-evenly h-96">

                <h1 className="font-bold text-[50px] lg:text-[50px] md:text-[36px] sm:text-[30px]">
                  Let's Learn & Earn
                </h1>
                <p className="text-[32px] lg:text-[32px] md:text-[26px] sm:text-[20px]">
                  Get a chance to win up-to
                  <span className="text-blue-700 font-bold text-[40px] lg:text-[40px] md:text-[30px] sm:text-[24px]">
                    {" "}
                    Rs. 15,000
                  </span>
                </p>

                <button
                  onClick={popup}
                  className="z-10 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 px-8 py-2 text-[15px] rounded-lg"
                >
                  Refer Now
                </button>
              </div>
            </div>

            <video autoPlay loop muted className="rounded-2xl">
              <source src={bgVideo} type="video/mp4" />
              Video tag not supported.
            </video>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
