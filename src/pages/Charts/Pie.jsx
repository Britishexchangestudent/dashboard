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
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  PieSeries,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";
import { motion } from "framer-motion";
import React from "react";
import { Header } from "../../components";
import { useStateContext } from "../../context/ContextProvider";
import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
  pieChartData,
} from "../../data/dummy";

function Pie() {
  const { currentMode } = useStateContext();

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-md"
    >
      <Header category="Pie" title="Project Cost Breakdown" />

      <div className="w-full">
        <AccumulationChartComponent
          id="charts"
          legendSettings={
            currentMode === "Dark"
              ? {
                  background: "black",
                  textStyle: { color: "white" },
                }
              : { background: "white", textStyle: { color: "black" } }
          }
          height="450px"
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          tooltip={{ enable: true }}
        >
          <Inject
            services={[
              AccumulationLegend,
              PieSeries,
              AccumulationDataLabel,
              AccumulationTooltip,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Sale"
              dataSource={pieChartData}
              xName="x"
              yName="y"
              type="Pie"
              innerRadius="40%"
              startAngle={0}
              endAngle={360}
              radius="70%"
              explode
              explodeOffset="10%"
              explodeIndex={2}
              dataLabel={{
                visible: true,
                name: "text",
                position: "Inside",
                font: {
                  fontWeight: "600",
                  color: "#fff",
                },
              }}
            ></AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
        ;
      </div>
    </motion.div>
  );
}

export default Pie;
