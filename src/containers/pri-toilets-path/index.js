import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Icon, Row, Col, Button, DatePicker } from "antd";
import { getOccupancyData } from "../../reducers/led-reducer";
import { timer_sensors } from "../../props";
import moment from "moment";
import { ChartCard } from "../shared-styles/private-pages";
import { postToiletsDate } from "../../reducers/toilets-reducer";

import OccupancyChartMins from "./occupancy-mins-component";
import OccupancyChartPercent from "./occupancy-percent-component";

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
    return (
      <div style={{ height: "100%", padding: "10px" }}>
        <ChartCard>
          <DatePicker
            disabledDate={d =>
              !d || d.isAfter(maxDate) || d.isSameOrBefore(minDate)
            }
            format="YYYY-MM-DD"
            defaultValue={moment()}
            onChange={this.getToiletsData}
          />
          <Row>
            <Col span={12}>
              <OccupancyChartMins datafrombk={null} />
            </Col>
            <Col span={12}>
              <OccupancyChartPercent datafrombk={null} />
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
