import React, { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Toggle = ({
  switchOffClass,
  switchOnClass,
  switchCloseClass,
  switchOpenClass,
  turnOff,
  turnOn,
  blueToggle,
  bigToggle,
  enabled,
  setEnabled,
  setEsetSwitchOnnabled
}) => { 

  const [switchOn, setSwitchOn] = useState(false);
  return (
    <>
      {bigToggle == "true" ? (
        <div className="flex items-center">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={classNames(
              enabled
                ? `bg-black/20 dark:bg-blue-1 ${switchOnClass}`
                : `bg-black900 dark:bg-white/20 ${switchOffClass}`,
              `relative inline-flex md:h-8 h-6 md:w-[66px] w-[50px] py-1 items-center flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0 `
            )}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={classNames(
                enabled
                  ? `md:translate-x-[36px] translate-x-[27px] dark:bg-white ${switchOpenClass}`
                  : `translate-x-[2px] dark:bg-blacklight ${switchCloseClass}`,
                "pointer-events-none inline-block md:h-6 md:w-6 h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
              )}
            />
          </Switch>
          {enabled ? <span>{turnOn}</span> : <span>{turnOff}</span>}
        </div>
      ) : "" || blueToggle == "true" ? (
        <div className="flex items-center">
          <Switch  
            checked={switchOn}
            onChange={setEsetSwitchOnnabled}
            className={classNames(
              switchOn 
                ? `bg-blue-1 dark:bg-blue-1 ${switchOnClass}`
                : `bg-black/20 dark:bg-white/20 ${switchOffClass}`,
              "relative inline-flex h-6 w-11 mr-1 my-1 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0"
            )}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={classNames(
                switchOn
                  ? "translate-x-5 dark:bg-white"
                  : "translate-x-0 dark:bg-blacklight",
                "pointer-events-none inline-block  h-5 w-5 transform rounded-full bg-white  shadow ring-0 transition duration-200 ease-in-out"
              )}
            />
          </Switch>
          {switchOn ? <span>{turnOn}</span> : <span>{turnOff}</span>}
        </div>
      ) : (
        <div className="flex items-center">
          <Switch
            checked={switchOn}
            onChange={setSwitchOn}
            className={classNames(
              switchOn
                ? `bg-blacklight dark:bg-secondary-purpleb ${switchOnClass}`
                : `bg-black/20 dark:bg-white/20 ${switchOffClass}`,
              "relative inline-flex h-4 w-7 mr-1 my-1 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0"
            )}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={classNames(
                switchOn
                  ? `translate-x-3 dark:bg-blacklight ${switchOpenClass}`
                  : `translate-x-0 dark:bg-white ${switchCloseClass}`,
                "pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white  shadow ring-0 transition duration-200 ease-in-out"
              )}
            />
          </Switch>
          {switchOn ? <span>{turnOn}</span> : <span>{turnOff}</span>}
        </div>
      )}
    </>
  );
};

export default Toggle;
