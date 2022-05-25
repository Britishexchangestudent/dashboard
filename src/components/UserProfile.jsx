import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import Button from "./Button";
import avatar from "../data/avatar.jpg";
import { userProfileData } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";
import { motion } from "framer-motion";

function UserProfile() {
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
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <button
          className="p-3 text-black dark:text-[#8e9299] rounded-full hover:bg-light-gray dark:hover:bg-[#151618] transition-all duration-200"
          onClick={() => removeClick("userProfile")}
        >
          <MdOutlineCancel className="h-6 w-6" />
        </button>
      </div>

      <div className="flex gap-5 items-center mt-6 border-color border-b-1 border-t-1 py-6">
        <img src={avatar} alt="" className="rounded-full h-24 w-24" />

        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            {" "}
            Michael Roberts{" "}
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            {" "}
            Administrator{" "}
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            {" "}
            info@shop.com{" "}
          </p>
        </div>
      </div>

      <div>
        {userProfileData.map((item, i) => (
          <div
            key={i}
            className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer dark:hover:bg-[#151618] rounded-md transition-all duration-200"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </motion.div>
  );
}

export default UserProfile;
