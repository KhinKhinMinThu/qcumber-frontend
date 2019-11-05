import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { TOILETS, CLIENTS, SENSORS, LOGOUT, LED } from "../assets/urls";
import { toiletSvg, oldSvg, sensorsSvg, logoutSvg } from "./menu-icons";
import { Layout, Icon, Menu } from "antd";
import {
  Header,
  Footer,
  HeaderText,
  LogoImage,
  ContentStyle
} from "../shared-styles/layout";
import { setLogout } from "../../reducers/login-reducer";
import ToiletsPage from "../pri-toilets-path";
import ClientsPage from "../pri-clients-path";
import SensorsPage from "../pri-sensors_path";

const { Content, Sider } = Layout;

class PrivatePage extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  // direct urls (e.g., type localhost:3000/dashboard and enter)
  switchPage = pathname => {
    if (pathname === TOILETS) return ToiletsPage;
    if (pathname === CLIENTS) return ClientsPage;
    if (pathname === SENSORS) return SensorsPage;
    // return ErrorPage;
  };

  onClick = e => {
    const { performLogout } = this.props;

    if (e.key === LOGOUT) {
      performLogout();
      localStorage.clear();
      console.log("cleared local storage");
    }
  };
  render() {
    const {
      computedMatch: { params }
    } = this.props;
    const { pathname } = params;
    const path = "/qc/".concat(pathname); // `/${pathname}`;
    const Page = this.switchPage(path);

    return (
      <div>
        <Layout style={{ minWidth: "1500px", height: "100vh" }}>
          <Header>
            <Link to={LED}>
              <LogoImage />
            </Link>
            <HeaderText>
              QUEUE-CUMBER{" "}
              <Icon type="smile" theme="twoTone" twoToneColor="#9F0468" />
            </HeaderText>
          </Header>
          <Layout style={{ minWidth: "1500px" }}>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
            >
              <div className="logo" />
              <Menu
                onClick={this.onClick}
                theme="dark"
                defaultSelectedKeys={[TOILETS]}
                selectedKeys={["/qc/".concat(pathname)]}
                mode="inline"
              >
                <Menu.Item key={TOILETS}>
                  <Link to={TOILETS} />
                  <Icon component={toiletSvg} />
                  <span>Toilet Occupancy</span>
                </Menu.Item>
                <Menu.Item key={CLIENTS}>
                  <Link to={CLIENTS} />
                  <Icon component={oldSvg} />
                  <span>Client Data</span>
                </Menu.Item>
                <Menu.Item key={SENSORS}>
                  <Link to={SENSORS} />
                  <Icon component={sensorsSvg} />
                  <span>Sensor Nodes</span>
                </Menu.Item>
                <Menu.Item key={LOGOUT}>
                  <Icon component={logoutSvg} />
                  <span>Log Out</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Content style={{ ...ContentStyle }}>
                <Page {...this.props} />
              </Content>
              <Footer style={{ textAlign: "center" }}>
                ©2019 Created by Team QueueCumber
              </Footer>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   queueData: state.queueData
// });

const mapDispatchToProps = {
  performLogout: setLogout
};

export default connect(
  null,
  mapDispatchToProps
)(PrivatePage);
