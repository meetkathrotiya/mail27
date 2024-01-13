import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Modal = ({ children, title, open, setOpen, className }) => {
  const cancelButtonRef = useRef(null); 
  return (
    <Transition.Root show={open}  as={Fragment}>
      <Dialog as="div" className="fixed z-[999]" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 dark:bg-black/80 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 sm:items-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className={`relative transform shadow-xl transition-all bg-primary-light dark:bg-blacklight sm:p-6 p-4 rounded-2xl ${className}`}>
                <button
                  ref={cancelButtonRef}
                  className={`absolute bg-primary-light hidden dark:bg-blacklight p-[3px] right-[-12px] top-[-12px] rounded-xl border border-black/10 dark:border-white/10`}
                >  
                </button>
                <h2 className="text-blacklight dark:text-white font-semibold text-lg text-left">{title}</h2>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default Modal;
