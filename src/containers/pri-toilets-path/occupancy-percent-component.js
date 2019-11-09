import React from "react";
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts";

const OccupancyChartPercent = ({ toilet1Data, toilet2Data, toilet3Data }) => {
  const data = [];
  const hours = [
    "10-11 am",
    "11-12 pm",
    "12-1 pm",
    "1-2 pm",
    "2-3 pm",
    "3-4 pm"
  ];
  const overall = () => {
    let startHr = 10;
    const totalMins = 60 * 3; // 3 toilets;
    hours.forEach(item => {
      data.push({
        hours: item,
        toiletId: "All Toilets",
        value: Math.round(
          ((toilet1Data[startHr] / 60 +
            toilet2Data[startHr] / 60 +
            toilet3Data[startHr] / 60) /
            totalMins) *
            100
        )
      });
      startHr += 1;
    });
  };
  // const toilet = (toilet, number) => {
  //   let startHr = 10;
  //   const totalMins = 60; // 3 toilets;
  //   console.log(toilet1Data[startHr + 2]);
  //   hours.forEach(item => {
  //     data.push({
  //       hours: item,
  //       toiletId: `Toilet ${number}`,
  //       value: ((toilet[startHr] / 60 / totalMins) * 100).toFixed(2)
  //     });
  //     startHr += 1;
  //   });
  // };

  const scale = {
    value: {
      min: 0,
      max: 100,
      tickInterval: 10
    }
  };
  if (toilet1Data && toilet2Data && toilet3Data) {
    overall();
    // toilet(toilet1Data, 1);
    // toilet(toilet2Data, 2);
    // toilet(toilet3Data, 3);
  }

  return (
    <Chart height={480} width={500} data={data} scale={scale} forceFit>
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
