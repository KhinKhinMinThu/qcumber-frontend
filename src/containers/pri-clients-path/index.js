import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Avatar, Icon, Row, Col } from "antd";
import { ClientCard } from "../shared-styles/private-pages";
import ClientQueueChart from "./client-queue-component";
import Bubbleimage from "./test";
import GM1 from "../assets/gm1.jpg";
import GM2 from "../assets/gm2.jpg";
import GM3 from "../assets/gm3.jpg";
import GM4 from "../assets/gm4.jpg";
import GM5 from "../assets/gm5.jpg";
import GM6 from "../assets/gm6.jpg";

class ClientsPage extends Component {
  getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };
  prepareData = clientData => {
    const imgList = [GM1, GM2, GM3, GM4, GM5, GM6];
    const listData = [];
    if (clientData) {
      clientData.forEach(item => {
        const color = item.priority === "Yes" ? "#ff9900" : "#999999";
        listData.push({
          href: "http://ant.design",
          name: <span style={{ fontSize: 18 }}>{item.name}</span>,
          img: imgList[this.getRandomInt(6)],
          description: (
            <span>
              <Icon
                type="woman"
                style={{ marginLeft: 12, marginRight: 5, color: "#ff0066" }}
              />
              {item.gender}
              <Icon
                type="star"
                theme="twoTone"
                twoToneColor={color}
                style={{ marginLeft: 12, marginRight: 5 }}
              />
              {item.priority === "Yes" ? "Priority" : "No Priority"}
            </span>
          )
        });
      });
    }
    return listData;
  };
  render() {
    const {
      clientData: { clientData, clientQueueData }
    } = this.props;

    return (
      <div style={{ height: "100%", padding: "10px" }}>
        <ClientCard>
          <Row>
            <Col span={6}>
              <List
                itemLayout="horizontal"
                size="small"
                pagination={{
                  pageSize: 7,
                  size: "small"
                }}
                dataSource={this.prepareData(clientData)}
                renderItem={item => (
                  <List.Item key={item.name}>
                    <a href={item.href}>
                      <List.Item.Meta
                        avatar={<Avatar size={62} src={item.img} />}
                        title={item.name}
                        description={item.description}
                      />
                    </a>
                  </List.Item>
                )}
              />
            </Col>
            <Col span={18}>
              <Bubbleimage />
            </Col>
          </Row>
        </ClientCard>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clientData: state.clientData
});

export default connect(
  mapStateToProps,
  null
)(ClientsPage);
