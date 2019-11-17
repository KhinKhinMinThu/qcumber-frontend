import React from "react";
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts";

const OccupancyChartPercent = ({ data }) => {
  const scale = {
    value: {
      min: 0,
      max: 100,
      tickInterval: 10
    }
  };

  return (
    <Chart height={450} width={500} data={data} scale={scale} forceFit>
      <Legend />
      <Axis name="hours" />
      <Axis
        name="value"
        label={{
          formatter: val => `${val} %`
        }}
      />
      <Tooltip
        crosshairs={{
          type: "y"
        }}
        itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value} %</li>'
      />
      <Geom
        type="line"
        position="hours*value"
        size={2}
        color={"toiletId"}
        shape={"smooth"}
      />
      <Geom
        type="point"
        position="hours*value"
        size={4}
        shape={"circle"}
        color={"toiletId"}
        style={{
          stroke: "#fff",
          lineWidth: 1
        }}
      />
    </Chart>
  );
};

export default OccupancyChartPercent;
