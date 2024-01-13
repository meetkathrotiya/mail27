import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard(props) {
  const [selected, setSelected] = useState(props.options[0]);
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full py-0 pl-3 pr-7 bg-none cursor-pointer text-left focus:outline-none focus:ring-0  sm:text-sm">
              <span className="block truncate text-xs">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <span className='dark:invert'>
                  <svg className={`fill-[#00000066]`} width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"><path d="M16.9,9.2c-0.4-0.4-1-0.4-1.4,0L12,12.7L8.5,9.2c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l4.2,4.2c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l4.2-4.2C17.3,10.2,17.3,9.6,16.9,9.2z" /></svg>
                </span>
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className={`absolute z-10 mt-1 max-h-60 w-fit overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}>
                {props.options.map((item) => (
                  <Listbox.Option
                    key={item.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? "text-black dark:text-white hover:text-white dark:hover:bg-white hover:dark:text-black hover:bg-black cursor-pointer"
                          : "",
                        "relative select-none py-2 px-3 hover:bg-black-1"
                      )
                    }
                    value={item}
                  >
                    {({ selected }) => (
                      <>
                        <span className={classNames(selected ? "font-semibold " : "font-normal", " block truncate")}>
                          {item.name}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
