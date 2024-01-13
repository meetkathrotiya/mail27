import React from "react";
import WarningRed from "@/assets/images/icon/Warning-red.svg";
import WarningGreen from "@/assets/images/icon/Warning-green.svg";
import Image from "next/image";
import AttentionRed from "@/assets/images/icon/attentionred.svg";
import ShieldCheck from "@/assets/images/icon/ShieldCheck.svg";

const Alert = ({ title, description, color, className, deatil ,alertStyle }) => {
  return (
    <>
      <div
        className={`rounded-2xl border bg-primary-light dark:bg-white/5 py-4 px-3 flex items-start ${className} ${alertStyle} ${
          color == "red"
            ? "border-secondary-red"
            : "" || color == "reddark"
            ? "border-secondary-red"
            : "" || color == "green"
            ? "border-primary-greenb"
            : ""
        }`}
      >
        {color == "gray" ? <Image src={ShieldCheck} alt="" className="mt-[5px]" /> : ""}
        {color == "red" ? <Image src={WarningRed} alt="" className="mt-[5px]" /> : ""}
        {color == "reddark" ? <Image src={AttentionRed} alt="" className="mt-[5px]" /> : ""}
        {color == "green" ? <Image src={WarningGreen} alt="" className="mt-[3px]" /> : ""}
        <div className="ml-2">
          <h4 className={`text-xs font-semibold leading-[18px] ${className}`}>{title}</h4>
          <p className="text-xs leading-[18px] text-black/80 dark:text-white/80">
            {description} <span className="text-secondary-red"> {deatil}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Alert;
