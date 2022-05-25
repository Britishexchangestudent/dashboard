import { motion } from "framer-motion";
import React from "react";
import { LineChart, ChartsHeader, Header } from "../../components";

function Line() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-md"
    >
      <Header title="Inflation Rate" category="Chart" />

      <div className="w-full">
        <LineChart />
      </div>
    </motion.div>
  );
}

export default Line;
