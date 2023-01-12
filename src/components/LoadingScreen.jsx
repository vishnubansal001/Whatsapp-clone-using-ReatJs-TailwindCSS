import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { BsWhatsapp } from "react-icons/bs";
import { FaLock } from "react-icons/fa";

function LoadingScreen({ progress }) {
  return (
    <div className="flex flex-col justify-center items-center bg-[#111a21] w-screen h-screen">
      {/* WhatsApp Icon */}
      <span className="text-[#3d464a] text-6xl my-12">
        <BsWhatsapp />
      </span>

      {/* Loading bar and text */}
      <div className="flex flex-col justify-evenly items-center h-[150px]">
        {/* Loading bar */}
        <ProgressBar
          variant="success"
          now={progress}
          className="bg-[#243138] rounded-lg w-[320px] h-[3px]"
        />

        {/* Text section */}
        <div className="flex flex-col items-center">
          {/* WhatsApp name */}
          <h1 className="text-[#c1c6c9] text-lg font-medium">WhatsApp</h1>

          {/* Text */}
          <div className="flex items-center text-[#687782]">
            {/* Lock */}
            <span className="text-sm mr-3">
              <FaLock />
            </span>

            {/* Text */}
            <p>End-to-end encrypted</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;