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
} from "../../data/dummy";

function ColorMapping() {
  const { currentMode } = useStateContext();

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-md"
    >
      <Header
        category="Color Mappping"
        title="USA CLIMATE - WEATHER BY MONTH"
      />
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{ mode: "Range", background: "white" }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="USA"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
            />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {rangeColorMapping.map((item, index) => (
              <RangeColorSettingDirective key={index} {...item} />
            ))}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </motion.div>
  );
}

export default ColorMapping;
