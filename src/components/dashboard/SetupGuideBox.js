import { useEffect } from "react";
import Image from "next/image";
import React from "react";
import Subtract from "@/assets/images/icon/Subtract.svg";

const SetupGuideBox = ({ children, openKey, isActive, title, iconOpacity, className }) => {
  useEffect(() => {
    console.log(openKey);
  });

  return (
    <div className={`${className} mb-[23px] rounded-2xl bg-primary-light dark:bg-white px-4 py-3 relative`}>
      <div
        className={`flex justify-between items-center cursor-pointer ${openKey == isActive ? "h-0 hidden" : "h-auto"}`}
      >
        <h3 className="pl-[38px] font-semibold py-[10px] text-blacklight">{title}</h3>
        <Image className={iconOpacity} src={Subtract} alt="" />
      </div>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          openKey == isActive ? "h-auto opacity-100" : "h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
export default SetupGuideBox;
