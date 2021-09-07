import React from "react";

import { FaGithub } from "react-icons/fa";
import { FaDev } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

function Card() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="">
          <img
            className="w-32 mx-auto shadow-xl rounded-full"
            src="https://avatars.githubusercontent.com/u/59495901?v=4"
            alt="Profile face"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">
            Juan Pablo
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            Front-End Developer
          </p>
          <div className="flex align-center justify-center mt-4">
            <a
              target="_blank"
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href="https://github.com/juanPabllo"
            >
              <FaGithub />
              <span className="sr-only">Github</span>
            </a>
            <a
              target="_blank"
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-300 hover:bg-gray-300 rounded-full hover:text-white transition-colors duration-300"
              href="https://dev.to/juanpabllo"
            >
              <FaDev color="#000000" />
              <span className="sr-only">Dev to</span>
            </a>
            <a
              target="_blank"
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
              href="https://twitter.com/JuPabllo"
            >
              <FaTwitter />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
              href="mailto:juanpablo.codes@gmail.com"
            >
              <FaRegEnvelope />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
