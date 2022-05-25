import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";
import { motion } from "framer-motion";

function Sidebar() {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 py-3 rounded-lg text-white text-md m-2 transition duration-300 ";
  const normalLink =
    "flex items-center gap-5 pl-4 py-3 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:bg-half-transparent dark:hover:text-gray-600 hover:bg-light-gray m-2 transition duration-300";

  return (
    <motion.div
      initial={{ opacity: 0, x: "-200" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="ml-3 h-screen md:overflow-hidden overlow-auto md:hover:overflow-auto pb-10"
    >
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="items-center gap-3 ml-3 flex mt-4 text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware /> <span>Shoppy</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                className="text-xl rounded-full p-3 hover:bg-light-gray  mt-4 block md:hidden"
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          <div className="mt-10">
            {links.map((link, i) => (
              <div key={i}>
                <p className="text-gray-400 m-3 mt-4 uppercase">
                  {" "}
                  {link.title}
                </p>

                {link.links.map((item) => (
                  <NavLink
                    key={item.name}
                    to={`/${item.name}`}
                    onClick={handleCloseSidebar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {item.icon}
                    <span className="capitalize">{item.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
}

export default Sidebar;
