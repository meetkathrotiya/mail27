import React from "react";
import Image from "next/image";
import Dots from "@/assets/images/icon/Union.svg";
import CheckBox from "@/components/ui/CheckBox";
import Dropdown from "@/components/ui/Dropdown";

const ProductSelectTable = ({ TableRow, handleChange, selected }) => {
  return (
    <>
      {TableRow.map((productRowData, index) => (
        <tr
          className={`${
            selected.includes(index) ? "dark:bg-white/5 bg-primary-light" : ""
          } border-b border-black/5 dark:border-white/5 hover:bg-primary-light hover:border-primary-light dark:hover:bg-white/5 group transition-all duration-300 cursor-pointer text-xs ${
            productRowData.tablesec
          }`}
          key={index}
        >
          <td>
            <div className="pl-[5px] py-2 flex items-center">
              <CheckBox
                value={index}
                name={productRowData.name}
                onChange={handleChange}
                checked={selected.includes(index)}
              />
              {productRowData.orderId}
            </div>
          </td>
          <td className="px-3 py-2">
            <Image src={productRowData.productImg} alt="" className="inline-block mr-2" />
            {productRowData.product}
          </td>
          <td className="px-3 pr-0 py-2">
            <h3
              className={`relative pl-[11px] ${
                productRowData.status == "Active"
                  ? "text-primary-green"
                  : "" || productRowData.status == "Draft"
                  ? "text-black/40 dark:text-white/40"
                  : ""
              } `}
            >
              <span
                className={`absolute left-0 top-[50%] -translate-y-[50%] rounded-xl w-[6px] h-[6px] ${
                  productRowData.status == "Active"
                    ? "bg-secondary-greenb"
                    : "" || productRowData.status == "Draft"
                    ? "bg-black/40 dark:bg-white/40"
                    : ""
                } `}
              ></span>
              {productRowData.status}
            </h3>
          </td>
          <td className="px-3 pr-[10px] py-2">{productRowData.type}</td>
          <td className="px-4 py-2">
            <h3 className={`${productRowData.lowstock == "lowstock" ? "text-secondary-red" : ""} `}>
              {productRowData.inventory}
            </h3>
          </td>
          <td className="px-3 pr-[10px] py-2">{productRowData.vendor}</td>
          <td className="md:opacity-0 group-hover:opacity-100 pr-4">
            <Dropdown
              className="right-0 left-[unset]"
              itemsclass="w-[240px] right-0 p-2 [&>a:nth-child(2)]:!border-t [&>a:nth-child(3)]:!border-0 [&>a:nth-child(4)]:!border-t "
              button={
                <div className="flex gap-2 items-center py-3 px-2 justify-end">
                  <Image src={Dots} alt="" className="dark:invert" />
                </div>
              }
              dropdownitem={[
                { id: 1, title: "Set as active (or Set as draft)", link: "" },
                { id: 2, title: "Add to category", link: "" },
                { id: 3, title: "Remove from category", link: "" },
                { id: 4, title: "View details", link: "products/detail" },
              ]}
            />
          </td>
        </tr>
      ))}
    </>
  );
};

export default ProductSelectTable;
