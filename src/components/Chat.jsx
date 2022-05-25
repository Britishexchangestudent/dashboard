import { motion } from "framer-motion";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../context/ContextProvider";
import { chatData } from "../data/dummy";
import Button from "./Button";

function Chat() {
  const { currentColor, handleClick, removeClick, isClicked } =
    useStateContext();
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      exit={{ x: 100, opacity: 0 }}
      className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-6 rounded-lg w-96 shadow-md"
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Messages</p>
          <button
            type="button"
            className="text-white text-xs rounded p-1 px-2 bg-orange-theme dark:hover:bg-[#151618]"
          >
            {" "}
            5 New
          </button>
        </div>

        <button
          className="p-3 text-black dark:text-[#8e9299] rounded-full hover:bg-light-gray dark:hover:bg-[#151618] transition-all duration-200"
          onClick={() => removeClick("chat")}
        >
          <MdOutlineCancel className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-5 border-t-1 border-color">
        {chatData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 hover:bg-light-gray cursor-pointer dark:hover:bg-[#151618] rounded-md transition-all duration-200"
          >
            <div className="relative">
              <img
                className="rounded-full h-10 w-10"
                src={item.image}
                alt={item.message}
              />
              <span
                style={{ background: item.dotColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
              />
            </div>
            <div>
              <p className="font-semibold dark:text-gray-200 ">
                {item.message}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.desc}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                {item.time}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="See all messages"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Chat;
