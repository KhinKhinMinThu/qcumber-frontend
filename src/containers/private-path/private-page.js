import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { TOILETS, CLIENTS, LOGOUT } from "../assets/urls";
import { Layout, Icon, Menu } from "antd";
import {
  Header,
  Footer,
  HeaderText,
  LogoImage,
  ContentStyle
} from "../shared-styles/layout";
import { setLogout } from "../../reducers/login-reducer";
import ToiletsPage from "../toilets-path";
import ClientsPage from "../clients-path";

const { Content, Sider } = Layout;

const toiletSvg = () => (
  <svg width="20" height="20" viewBox="0 0 1024 1024">
    <path
      d="M864 96c17.6 0 32-14.4 32-32V32c0-17.6-14.4-32-32-32H160C142.4 0 128 14.4 128 32v32c0 17.6 14.4 32 32 32h32v313.4C151.6 429.6 128 453.8 128 480c0 134.4 69.2 252.4 173.6 321l-42.8 140.4C246.2 982.4 277 1024 320 1024h384c43 0 73.8-41.6 61.2-82.6l-42.8-140.4C826.8 732.4 896 614.4 896 480c0-26.2-23.6-50.4-64-70.6V96h32zM288 144c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H304c-8.8 0-16-7.2-16-16V144z m224 400c-154.2 0-279.2-28.6-279.2-64s125-64 279.2-64 279.2 28.6 279.2 64-125 64-279.2 64z"
      p-id="2317"
      fill="#ffffff"
    />
  </svg>
);

const oldSvg = () => (
  <svg width="20" height="20" viewBox="0 0 1024 1024">
    <path
      d="M797.024 659.296c-16 0-30.88 3.168-44.64 9.024-1.12-1.024-1.568-2.144-2.688-3.168l-283.808-282.24a73.728 73.728 0 0 0-71.808-18.592l-0.576-0.576c-0.576 0.576-1.568 0.576-2.144 1.024a70.4 70.4 0 0 0-26.112 14.4l0.096-0.064c-174.368 104.832-293.952 357.312-293.952 566.272 0 29.184-4.288 43.04 0 71.232h546.56V741.12l27.168 27.168c4.736 4.736 9.568 8.448 14.88 11.712a52.544 52.544 0 0 0 103.712 5.408h1.024v-10.72a31.36 31.36 0 0 1 62.656 0v241.888h83.968v-241.888c1.12-63.808-50.496-115.424-114.304-115.424z m156.32-516.224c-4.288-16.448-56.928-38.336-73.376-34.048l-10.144 2.688-49.92-56.352c-5.312-5.856-31.904-32.896-52.064-44.64-28.736-16.448-251.456 30.88-280.224 74.944-12.16 19.168-17.472 41.472-20.16 52.064l-17.6 86.688-10.144 2.592c-16.448 4.288-51.072 49.472-46.784 65.92a30.368 30.368 0 0 0 14.4 18.848l0.16 0.064a31.104 31.104 0 0 0 24 2.784l-0.224 0.064 66.944-17.568a183.68 183.68 0 0 0 180.8 149.344c101.568 0 183.936-81.824 183.936-182.944 0-21.312-3.712-41.92-10.592-61.088l78.688-21.312c16.992-4.608 27.04-21.632 22.304-38.08z m-139.296-94.56l5.856 6.88c2.144 2.688 1.024 1.12-5.856-6.88z"
      p-id="5813"
      fill="#ffffff"
    />
  </svg>
);

const logoutSvg = () => (
  <svg width="20" height="20" viewBox="0 0 1024 1024">
    <path
      d="M532.3 676.3H498c-83.7 0-151.6-73.5-151.6-164.3 0-90.7 67.9-164.3 151.6-164.3h38.6c28.3 0 51.2-22.9 51.2-51.2v-49.1c0-65.7-49.6-119.5-110.3-119.5H174.3C113.6 128 64 181.8 64 247.5v529.1C64 842.2 113.6 896 174.3 896h303.3c60.6 0 110.3-53.8 110.3-119.5v-44.7c-0.1-30.7-24.9-55.5-55.6-55.5z"
      p-id="8401"
      fill="#ffffff"
    ></path>
    <path
      d="M960 511.8c0-16-5.9-30.6-15.5-41.8-1.2-1.5-2.5-2.9-3.9-4.3L744.7 270.9c-20.1-19.9-52.5-19.9-72.5 0l-0.3 0.3c-19.8 19.9-19.6 52.1 0.3 71.8l70.8 70.4c12.7 12.6 3.7 34.2-14.1 34.2H512.2c-35.4 0-64.2 28.7-64.2 64.2v0.4c0 35.4 28.7 64.2 64.2 64.2h216.7c17.9 0 26.8 21.6 14.1 34.2 0 0-73.7 70.9-74.6 71.8-19.1 20.6-16.8 51.5 3.8 70.6 20.1 19.9 52.5 19.9 72.5 0l195.8-194.7 0.3-0.3c1.3-1.3 2.5-2.6 3.6-4 9.7-11.2 15.5-25.8 15.5-41.8v-0.4h0.1z"
      p-id="8402"
      fill="#ffffff"
    />
  </svg>
);

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
      <Layout style={{ minWidth: "1500px", height: "100vh" }}>
        <Header>
          <LogoImage />
          <HeaderText>
            QUEUE-CUMBER{" "}
            <Icon type="smile" theme="twoTone" twoToneColor="#9F0468" />
          </HeaderText>
        </Header>
        <Layout>
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
              <Menu.Item key={LOGOUT}>
                <Icon component={logoutSvg} />
                <span>Log Out</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ ...ContentStyle }}>
            <Page {...this.props} />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            ©2019 Created by Team QueueCumber
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  performLogout: setLogout
};

export default connect(
  null,
  mapDispatchToProps
)(PrivatePage);
