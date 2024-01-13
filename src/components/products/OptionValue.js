import React from "react";
import Image from "next/image";
import Delete from "@/assets/images/icon/deletebtn.svg";

const OptionValue = ({ title }) => {
  const [open, setOpen] = React.useState();
  const DeleteMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className={`flex gap-2 cursor-pointer pt-3 items-center ${open ? "hidden" : ""}`}>
            <div className="max-w-[252px] w-full px-5 py-4 border border-black/80 dark:border-transparent rounded-lg bg-white dark:bg-black/40">
          <h3 className="text-sm text-black/80 dark:text-white/80 leading-tight">{title}</h3>
        </div>
        <Image src={Delete} alt="" onClick={DeleteMenu} className="dark:invert " />
      </div>
    </>
  );
};
export default OptionValue;
