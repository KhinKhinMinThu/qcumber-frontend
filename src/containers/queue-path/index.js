import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Layout, Icon, Row, Col, Card, Avatar } from "antd";
import Grandma from "../assets/grandma.png";
import Grandpa from "../assets/grandpa.png";
import { getQueueData, getOccupancyData } from "../../reducers/queue-reducer";
import { timer } from "../../props";
import Clock from "react-digital-clock";

import {
  Header,
  Footer,
  HeaderText,
  LogoImage
} from "../shared-styles/page-layout";
import { QueueTable } from "./components";

const maleSvg = (fill, size) => (
  <svg width={size} height={size} fill={fill} viewBox="0 0 1024 1024">
    <path
      d="M760.76896 402.272l0 237.728q0 22.848-16 38.848t-38.848 16-38.848-16-16-38.848l0-201.152-36.576 0 0 521.152q0 26.272-18.848 45.152t-45.152 18.848-45.152-18.848-18.848-45.152l0-265.152-36.576 0 0 265.152q0 26.272-18.848 45.152t-45.152 18.848-45.152-18.848-18.848-45.152l0-521.152-36.576 0 0 201.152q0 22.848-16 38.848t-38.848 16-38.848-16-16-38.848l0-237.728q0-45.728 32-77.728t77.728-32l365.728 0q45.728 0 77.728 32t32 77.728zM596.19296 146.272q0 53.152-37.44 90.56t-90.56 37.44-90.56-37.44-37.44-90.56 37.44-90.56 90.56-37.44 90.56 37.44 37.44 90.56z"
      p-id="1194"
    />
  </svg>
);

const femaleSvg = (fill, size) => (
  <svg width={size} height={size} fill={fill} viewBox="0 0 1024 1024">
    <path
      d="M878.156434 603.428571a54.857143 54.857143 0 0 1-100.571428 30.281143L647.866149 438.857143H622.156434v75.446857l141.129143 234.861714A36.827429 36.827429 0 0 1 731.87072 804.608h-109.714286v155.428571c0 35.437714-28.562286 64-64 64h-91.428571c-34.852571 0-64-28.562286-64-64v-155.428571H293.013577a36.827429 36.827429 0 0 1-31.414857-55.442286L402.727863 514.304V438.857143h-25.709714L247.299291 633.709714a54.857143 54.857143 0 1 1-91.428571-60.562285l146.285714-219.428572C325.013577 320 360.451291 292.571429 402.727863 292.571429h219.428571c42.276571 0 77.714286 27.428571 100.571429 61.147428l146.285714 219.428572c5.705143 8.557714 9.142857 19.419429 9.142857 30.281142zM640.442149 146.285714c0 70.838857-57.161143 128-128 128S384.442149 217.124571 384.442149 146.285714 441.603291 18.285714 512.442149 18.285714s128 57.161143 128 128z"
      p-id="2618"
    />
  </svg>
);
const green = "#00A86B";
const red = "#e74f4e";

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
  render() {
    const {
      queueData: { queueData, occupancyData }
    } = this.props;

    let mclientsList = [],
      fclientsList = [];
    if (queueData) {
      const mObj = queueData[0];
      const fObj = queueData[1];
      if (mObj) {
        mclientsList = this.addKeyToList(Object.values(mObj));
      }
      if (fObj) {
        fclientsList = this.addKeyToList(Object.values(fObj));
      }
    }

    const mtoilet = {},
      ftoilet = {};
    if (occupancyData) {
      mtoilet["toilet1"] = occupancyData.toilet1;
      Object.entries(occupancyData).forEach(item => {
        if (item[0] !== "toilet1") ftoilet[item[0]] = item[1];
      });
    }

    return (
      <Layout style={{ minWidth: "1500px", height: "100vh" }}>
        <Header>
          <LogoImage />
          <HeaderText>
            TOILET QUEUE STATUS{" "}
            <Icon type="smile" theme="twoTone" twoToneColor="#9F0468" />
          </HeaderText>
        </Header>
        <Content>
          <div
            style={{
              background: "#ffffff",
              padding: "0px 10px 0px 10px"
            }}
          >
            <div
              style={{
                width: "100%",
                backgroundColor: "#355667",
                fontFamily: "psrFont",
                fontWeight: "bold"
              }}
            >
              <Clock />
            </div>
            <Row>
              <Col span={12}>
                <Card style={{ height: "34.5em" }}>
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
                <Card style={{ height: "34.5em" }}>
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
            <Row>
              <Col span={12}>
                <Card>
                  <Row>
                    {Object.values(mtoilet).map((item, index) => {
                      const span = 24 / Object.values(mtoilet).length;
                      const color = item === "0" ? green : red;
                      return (
                        <Col key={index} span={span}>
                          <Icon component={() => maleSvg(color, "8em")} />
                        </Col>
                      );
                    })}
                  </Row>
                </Card>
              </Col>
              <Col span={12}>
                <Card>
                  <Row>
                    {Object.values(ftoilet).map((item, index) => {
                      const span = 24 / Object.values(ftoilet).length;
                      const color = item === "0" ? green : red;
                      return (
                        <Col key={index} span={span}>
                          <Icon component={() => femaleSvg(color, "8em")} />
                        </Col>
                      );
                    })}
                  </Row>
                </Card>
              </Col>
            </Row>
          </div>
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
  // occupancyData: PropTypes.shape({}).isRequired,
  // queueData: PropTypes.shape({}).isRequired
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
