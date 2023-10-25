import React from "react";
import { BsChatSquareDots } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="max-w-[1140px] w-full m-auto h-20 mt-10">
      <hr className=" border-[1px] border-gray-400" />
      <div className="flex justify-center items-center gap-2 mt-5">
        <BsChatSquareDots size={20} className=" text-[var(--primary-dark)]" />
        <h1 className=" text-xl font-semibold">LET'STRAVELL</h1>
      </div>
    </div>
  );
};

export default Footer;
