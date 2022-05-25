import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  StackingColumnSeries,
} from "@syncfusion/ej2-react-charts";
import React from "react";
import { useStateContext } from "../../context/ContextProvider";
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";

function Stacked({ width, height }) {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={
        currentMode === "Dark"
          ? {
              background: "black",
              textStyle: { color: "white" },
            }
          : { background: "white", textStyle: { color: "black" } }
      }
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, i) => (
          <SeriesDirective key={i} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default Stacked;
