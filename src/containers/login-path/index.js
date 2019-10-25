import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { Form, Layout, Icon, Button, Modal } from "antd";
import { setLoginData, setLogout } from "../../reducers/login-reducer";
import { admin_name, admin_password } from "../../props";
import { store } from "../../store";
import { TOILETS } from "../assets/urls";

import { LoginCard, LoginTitle } from "../shared-styles/login-page";
import {
  Header,
  Footer,
  HeaderText,
  LogoImage,
  ContentStyle
} from "../shared-styles/layout";
import { UsernameInput, PasswordInput } from "./login-components";

const { Content } = Layout;

class LoginPage extends Component {
  onSubmit = e => {
    e.preventDefault();
    const {
      form: { validateFields },
      performLogin
    } = this.props;
    validateFields((err, values) => {
      if (!err) {
        const { username, password } = values;
        if (username === admin_name && password === admin_password) {
          performLogin({ isLoggedIn: true });
          store.dispatch(push(TOILETS));
        } else {
          Modal.error({
            title: "Login Error!",
            content: "Wrong username and/or password!"
          });
        }
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator }
    } = this.props;
    return (
      <Layout style={{ minWidth: "1500px", height: "100vh" }}>
        <Header>
          <LogoImage />
          <HeaderText>
            QUEUE-CUMBER{" "}
            <Icon type="smile" theme="twoTone" twoToneColor="#9F0468" />
          </HeaderText>
        </Header>
        <Content style={{ ...ContentStyle }}>
          <LoginCard>
            <Form onSubmit={this.onSubmit}>
              <LoginTitle>Welcome to QueueCumber!</LoginTitle>

              <UsernameInput decorator={getFieldDecorator} />
              <PasswordInput decorator={getFieldDecorator} />
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form>
          </LoginCard>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ©2019 Created by Team QueueCumber
        </Footer>
      </Layout>
    );
  }
}

LoginPage.propTypes = {
  form: PropTypes.shape({}).isRequired,
  performLogin: PropTypes.func.isRequired,
  dispatchLogout: PropTypes.func.isRequired,
  loginData: PropTypes.shape({}).isRequired
};

const mapStateToProps = state => ({
  loginData: state.loginData
});

const mapDispatchToProps = {
  performLogin: setLoginData,
  dispatchLogout: setLogout
};

const FormLoginPage = Form.create()(LoginPage);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormLoginPage);
