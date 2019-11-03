import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Icon, Row, Col, Card, Statistic } from "antd";
import { setLoginData, setLogout } from "../../reducers/login-reducer";
import { admin_name, admin_password } from "../../props";
import { store } from "../../store";

import { LoginCard, LoginTitle } from "../shared-styles/login-page";
import {
  Header,
  Footer,
  HeaderText,
  LogoImage,
  ContentStyle
} from "../shared-styles/layout";
import { UsernameInput, PasswordInput } from "./sensors-components";

const { Content, Sider } = Layout;

class ToiletPage extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<Icon type="arrow-up" />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<Icon type="arrow-down" />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default connect()(ToiletPage);
