import React from "react";
import ShieldIcon from "@/assets/images/icon/shield-check.svg";
import MailIcon from "@/assets/images/icon/mailicon.svg";
import Image from "next/image";

const Alert = ({ title, description, color, className, children }) => {
  return (
    <>
      <div
        className={`rounded-lg border bg-primary-purple/50 dark:bg-blacklight py-4 px-4 flex gap-2 justify-between items-center ${className} ${
          color == "red" ? "border-secondary-red " : "" ||
          color == "primarypurple" ? "bg-primary-purple/50 border-none " : ""
        }`}
      >
        <div className={`flex items-start`}>
          {color == "red" ? <Image src={MailIcon} alt="" className={` mt-[5px]`}  /> : "" }
          {color == "primarypurple" ? <Image src={ShieldIcon} alt="" className={` mt-[5px] dark:invert`} /> : "" }
          <div className="ml-2">
            <h4 className={`text-xs font-semibold leading-[18px] text-secondary-red pt-1 ${
              color == "primarypurple" ? "!text-blacklight dark:!text-white text-sm font-normal" : ""
            }`}>{title}</h4>
            <p className="text-xs leading-[18px] text-black/40 dark:text-white/40">{description}</p>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Alert;
