import {
  ChartComponent,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
  ColumnSeries,
  Category,
  DataLabel,
} from "@syncfusion/ej2-react-charts";
import { motion } from "framer-motion";
import React from "react";
import { Header } from "../../components";
import { useStateContext } from "../../context/ContextProvider";
import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";

function Bar() {
  const { currentMode } = useStateContext();

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-md"
    >
      <Header category="Bar" title="Olympic Medal Counts - RIO" />

      <div className="w-full">
        <ChartComponent
          id="charts"
          height="500px"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
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
            services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}
          />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, i) => (
              <SeriesDirective key={i} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </motion.div>
  );
}

export default Bar;
