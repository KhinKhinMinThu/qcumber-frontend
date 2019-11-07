import React from "react";
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts";

const OccupancyChartPercent = ({ datafrombk }) => {
  const data = [
    {
      hours: "7-8 am",
      toiletId: "Toilet 1",
      value: 12
    },
    {
      hours: "8-9 am",
      toiletId: "Toilet 1",
      value: 21
    },
    {
      hours: "9-10 am",
      toiletId: "Toilet 1",
      value: 10
    },
    {
      hours: "10-11 am",
      toiletId: "Toilet 1",
      value: 70
    },
    {
      hours: "11-12 pm",
      toiletId: "Toilet 1",
      value: 45
    },
    {
      hours: "12-1 pm",
      toiletId: "Toilet 1",
      value: 26
    },
    {
      hours: "1-2 pm",
      toiletId: "Toilet 1",
      value: 47
    },
    {
      hours: "2-3 pm",
      toiletId: "Toilet 1",
      value: 12
    },
    {
      hours: "3-4 pm",
      toiletId: "Toilet 1",
      value: 12
    },
    {
      hours: "4-5 pm",
      toiletId: "Toilet 1",
      value: 12
    },
    {
      hours: "5-6 pm",
      toiletId: "Toilet 1",
      value: 12
    },
    // Toilet 2
    {
      hours: "7-8 am",
      toiletId: "Toilet 2",
      value: 12
    },
    {
      hours: "8-9 am",
      toiletId: "Toilet 2",
      value: 11
    },
    {
      hours: "9-10 am",
      toiletId: "Toilet 2",
      value: 1
    },
    {
      hours: "10-11 am",
      toiletId: "Toilet 2",
      value: 12
    },
    {
      hours: "11-12 pm",
      toiletId: "Toilet 2",
      value: 12
    },
    {
      hours: "12-1 pm",
      toiletId: "Toilet 2",
      value: 12
    },
    {
      hours: "1-2 pm",
      toiletId: "Toilet 2",
      value: 12
    },
    {
      hours: "2-3 pm",
      toiletId: "Toilet 2",
      value: 12
    },
    {
      hours: "3-4 pm",
      toiletId: "Toilet 2",
      value: 8
    },
    {
      hours: "4-5 pm",
      toiletId: "Toilet 2",
      value: 1
    },
    {
      hours: "5-6 pm",
      toiletId: "Toilet 2",
      value: 10
    }
  ];
  const scale = {
    value: {
      min: 0,
      max: 100,
      tickInterval: 10
    }
  };

  return (
    <Chart height={500} width={500} data={data} scale={scale} forceFit>
      <Legend />
      <Axis name="hours" />
      <Axis
        name="value"
        label={{
          formatter: val => `${val}%`
        }}
      />
      <Tooltip
        crosshairs={{
          type: "y"
        }}
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
