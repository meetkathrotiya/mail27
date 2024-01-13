import Image from "next/image";
import React from "react";

const Card = ({ className, children, cardImage, title, discription }) => {
  return (
    <>
      <div className={`${className} md:px-3 w-full max-w-[456px] mx-auto md:mt-16 mt-5`}>
        <div className="rounded-2xl bg-primary-light dark:bg-white px-4 py-3 pr-2 relative">
          <div className="transition-all duration-300 overflow-hidden h-auto opacity-100">
            <div className="flex mt-4 sm:gap-7 gap-5 sm:flex-row flex-col">
              <Image src={cardImage} alt="" className="sm:max-w-full  block max-w-[60%] mx-auto" />
              <div className="mt-[19px]">
                <h3 className="font-semibold mb-[6px] text-black">{title}</h3>
                <p className="text-xs sm:max-w-[169px] w-full text-black">{discription}</p>
                <div className="mt-3 flex items-center">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
