import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Layout, Icon, Row, Col, Card, Avatar } from "antd";
import Grandma from "../assets/grandma.png";
import Grandpa from "../assets/grandpa.png";
import { femaleSvg, maleSvg } from "./toilets-icons";
import { getQueueData, getOccupancyData } from "../../reducers/led-reducer";
import { timer } from "../../props";

import { Footer, ContentStyle } from "../shared-styles/layout";
import { QueueTable, HeaderComp } from "./led-components";

const green = "#00A86B";
const red = "#e74f4e";
const grey = "#a9a9a9";

const { Content } = Layout;
const { Meta } = Card;
class QueuePage extends Component {
  componentDidMount() {
    const { getQueueData, getOccupancyData } = this.props;
    this.interval = setInterval(() => {
      getQueueData();
      getOccupancyData();
    }, timer);
  }

  addKeyToList = list => {
    const result = list.map((item, index) => {
      item.waitingtime = item.waitingtime.includes("mins")
        ? item.waitingtime
        : item.waitingtime + " mins";
      const obj = Object.assign({}, item);
      obj.key = index;
      return obj;
    });
    return result;
  };

  getIcon = (status, gender) => {
    // {"toilet2": "0", "toilet1": "9"} => 1 male, 2 female
    let color = grey;
    if (status === "0") color = green;
    if (status === "1") color = red;

    const icon =
      gender === "m" ? maleSvg(color, "7em") : femaleSvg(color, "7em");
    return icon;
  };

  render() {
    const {
      queueData: { queueData, occupancyData }
    } = this.props;

    const mclientsList =
      queueData && queueData[0]
        ? this.addKeyToList(Object.values(queueData[0]))
        : [];
    const fclientsList =
      queueData && queueData[1]
        ? this.addKeyToList(Object.values(queueData[1]))
        : [];

    return (
      <Layout style={{ minWidth: "1500px", height: "100vh" }}>
        <HeaderComp />
        <Content style={{ ...ContentStyle, padding: "0px 10px 0px 10px" }}>
          <Row gutter={10}>
            <Col span={12}>
              <Card style={{ minHeight: "34.5em" }}>
                <Meta
                  avatar={<Avatar size={70} src={Grandpa} shape="square" />}
                  title={false}
                  description={
                    <QueueTable
                      clientsList={mclientsList}
                      title="Queue for Male Toilet"
                    />
                  }
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card style={{ minHeight: "34.5em" }}>
                <Meta
                  avatar={<Avatar size={70} src={Grandma} shape="square" />}
                  title={false}
                  description={
                    <QueueTable
                      clientsList={fclientsList}
                      title="Queue for Female Toilet"
                    />
                  }
                />
              </Card>
            </Col>
          </Row>
          <Row gutter={10} style={{ marginTop: "10px" }}>
            <Col span={12}>
              <Card>
                <Row>
                  <Col key={0} style={{ textAlign: "center" }}>
                    <Icon
                      component={() =>
                        occupancyData ? this.getIcon("9", "m") : null
                      }
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Row>
                  <Col span={12} key={1} style={{ textAlign: "center" }}>
                    <Icon
                      component={() =>
                        occupancyData
                          ? this.getIcon(occupancyData.toilet1, "f")
                          : null
                      }
                    />
                  </Col>
                  <Col span={12} key={2} style={{ textAlign: "center" }}>
                    <Icon
                      component={() =>
                        occupancyData
                          ? this.getIcon(occupancyData.toilet2, "f")
                          : null
                      }
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ©2019 Created by Team QueueCumber
        </Footer>
      </Layout>
    );
  }
}

QueuePage.propTypes = {
  getQueueData: PropTypes.func.isRequired,
  getOccupancyData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  queueData: state.queueData,
  occupancyData: state.occupancyData
});

const mapDispatchToProps = {
  getQueueData: getQueueData,
  getOccupancyData: getOccupancyData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QueuePage);

// saved codes

// data return {"toilet2": "0", "toilet1": "9"}
// 1: occupied, 2: empty, 9: no signal
// if (occupancyData) {
//   mtoilet["toilet1"] = occupancyData[0].toilet1;
//   ftoilet["toilet2"] = occupancyData[0].toilet2;
//   Object.entries(occupancyData[0]).forEach(item => {
//     if (item[0] !== "toilet1") ftoilet[item[0]] = item[1];
//   });
// }

// {() => {
//   if (occupancyData) {
//     Object.values(occupancyData[0].toilet2).map(
//       (item, index) => {
//         const span =
//           24 / Object.values(occupancyData[0].toilet2).length;
//         const color = item === "0" ? green : red;
//         return (
//           <Col
//             key={index}
//             span={span}
//             style={{ textAlign: "center" }}
//           >
//             <Icon component={() => femaleSvg(color, "7em")} />
//           </Col>
//         );
//       }
//     );
//   }
// }}
