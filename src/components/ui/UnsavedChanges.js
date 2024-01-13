import React from "react";
import Image from "next/image";
import Warning from "@/assets/images/icon/Warning.svg";

const UnsavedChanges = ({ children, className }) => {
  return (
    <>
      <div className="sticky top-0 z-[9] mb-4">
        <div className={`${className} bg-black/80 dark:bg-white py-5 pl-[17px] pr-[26px] flex-wrap gap-4 flex items-center justify-between backdrop-blur-sm`}>
          <div className="flex items-center">
            <Image src={Warning} alt="" className="dark:invert sm:mr-[15px] mr-2" />
            <h3 className="font-semibold text-sm sm:text-lg text-white dark:text-black">Unsaved changes</h3>
          </div>
          <div className="flex items-center">{children}</div>
        </div>
      </div>
    </>
  );
};
export default UnsavedChanges;
