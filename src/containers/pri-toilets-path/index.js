import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row, Col, DatePicker, Alert } from "antd";
import moment from "moment";
import { ChartCard, CenterBox } from "../shared-styles/private-pages";
import { postToiletsDate } from "../../reducers/toilets-reducer";

import OccupancyChartMins from "./occupancy-mins-component";
import OccupancyChartPercent from "./occupancy-percent-component";

const defaultDate = "2019-11-08";
class ToiletsPage extends Component {
  state = { selectedDdate: defaultDate };
  componentDidMount = () => {
    const { postToiletsDate } = this.props;
    postToiletsDate(defaultDate);
  };

  getToiletsData = (date, dateString) => {
    const { postToiletsDate } = this.props;
    console.log("Selected date string:", dateString);
    this.setState({ selectedDdate: dateString });
    postToiletsDate(dateString);
  };

  // Occupancy Min Component
  prepareOccMinData = (toilet, number) => {
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
  getTotalMin = toilet => {
    return toilet
      ? parseInt(Object.values(toilet).reduce((a, b) => a + b, 0) / 60)
      : 0;
  };

  // Occupancy Percent Component
  getOverAllPercent = (toilet1Data, toilet2Data, toilet3Data) => {
    const data = [];
    const hours = [
      "10-11 am",
      "11-12 pm",
      "12-1 pm",
      "1-2 pm",
      "2-3 pm",
      "3-4 pm"
    ];
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
    return data;
  };
  // getToiletPercent = (toilet, number) => {
  //   const data = [];
  //   const hours = [
  //     "10-11 am",
  //     "11-12 pm",
  //     "12-1 pm",
  //     "1-2 pm",
  //     "2-3 pm",
  //     "3-4 pm"
  //   ];
  //   let startHr = 10;
  //   const totalMins = 60; // 3 toilets;
  //   hours.forEach(item => {
  //     data.push({
  //       hours: item,
  //       toiletId: `Toilet ${number}`,
  //       value: ((toilet[startHr] / 60 / totalMins) * 100).toFixed(2)
  //     });
  //     startHr += 1;
  //   });
  // };

  render() {
    const {
      toiletsData: { toilet1Data, toilet2Data, toilet3Data }
    } = this.props;
    const { selectedDdate } = this.state;
    const minDate = moment()
      .startOf("day")
      .subtract(30, "day")
      .format("YYYY-MM-DD");
    const maxDate = moment()
      .startOf("day")
      //.add(1, "day")
      .format("YYYY-MM-DD");

    // Occupancy Min Component
    const t1Total = this.getTotalMin(toilet1Data);
    const t2Total = this.getTotalMin(toilet2Data);
    const t3Total = this.getTotalMin(toilet3Data);

    const occMinData = [];
    occMinData.push(this.prepareOccMinData(toilet1Data, 1));
    occMinData.push(this.prepareOccMinData(toilet2Data, 2));
    occMinData.push(this.prepareOccMinData(toilet3Data, 3));

    const occPercentData =
      toilet1Data && toilet2Data && toilet3Data
        ? this.getOverAllPercent(toilet1Data, toilet2Data, toilet3Data)
        : [];

    return (
      <div style={{ height: "100%", padding: "10px" }}>
        <ChartCard>
          <CenterBox>
            Select Date:{" "}
            <DatePicker
              disabledDate={d =>
                !d || d.isAfter(maxDate) || d.isSameOrBefore(minDate)
              }
              format="YYYY-MM-DD"
              defaultValue={moment(defaultDate)}
              onChange={this.getToiletsData}
            />
          </CenterBox>
          <Row style={{ marginTop: "10px" }}>
            <Col span={12}>
              {selectedDdate === "2019-11-08" ||
              selectedDdate === "2019-11-07" ? (
                <Alert
                  style={{ width: "80%", margin: "auto" }}
                  message="All toilets are being utilized equally."
                  description="No action needed!"
                  type="info"
                  showIcon
                />
              ) : null}
              <OccupancyChartMins
                data={occMinData}
                t1Total={t1Total}
                t2Total={t2Total}
                t3Total={t3Total}
              />
              <CenterBox>
                <span style={{ fontWeight: "bold" }}>
                  {"Toilets Occupancy Data (" + selectedDdate + ")"}
                </span>
              </CenterBox>
            </Col>
            <Col span={12}>
              {selectedDdate === "2019-11-08" ||
              selectedDdate === "2019-11-07" ? (
                <Alert
                  style={{ width: "90%", margin: "auto" }}
                  message={
                    selectedDdate === "2019-11-08"
                      ? "The occupancy rate is over 50% during 2-3 pm."
                      : "The occupancy rate is over 70% during 3-4 pm."
                  }
                  description="Please deploy more staff or encourage the clients to spread out the usage! "
                  type="warning"
                  showIcon
                />
              ) : null}
              <OccupancyChartPercent data={occPercentData} />
              <CenterBox>
                <span style={{ fontWeight: "bold" }}>
                  {"Toilets Occupancy Rate (" + selectedDdate + ")"}
                </span>
              </CenterBox>
            </Col>
          </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(ToiletsPage);
