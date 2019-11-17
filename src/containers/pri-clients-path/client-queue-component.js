import React from "react";
import moment from "moment";
import { Chart, Geom, Axis, Tooltip, Label } from "bizcharts";

const ClientQueueChart = ({ clientQueueData }) => {
  let queueData = clientQueueData
    ? clientQueueData.map(item => {
        const startTime = moment(item.entertime, "YYYY-MM-DD hh:mm:ss");
        const endTime = moment(item.leavetime, "YYYY-MM-DD hh:mm:ss");
        const duration = moment.duration(endTime.diff(startTime));
        item.duration = duration.asMinutes();
        return item;
      })
    : [];
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
          duration: addDuration(item.name)
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
  //console.log(">>>>>>>>>>>", prepareData(queueData));

  const cols = {
    visits: {
      alias: "Number of visits to toilet",
      tickInterval: 1,
      max: 5,
      min: 0
    },
    duration: {
      alias: "Total duration in toilet (in minutes)",
      tickInterval: 5,
      nice: false,
      max: 35,
      min: 0
    },
    name: {
      alias: "Name"
    }
  };
  return (
    <div>
      <Chart
        height={450}
        width={800}
        data={prepareData(queueData)}
        padding={[5, 20, 50, 70]}
        scale={cols}
        plotBackground={{
          stroke: "#ccc",
          lineWidth: 1
        }}
        forceFit
      >
        <Axis
          name="name"
          grid={{
            lineStyle: {
              stroke: "#d9d9d9",
              lineWidth: 1,
              lineDash: [2, 2]
            }
          }}
        />
        <Axis name="visits" title />

        <Tooltip />
        <Geom
          type="point"
          position="name*visits"
          color="duration"
          style={{
            ineWidth: 1,
            stroke: "#1890ff"
          }}
          shape="circle"
          size={["duration", [10, 40]]}
          tooltip="name*visits*duration"
          opacity={0.3}
        >
          <Label
            content="duration"
            offset={0}
            textStyle={{
              fill: "#1890FF"
            }}
            formatter={(text, item, index) => {
              return text + " min";
            }}
          />
        </Geom>
      </Chart>
    </div>
  );
};

export default ClientQueueChart;

// <div>
// <Chart
//   height={600}
//   data={prepareData(clientQueueData)}
//   padding={[20, 0, 20, 100]}
//   scale={cols}
//   plotBackground={{
//     stroke: "#ccc",
//     lineWidth: 1
//   }}
//   forceFit
// >
//   <Axis
//     name="duration"
//     label={{
//       formatter: val => {
//         return val + " mins";
//       }
//     }}
//     grid={{
//       lineStyle: {
//         stroke: "#d9d9d9",
//         lineWidth: 1,
//         lineDash: [2, 2]
//       }
//     }}
//   />
//   <Axis
//     name="visits"
//     title={{
//       offset: 64
//     }}
//     label={{
//       formatter: function(val) {
//         if (val > 0) {
//           return val + " times";
//         }
//       }
//     }}
//   />

//   <Tooltip title="name" />
//   <Geom
//     type="point"
//     position="duration*visits"
//     color="name"
//     style={{
//       ineWidth: 1,
//       stroke: "#1890ff"
//     }}
//     shape="circle"
//     size={10}
//     tooltip="duration*visits*name"
//     opacity={0.3}
//   >
//     <Label
//       content="name"
//       offset={0}
//       textStyle={{
//         fill: "#1890FF"
//       }}
//     />
//   </Geom>
// </Chart>
// </div>

// <Chart height={550} data={prepareData(queueData)} scale={cols} forceFit>
//   <Tooltip
//     crosshairs={{
//       type: "cross"
//     }}
//   />
//   <Axis name="visits" />
//   <Axis name="duration" />
//   <Legend reversed />
//   <Geom
//     type="point"
//     position="duration*visits"
//     color="name"
//     opacity={0.65}
//     shape="circle"
//     size={4}
//     adjust="jitter"
//   />
// </Chart>;
