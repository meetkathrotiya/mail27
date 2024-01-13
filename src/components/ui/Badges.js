import React from "react";

function Badges(props) {
  return (
    <>
      <span
        className={`rounded-2xl leading-normal text-xs inline-block px-[6px] ${props.className} ${
          props.color == "yellow"
            ? "text-black/80  bg-secondary-yellow"
            : "" || props.color == "red"
            ? "text-white bg-secondary-red/70"
            : "" || props.color == "greenlight"
            ? "text-white bg-[#6FCF97]"            
            : "" || props.color == "blue"
            ? "text-white bg-[#56CCF2]"
            : "" || props.color == "dot"
            ? "dot-active pl-4"
            : "" || props.color == "purple"
            ? "bg-secondary-purpleb/20 text-secondary-purplea"
            : "" || props.color == "purplelight"
            ? "bg-[#BB6BD9] text-white"
            : "" || props.color == "grey"
            ? "bg-black/10 dark:bg-white/10 text-black/40 dark:text-white/40 "
            : "" || props.color == "green"
            ? "text-primary-greena bg-primary-greena/10"
            : ""
        }`}
      >
        {props.name}
      </span>
    </>
  );
}

export default Badges;
