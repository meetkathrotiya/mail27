import Image from "next/image";
import Dots from "@/assets/images/icon/Union.svg";
import CheckBox from "@/components/ui/CheckBox";
import Dropdown from "@/components/ui/Dropdown";

const ArchiveSelectTable = ({ TableRow, handleChange, selected }) => {
  return (
    <>
      {TableRow.map((customerRowData, index) => (
        <tr
          className={`${
            selected.includes(index) ? "dark:bg-white/5 bg-primary-light" : ""
          } border-b border-black/5 dark:border-white/5 hover:bg-primary-light hover:border-primary-light dark:hover:bg-white/5 group transition-all duration-300 cursor-pointer text-xs ${
            customerRowData.tablesec
          }`}
          key={index}
        >
          <td>
            <div className="pl-[5px] py-2 flex items-center">
              <CheckBox
                value={index}
                name={customerRowData.name}
                onChange={handleChange}
                checked={selected.includes(index)}
              />
            </div>
          </td>
          <td className="px-3 py-2">
            <Image src={customerRowData.customersImg} alt="" className="inline-block mr-2" />
            {customerRowData.customerName}
          </td>
          <td className="px-3 pr-0 py-2">
            <h3
              className={`relative pl-[11px] ${
                customerRowData.subscription == "Subscribed"
                  ? "text-[#219653]"
                  : "" || customerRowData.subscription == "Not subscribed"
                  ? "text-black/40 dark:text-white/40"
                  : ""
              } `}
            >
              <span
                className={`absolute left-0 top-[50%] -translate-y-[50%] rounded-xl w-[6px] h-[6px] ${
                  customerRowData.subscription == "Subscribed"
                    ? "bg-[#BAEDBD]"
                    : "" || customerRowData.subscription == "Not subscribed"
                    ? "bg-black/40 dark:bg-white/40"
                    : ""
                } `}
              ></span>
              {customerRowData.subscription}
            </h3>
          </td>
          <td className="px-3 pr-[10px] py-2">{customerRowData.orders}</td>
          <td className="px-4 py-2">
            <h3>{customerRowData.location}</h3>
          </td>
          <td className="px-3 pr-[10px] py-2">{customerRowData.amount}</td>
          <td className="md:opacity-0 group-hover:opacity-100 pr-4">
            <Dropdown
              className="right-0 left-[unset]"
              itemsclass="w-[150px]"
              button={
                <div className="flex gap-2 items-center py-3 px-2 justify-end">
                  <Image src={Dots} alt="" className="dark:invert" />
                </div>
              }
              dropdownitem={[{id:1, title: "View details", link: "customers/new-customer" }]}
            />
          </td>
        </tr>
      ))}
    </>
  );
};
export default ArchiveSelectTable;
