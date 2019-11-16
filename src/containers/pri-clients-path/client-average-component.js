import React from "react";
import moment from "moment";
import { Empty } from "antd";
import { Chart, Geom, Axis, Tooltip } from "bizcharts";

const ClientToiletAverage = ({ clientQueueData }) => {
  let queueData = clientQueueData.map(item => {
    const startTime = moment(item.entertime, "YYYY-MM-DD hh:mm:ss");
    const endTime = moment(item.leavetime, "YYYY-MM-DD hh:mm:ss");
    const duration = moment.duration(endTime.diff(startTime));
    item.duration = duration.asMinutes();
    return item;
  });
  const countVisits = name => {
    return clientQueueData.reduce((n, x) => n + (x.name === name), 0);
  };
  const addDuration = name => {
    return clientQueueData.reduce(
      (n, x) => n + (x.name === name ? x.duration : 0),
      0
    );
  };
  const prepareData = queueData => {
    let data = [];
    if (queueData) {
      queueData.forEach(item => {
        data.push({
          name: item.name,
          visits: countVisits(item.name),
          duration: addDuration(item.name),
          average: Math.round(addDuration(item.name) / countVisits(item.name))
        });
      });

      const keys = ["name"];
      data = data.filter(
        (s => o => (k => !s.has(k) && s.add(k))(keys.map(k => o[k]).join("|")))(
          new Set()
        )
      );
    }

    return data;
  };
  const data = prepareData(queueData);
  // console.log(">>>>>>>>>>>", prepareData(queueData));
  const scale = {
    average: {
      alias: "Average time spent in toilet (in minutes)",
      min: 0
    }
  };
  return (
    <div>
      {data.length > 0 ? (
        <Chart height={510} data={data} scale={scale} forceFit>
          <Axis name="name" />
          <Axis name="average" title />
          <Geom
            type="interval"
            position="name*average"
            color={["name", [" #3399ff", "#fec514", "#db4c3c", "#7f8da9"]]}
          />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
            itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value} mins</li>'
          />
        </Chart>
      ) : (
        <Empty />
      )}
    </div>
  );
};
export default ClientToiletAverage;
