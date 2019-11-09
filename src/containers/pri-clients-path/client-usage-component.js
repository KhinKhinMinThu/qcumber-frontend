import React from "react";
import moment from "moment";
import { Empty } from "antd";
import { Chart, Geom, Axis, Tooltip } from "bizcharts";

class ClientToiletUsage extends React.Component {
  prepareData = (clientQueueData, selectedName) => {
    return clientQueueData
      ? clientQueueData
          .filter(item => item.name === selectedName)
          .map(item => {
            const startTime = moment(item.entertime, "YYYY-MM-DD hh:mm:ss");
            const endTime = moment(item.leavetime, "YYYY-MM-DD hh:mm:ss");
            const duration = moment.duration(endTime.diff(startTime));

            return {
              entertime: item.entertime.substring(
                item.entertime.indexOf(" "),
                item.entertime.length - 3
              ),
              duration: duration.asMinutes()
            };
          })
      : [];
  };
  render() {
    const { clientQueueData, selectedName } = this.props;
    console.log("Selected name: ", selectedName);

    const data = this.prepareData(clientQueueData, selectedName);
    console.log("data: ", data);
    const scale = {
      duration: {
        alias: "Duration in toilet (in minutes)",
        min: 0,
        interval: 1
      },
      entertime: {
        alias: "Timestamp"
      }
    };
    return (
      <div>
        {data.length > 0 ? (
          <Chart
            height={400}
            data={data}
            padding={[60, 20, 60, 60]}
            scale={scale}
            forceFit
          >
            <Axis name="duration" title />
            <Axis name="entertime" title />
            <Geom
              type="interval"
              position="entertime*duration"
              color={[
                "entertime",
                [" #3399ff", "#fec514", "#db4c3c", "#7f8da9"]
              ]}
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
  }
}
export default ClientToiletUsage;
