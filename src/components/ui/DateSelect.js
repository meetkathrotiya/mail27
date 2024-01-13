import React, { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import Dateicon from "@/assets/images/icon/CalendarGrey.svg"; 
import Selecticon from "@/assets/images/icon/selecticon.svg";
import Due from "@/assets/images/icon/Add-payment-due.svg";
import "react-datepicker/dist/react-datepicker.css";

const DateSelect = ({placeholder}) => {
  const [startDate, setStartDate] = useState(new Date());

  const [icon, setIcon] = useState(false);

  const ChangeHandler = () => {
    (date) => setStartDate(date);
    setIcon(true);
  };

  return (
    <>
      <div className="relative datepicker-data flex">
        {placeholder === "Pick a date" ?
          <>
          <Image
            src={Dateicon}
            alt=""
            className={`mr-1 dark:invert opacity-20 ${
              icon ? "opacity-60 inline-block " : " opacity-20 dark:invert inline-block"
            }`}
          />
          {!icon ? (         
            <span className="absolute left-[28px] top-[50%] text-black/20 -translate-y-[50%] pointer-events-none dark:text-white/20">
              Pick a date
            </span>
          ) : (
            ""
          )}
          <DatePicker
            selected={startDate}
            onChange={ChangeHandler}
            className={`bg-transparent ${icon ? "opacity-100" : " opacity-0"}`}
          />
          <Image src={Selecticon} alt="" className="dark:invert absolute right-0 top-0 mr-2" />
          </>
        : ""}

        {placeholder === "Add due date" ?
          <> 
          {!icon ? (         
            <div className="absolute right-0 top-[50%] text-black/20 -translate-y-[50%] pointer-events-none dark:text-white/20 min-w-[120px]">
              <div className="flex justify-end text-primary-greenb">
                Add due date
                <Image src={Due} alt="" className="ml-[5px]" />
              </div>
            </div>
          ) : (
            ""
          )}
          <DatePicker
            selected={startDate}  
            onChange={ChangeHandler}
            className={`bg-transparent text-right ${icon ? "opacity-100 text-blacklight" : " opacity-0"}`}
          /> 
          </>
        : ""}
      </div>
    </>
  );
};
export default DateSelect;

