import React from "react";
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts";
import DataSet from "@antv/data-set";

const OccupancyChartMins = ({ data, t1Total, t2Total, t3Total }) => {
  const ds = new DataSet();
  const dv = ds.createView().source(data);
  dv.transform({
    type: "fold",
    fields: [
      "10-11 am",
      "11-12 pm",
      "12-1 pm",
      "1-2 pm",
      "2-3 pm",
      "3-4 pm"
      // "4-5 pm"
    ],
    key: "Hours",
    value: "Minutes"
  });
  const scale = {
    Minutes: {
      min: 0,
      max: 60,
      tickInterval: 5
    }
  };
  return (
    <Chart height={450} width={500} data={dv} forceFit scale={scale}>
      <Axis name="Hours" />
      <Axis name="Minutes" title />
      <Legend
        itemFormatter={val => {
          if (val === "Toilet 1") return val + ": " + t1Total + " mins";
          if (val === "Toilet 2") return val + ": " + t2Total + " mins";
          if (val === "Toilet 3") return val + ": " + t3Total + " mins";
        }}
      />
      <Tooltip
        crosshairs={{
          type: "y"
        }}
        itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value} mins</li>'
      />
      <Geom
        type="interval"
        position="Hours*Minutes"
        color={"toiletId"}
        adjust={[
          {
            type: "dodge",
            marginRatio: 1 / 32
          }
        ]}
      />
    </Chart>
  );
};

export default OccupancyChartMins;
