import React, { Component } from "react";
import { connect } from "react-redux";
import {
  List,
  Avatar,
  Icon,
  Row,
  Col,
  Statistic,
  Button,
  Modal,
  Tabs
} from "antd";
import { ClientCard } from "../shared-styles/private-pages";
import {
  postClientData,
  postClientQueueData
} from "../../reducers/clients-reducer";
import ClientQueueChart from "./client-queue-component";
import ClientToiletUsage from "./client-usage-component";
import ClientToiletAverage from "./client-average-component";
const { TabPane } = Tabs;
class ClientsPage extends Component {
  state = { visible: false, selectedName: null };
  componentDidMount() {
    const { postClientData, postClientQueueData } = this.props;
    postClientData();
    postClientQueueData();
  }
  showClientDetail = name => {
    this.setState({
      visible: true,
      selectedName: name
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };
  prepareData = clientData => {
    const listData = [];
    if (clientData) {
      clientData.forEach(item => {
        const color = item.priority === "Yes" ? "#ff9900" : "#999999";
        listData.push({
          alias: item.name,
          name: <span style={{ fontSize: 18 }}>{item.name}</span>,
          img: item.img,
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
    const { selectedName } = this.state;

    return (
      <div style={{ height: "100%", padding: "10px" }}>
        <ClientCard>
          <Row>
            <Col span={5}>
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
                    <List.Item.Meta
                      avatar={<Avatar size={62} src={item.img} />}
                      title={
                        <Button
                          type="link"
                          onClick={() => this.showClientDetail(item.alias)}
                        >
                          {item.name}
                        </Button>
                      }
                      description={item.description}
                    />
                  </List.Item>
                )}
              />
              <Modal
                title={selectedName + " (2019-11-08)"}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                  <Button
                    type="primary"
                    key="close"
                    onClick={this.handleCancel}
                  >
                    Close
                  </Button>
                ]}
              >
                <ClientToiletUsage
                  clientQueueData={clientQueueData}
                  selectedName={selectedName}
                />
              </Modal>
            </Col>
            <Col span={19}>
              <Tabs defaultActiveKey="1">
                <TabPane
                  tab={
                    <span>
                      <Icon type="dot-chart" />
                      Overall Usuage
                    </span>
                  }
                  key="1"
                >
                  <ClientQueueChart clientQueueData={clientQueueData} />
                  <div style={{ textAlign: "center", width: "100%" }}>
                    <Statistic value={"Clients Toilet Usuage (2019-11-08)"} />
                  </div>
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <Icon type="bar-chart" />
                      Average Time
                    </span>
                  }
                  key="2"
                >
                  <ClientToiletAverage clientQueueData={clientQueueData} />
                  <div style={{ textAlign: "center", width: "100%" }}>
                    <Statistic
                      value={"Clients Averge Time Spent in Toilet (2019-11-08)"}
                    />
                  </div>
                </TabPane>
              </Tabs>
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

const mapDispatchToProps = {
  postClientData: postClientData,
  postClientQueueData: postClientQueueData
};
export default connect(mapStateToProps, mapDispatchToProps)(ClientsPage);
