import {
  Category,
  ChartComponent,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  StackingColumnSeries,
} from "@syncfusion/ej2-react-charts";
import { Tooltip } from "@syncfusion/ej2-react-popups";
import { motion } from "framer-motion";
import React from "react";

import { ChartsHeader, Header } from "../../components";
import { useStateContext } from "../../context/ContextProvider";
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";

const Stacked = () => {
  const { currentMode } = useStateContext();
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-md"
    >
      <Header category="Stacked" title="Revenue Breakdown" />
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={stackedPrimaryXAxis}
          primaryYAxis={stackedPrimaryYAxis}
          height="450px"
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          legendSettings={
            currentMode === "Dark"
              ? {
                  background: "black",
                  textStyle: { color: "white" },
                }
              : { background: "white", textStyle: { color: "black" } }
          }
        >
          <Inject
            services={[StackingColumnSeries, Category, Legend, Tooltip]}
          />
          <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {stackedCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </motion.div>
  );
};
export default Stacked;
