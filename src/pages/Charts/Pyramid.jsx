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
  ColumnSeries,
  Legend,
  RangeColorSettingsDirective,
  RangeColorSettingDirective,
  AccumulationChartComponent,
  AccumulationDataLabel,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationLegend,
  AccumulationSelection,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
} from "@syncfusion/ej2-react-charts";
import { motion } from "framer-motion";
import React from "react";
import { ChartsHeader, Header } from "../../components";
import { useStateContext } from "../../context/ContextProvider";
import {
  financialChartData,
  FinancialPrimaryYAxis,
  FinancialPrimaryXAxis,
  rangeColorMapping,
  colorMappingData,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
  PyramidData,
} from "../../data/dummy";

function Pyramid() {
  const { currentMode } = useStateContext();

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-md"
    >
      <Header category="Pyramid" title="Food Comparison Chart" />
      <div className="w-full">
        <AccumulationChartComponent
          id="pyramid-chart"
          legendSettings={{ background: "white" }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject
            services={[
              AccumulationDataLabel,
              AccumulationTooltip,
              PyramidSeries,
              AccumulationLegend,
              AccumulationSelection,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Food"
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="45%"
              height="80%"
              neckWidth="15%"
              gapRatio={0.03}
              explode
              emptyPointSettings={{ mode: "Drop", fill: "red" }}
              dataLabel={{
                visible: true,
                position: "Inside",
                name: "text",
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </motion.div>
  );
}

export default Pyramid;
