import React from "react";
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts";
import DataSet from "@antv/data-set";

const OccupancyChartMins = ({ datafrombk }) => {
  const data = [
    {
      toiletId: "Toilet 1",
      "7-8 am": 12,
      "8-9 am": 11,
      "9-10 am": 20,
      "10-11 am": 40,
      "11-12 pm": 10,
      "12-1 pm": 30,
      "1-2 pm": 5,
      "2-3 pm": 44,
      "3-4 pm": 53,
      "4-5 pm": 18,
      "5-6 pm": 24
    },
    {
      toiletId: "Toilet 2",
      "7-8 am": 9,
      "8-9 am": 28,
      "9-10 am": 38,
      "10-11 am": 53,
      "11-12 pm": 32,
      "12-1 pm": 3,
      "1-2 pm": 0,
      "2-3 pm": 23,
      "3-4 pm": 12,
      "4-5 pm": 11,
      "5-6 pm": 38
    }
  ];
  const ds = new DataSet();
  const dv = ds.createView().source(data);
  dv.transform({
    type: "fold",
    fields: [
      "7-8 am",
      "8-9 am",
      "9-10 am",
      "10-11 am",
      "11-12 pm",
      "12-1 pm",
      "1-2 pm",
      "2-3 pm",
      "3-4 pm",
      "4-5 pm",
      "5-6 pm"
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
    <Chart height={500} width={500} data={dv} forceFit scale={scale}>
      <Axis name="Hours" />
      <Axis name="Minutes" title />
      <Legend />
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
