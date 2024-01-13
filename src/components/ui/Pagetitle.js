import React from "react";

const Pagetitle = ({ title, className }) => {
  return (
    <>
      <h3 className={`font-semibold capitalize ${className}`}>{title}</h3>
    </>
  );
};

export default Pagetitle;
