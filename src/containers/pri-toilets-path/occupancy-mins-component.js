import React from "react";
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts";
import DataSet from "@antv/data-set";

const prepareData = (toilet, number) => {
  return toilet
    ? {
        toiletId: `Toilet ${number}`,
        "10-11 am": parseInt(toilet["10"] / 60), // convert seconds to minutes
        "11-12 pm": parseInt(toilet["11"] / 60),
        "12-1 pm": parseInt(toilet["12"] / 60),
        "1-2 pm": parseInt(toilet["13"] / 60),
        "2-3 pm": parseInt(toilet["14"] / 60),
        "3-4 pm": parseInt(toilet["15"] / 60)
        // "4-5 pm": parseInt(toilet["16"] / 60)
      }
    : {};
};

const OccupancyChartMins = ({ toilet1Data, toilet2Data, toilet3Data }) => {
  const data = [];
  data.push(prepareData(toilet1Data, 1));
  data.push(prepareData(toilet2Data, 2));
  data.push(prepareData(toilet3Data, 3));
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
    <Chart height={480} width={500} data={dv} forceFit scale={scale}>
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
