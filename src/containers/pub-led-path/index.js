import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Layout, Icon, Row, Col, Card, Avatar } from "antd";
import Grandma from "../assets/grandma.png";
import Grandpa from "../assets/grandpa.png";
import { femaleSvg, maleSvg } from "./toilets-icons";
import { getQueueData, getOccupancyData } from "../../reducers/led-reducer";
import { timer } from "../../props";
import { QueueCard } from "../shared-styles/led-page";

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
    getQueueData();
    getOccupancyData();
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
      gender === "m" ? maleSvg(color, "6em") : femaleSvg(color, "6em");
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
        <Content style={{ ...ContentStyle, padding: "10px 10px 10px 0px" }}>
          <Row type="flex" justify="space-around" align="middle">
            <Col span={11}>
              <QueueCard>
                <div style={{ minHeight: "34.5em", width: "100%" }}>
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
                </div>
                <Icon
                  component={() =>
                    occupancyData ? this.getIcon("9", "m") : null
                  }
                />
                <Row>
                  <Col span={24}>Toilet 0</Col>
                </Row>
              </QueueCard>
            </Col>
            <Col span={11}>
              <QueueCard>
                <div style={{ minHeight: "34.5em", width: "100%" }}>
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
                </div>

                <Row>
                  <Col span={8} key={1}>
                    <Icon
                      component={() =>
                        occupancyData
                          ? this.getIcon(occupancyData.toilet1, "f")
                          : null
                      }
                    />
                  </Col>
                  <Col span={8} key={2}>
                    <Icon
                      component={() =>
                        occupancyData
                          ? this.getIcon(occupancyData.toilet2, "f")
                          : null
                      }
                    />
                  </Col>
                  <Col span={8} key={3}>
                    <Icon
                      component={() =>
                        occupancyData
                          ? this.getIcon(occupancyData.toilet3, "f")
                          : null
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col span={8}>Toilet 1</Col>
                  <Col span={8}>Toilet 2</Col>
                  <Col span={8}>Toilet 3</Col>
                </Row>
              </QueueCard>
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
  queueData: state.queueData
});

const mapDispatchToProps = {
  getQueueData: getQueueData,
  getOccupancyData: getOccupancyData
};

export default connect(mapStateToProps, mapDispatchToProps)(QueuePage);

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
