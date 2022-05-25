import {
  ChartComponent,
  DateTime,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
  LineSeries,
} from "@syncfusion/ej2-react-charts";
import React from "react";
import { useStateContext } from "../../context/ContextProvider";
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";

function LineChart() {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id="line-chart"
      height="500px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, i) => (
          <SeriesDirective key={i} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default LineChart;
