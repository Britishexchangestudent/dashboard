import {
  ChartComponent,
  DateTime,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
  LineSeries,
  AreaSeries,
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";
import { motion } from "framer-motion";
import React from "react";
import { Header } from "../../components";
import { useStateContext } from "../../context/ContextProvider";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";

function Area() {
  const { currentMode } = useStateContext();

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-md"
    >
      <Header title="Inflation Rate in Percentage" category="Area" />

      <div className="w-full">
        <ChartComponent
          id="area-chart"
          height="500px"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, i) => (
              <SeriesDirective key={i} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </motion.div>
  );
}

export default Area;
