import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Icon, Row, Col, Statistic, Alert } from "antd";
import { getOccupancyData } from "../../reducers/led-reducer";
import { timer_sensors } from "../../props";
import moment from "moment";
import { BoxCard } from "../shared-styles/private-pages";

const green = "#00A86B";
const red = "#e74f4e";

class SensorsPage extends Component {
  state = { lastCalled: "" };
  componentDidMount() {
    const { getOccupancyData } = this.props;
    getOccupancyData();
    this.setState({ lastCalled: moment() });
    this.interval = setInterval(() => {
      this.setState({ lastCalled: moment() });
      getOccupancyData();
    }, timer_sensors);
  }
  getStatistic = (title, value, color, prefix) => {
    return (
      <Statistic
        style={{ marginLeft: "80px" }}
        title={title}
        value={value}
        valueStyle={{ color: color }}
        prefix={<Icon type={prefix} />}
      />
    );
  };
  render() {
    const {
      queueData: { occupancyData }
    } = this.props;

    const { lastCalled } = this.state;
    const checkedDate = lastCalled ? lastCalled.format("DD-MMM-YYYY") : "--/";
    const checkedTime = lastCalled ? lastCalled.format("HH:mm:ss") : "--/";
    const error = (
      <Alert
        style={{ marginTop: "20px" }}
        message="NO SIGNAL"
        description="Please check the toilet sensor!"
        type="error"
        showIcon
      />
    );

    const success = (
      <Alert
        style={{ marginTop: "20px" }}
        message="RUNNING"
        description="No action needed!"
        type="success"
        showIcon
      />
    );

    let t1Status, t1Color, t2Status, t2Color, t3Status, t3Color;
    if (occupancyData) {
      t1Status =
        occupancyData.toilet1 && occupancyData.toilet1 !== "9"
          ? "Active"
          : "Inactive";
      t1Color =
        occupancyData.toilet1 && occupancyData.toilet1 !== "9" ? green : red;
      t2Status =
        occupancyData.toilet2 && occupancyData.toilet2 !== "9"
          ? "Active"
          : "Inactive";
      t2Color =
        occupancyData.toilet2 && occupancyData.toilet2 !== "9" ? green : red;
      t3Status =
        occupancyData.toilet3 && occupancyData.toilet3 !== "9"
          ? "Active"
          : "Inactive";
      t3Color =
        occupancyData.toilet3 && occupancyData.toilet3 !== "9" ? green : red;
    }

    return (
      <div style={{ height: "100%", paddingTop: "30px" }}>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={7}>
            <BoxCard>
              <Statistic
                style={{ marginLeft: "80px" }}
                value={"Toilet 1 Sensor"}
              />
              <br />
              {this.getStatistic("Status", t1Status, t1Color, "wifi")}
              <br />
              {this.getStatistic(
                "Last Checked Date",
                checkedDate,
                t1Color,
                "calendar"
              )}
              <br />
              {this.getStatistic(
                "Last Checked Time",
                checkedTime,
                t1Color,
                "clock-circle"
              )}
              <br />
              {this.getStatistic("Gender", "Women", t1Color, "woman")}
              {t1Color === green ? success : error}
            </BoxCard>
          </Col>
          <Col span={7}>
            <BoxCard>
              <Statistic
                style={{ marginLeft: "80px" }}
                value={"Toilet 2 Sensor"}
              />
              <br />
              {this.getStatistic("Status", t2Status, t2Color, "wifi")}
              <br />
              {this.getStatistic(
                "Last Checked Date",
                checkedDate,
                t2Color,
                "calendar"
              )}
              <br />
              {this.getStatistic(
                "Last Checked Time",
                checkedTime,
                t2Color,
                "clock-circle"
              )}
              <br />
              {this.getStatistic("Gender", "Women", t2Color, "woman")}
              {t2Color === green ? success : error}
            </BoxCard>
          </Col>
          <Col span={7}>
            <BoxCard>
              <Statistic
                style={{ marginLeft: "80px" }}
                value={"Toilet 3 Sensor"}
              />
              <br />
              {this.getStatistic("Status", t3Status, t3Color, "wifi")}
              <br />
              {this.getStatistic(
                "Last Checked Date",
                checkedDate,
                t3Color,
                "calendar"
              )}
              <br />
              {this.getStatistic(
                "Last Checked Time",
                checkedTime,
                t3Color,
                "clock-circle"
              )}
              <br />
              {this.getStatistic("Gender", "Women", t3Color, "woman")}
              {t3Color === green ? success : error}
            </BoxCard>
          </Col>
        </Row>
      </div>
    );
  }
}

SensorsPage.propTypes = {
  getOccupancyData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  queueData: state.queueData
});

const mapDispatchToProps = {
  getOccupancyData: getOccupancyData
};

export default connect(mapStateToProps, mapDispatchToProps)(SensorsPage);
