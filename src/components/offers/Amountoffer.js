import Image from "next/image";
import Dots from "@/assets/images/icon/Union.svg";
import CheckBox from "@/components/ui/CheckBox";
import Dropdown from "@/components/ui/Dropdown";

const AmountOffer = ({ TableRow, handleChange, selected }) => {
  return (
    <>
      {TableRow.map((offerRowData, index) => (
        <tr
          className={`${
            selected.includes(index) ? "dark:bg-white/5 bg-primary-light" : ""
          } border-b border-black/5 dark:border-white/5 dark:hover:bg-white/5  hover:bg-primary-light hover:border-primary-light  group transition-all duration-300 cursor-pointer text-xs ${
            offerRowData.tablesec
          }`}
          key={index}
        >
          <td>
            <div className="pl-[5px] py-2.5 flex items-center">
              <CheckBox
                value={index}
                name={offerRowData.name}
                onChange={handleChange}
                checked={selected.includes(index)}
              />
              {offerRowData.orderId}
            </div>
          </td>
          <td className="px-3 py-[11px]">{offerRowData.product}</td>
          <td className="px-3 pr-0 py-[11px]">
            <h3
              className={`relative pl-[11px] ${
                offerRowData.status == "Active"
                  ? "text-primary-green"
                  : "" || offerRowData.status == "Draft"
                  ? "text-black/40 dark:text-white/40"
                  : ""
              } `}
            >
              <span
                className={`absolute left-0 top-[50%] -translate-y-[50%] rounded-xl w-[6px] h-[6px] ${
                  offerRowData.status == "Active"
                    ? "bg-secondary-greenb"
                    : "" || offerRowData.status == "Draft"
                    ? "bg-black/40 dark:bg-white/40"
                    : ""
                } `}
              ></span>
              {offerRowData.status}
            </h3>
          </td>
          <td className="px-3 pr-[10px] py-[11px]">{offerRowData.type}</td>
          <td className="px-4 py-[11px]">
            <h3 className={`${offerRowData.lowstock == "lowstock" ? "text-secondary-red" : ""} `}>
              {offerRowData.inventory}
            </h3>
          </td>
          <td className="px-3 pr-[10px] py-[11px]">{offerRowData.vendor}</td>
          <td className="md:opacity-0 group-hover:opacity-100 pr-4">
            <Dropdown
              className="right-0 left-[unset]"
              itemsclass="w-[240px] right-0 p-2 [&>a:nth-child(2)]:!border-t [&>a:nth-child(3)]:!border-0"
              button={
                <div className="flex gap-2 items-center py-3 px-2 justify-end">
                  <Image src={Dots} alt="" className="dark:invert" />
                </div>
              }
              dropdownitem={[
                {id:1, title: "Activate offer (or Deactivate offer)", link: "" },
                {id:2, title: "View details", link: "./offers/detail" },
              ]}
            />
          </td>
        </tr>
      ))}
    </>
  );
};
export default AmountOffer;
