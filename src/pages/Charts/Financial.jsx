import {
  ChartComponent,
  Inject,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
  Category,
  HiloOpenCloseSeries,
  Zoom,
  Crosshair,
  DateTime,
  HiloSeries,
  Logarithmic,
} from "@syncfusion/ej2-react-charts";
import { motion } from "framer-motion";
import React from "react";
import { ChartsHeader, Header } from "../../components";
import { useStateContext } from "../../context/ContextProvider";
import {
  financialChartData,
  FinancialPrimaryYAxis,
  FinancialPrimaryXAxis,
} from "../../data/dummy";

const date1 = new Date("2017, 1, 1");

function filterValue(value) {
  if (value.x >= date1) {
    return value.x, value.high, value.low;
  }
}
const returnValue = financialChartData.filter(filterValue);

function Financial() {
  const { currentMode } = useStateContext();

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-md"
    >
      <Header category="Financial" title="AAPLE Historical" />
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject
            services={[
              HiloSeries,
              Tooltip,
              DateTime,
              Logarithmic,
              Crosshair,
              Zoom,
            ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={returnValue}
              xName="x"
              yName="low"
              name="Apple Inc"
              type="Hilo"
              low="low"
              high="high"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </motion.div>
  );
}

export default Financial;
