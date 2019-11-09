import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row, Col, DatePicker, Statistic } from "antd";
import moment from "moment";
import { ChartCard } from "../shared-styles/private-pages";
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
    return (
      <div style={{ height: "100%", padding: "10px" }}>
        <ChartCard>
          Select Date:{" "}
          <DatePicker
            disabledDate={d =>
              !d || d.isAfter(maxDate) || d.isSameOrBefore(minDate)
            }
            format="YYYY-MM-DD"
            defaultValue={moment(defaultDate)}
            onChange={this.getToiletsData}
          />
          <Row>
            <Col span={12}>
              <OccupancyChartMins
                toilet1Data={toilet1Data}
                toilet2Data={toilet2Data}
                toilet3Data={toilet3Data}
              />
              <Statistic
                value={"Toilets Occupancy Data (" + selectedDdate + ")"}
              />
            </Col>
            <Col span={12}>
              <OccupancyChartPercent
                toilet1Data={toilet1Data}
                toilet2Data={toilet2Data}
                toilet3Data={toilet3Data}
              />
              <Statistic
                value={"Toilets Occupancy Rate (" + selectedDdate + ")"}
              />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToiletsPage);
