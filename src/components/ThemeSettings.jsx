import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { motion } from "framer-motion";
import React from "react";
import { BsCheck } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../context/ContextProvider";
import { themeColors } from "../data/dummy";

function ThemeSettings() {
  const {
    setColor,
    setMode,
    currentMode,
    currentColor,
    setThemeSettings,
    themeSettings,
  } = useStateContext();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
      className="bg-half-transparent w-screen fixed nav-item top-0 right-0 duration-300 transition-all"
    >
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ x: 100, opacity: 0 }}
        className={`float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52]  duration-1000 ease-in-out transition-all`}
      >
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray transition-all duration-300 dark:hover:bg-half-transparent"
            onClick={() => {
              setThemeSettings(false);
            }}
            style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className="flex-col border-t-1 border-color p-4 mx-4">
          <p className="font-semibold text-lg">Theme Options</p>

          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onClick={setMode}
              onChange={setMode}
              checked={currentMode === "Light"}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onClick={setMode}
              onChange={setMode}
              checked={currentMode === "Dark"}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>
        <div className="flex-col border-t-1 border-color p-4 mx-4">
          <p className="font-semibold text-lg mb-3">Theme Colors</p>

          <div className="flex gap-3">
            {themeColors.map((item, i) => (
              <TooltipComponent
                key={i}
                content={item.name}
                position="BottomCenter"
              >
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button
                    className="h-10 w-10 rounded-full cursor-pointer"
                    type="button"
                    onClick={() => setColor(item.color)}
                    style={{ backgroundColor: item.color }}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ThemeSettings;
