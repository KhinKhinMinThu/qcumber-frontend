import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Icon, Row, Col, Button, DatePicker } from "antd";
import { getOccupancyData } from "../../reducers/led-reducer";
import { timer_sensors } from "../../props";
import moment from "moment";
import { ChartCard } from "../shared-styles/private-pages";
import { postToiletsDate } from "../../reducers/toilets-reducer";

import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts";
import DataSet from "@antv/data-set";

const green = "#00A86B";
const red = "#e74f4e";

class ToiletsPage extends Component {
  getToiletsData = () => {
    const { postToiletsDate } = this.props;
    const date = "2019-11-04";
    postToiletsDate(date);
  };
  render() {
    // const {
    //   queueData: { occupancyData }
    // } = this.props;
    const minDate = moment()
      .startOf("day")
      .subtract(6, "day")
      .format("YYYY-MM-DD");
    const maxDate = moment()
      .endOf("day")
      .add(1, "day")
      .format("YYYY-MM-DD");
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
        tickInterval: 5
      }
    };
    return (
      <div style={{ height: "100%", padding: "20px" }}>
        <ChartCard>
          <DatePicker
            disabledDate={d =>
              !d || d.isAfter(maxDate) || d.isSameOrBefore(minDate)
            }
            format="YYYY-MM-DD"
            defaultValue={moment()}
            onClick={this.getToiletsData}
          />
          <Chart height={500} width={1100} data={dv} forceFit scale={scale}>
            <Axis name="Hours" title />
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
        </ChartCard>
      </div>
    );
  }
}

ToiletsPage.propTypes = {
  postToiletsDate: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  toiletsData: state.toiletsData
});

const mapDispatchToProps = {
  postToiletsDate: postToiletsDate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToiletsPage);
