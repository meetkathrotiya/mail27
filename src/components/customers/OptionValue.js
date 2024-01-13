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
      <div>
        <div className={`flex gap-2 items-start cursor-pointer pt-3 ${open ? "hidden" : ""}`}>
          <div className="max-w-[252px] w-full px-5 py-4 border border-black/80 rounded-lg">
            <h3 className="text-sm text-black/80 dark:text-white/80 leading-tight">{title}</h3>
          </div>
          <Image src={Delete} onClick={DeleteMenu} alt=""/>
        </div>
      </div>
    </>
  );
};
export default OptionValue;
