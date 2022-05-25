import React from "react";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";
import { useStateContext } from "../context/ContextProvider";
import {
  earningData,
  ecomPieChartData,
  SparklineAreaData,
} from "../data/dummy";
import { motion } from "framer-motion";

function Ecommerce() {
  const { currentColor, currentMode } = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap  justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-md dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern  bg-cover bg-center"
        >
          <div className="flex justify-between items-center -mt-2">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl font-semibold dark:text-white">
                $892,394,421
              </p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </motion.div>

        <div className="flex m-3 flex-wrap justify-center items-center gap-1">
          {earningData.map((item) => (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="bg-white shadow-md dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
              key={item.title}
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>

              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>

              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-md dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780"
        >
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl00">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-[#00BDAE] hover:drop-shadow-xl00">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p className="flex items-center">
                  <span className="text-3xl font-semibold">$987,583</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    35%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="flex items-center">
                  <span className="text-3xl font-semibold">$256,322</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                  mode={currentMode}
                />
              </div>

              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked height="360px" width="320px" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Ecommerce;
