import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { Form, Layout, Icon, Menu, Modal } from "antd";
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
import { UsernameInput, PasswordInput } from "./login-components";

const { Content, Sider } = Layout;

class ToiletPage extends Component {
  render() {
    return <div>clients</div>;
  }
}

export default connect()(ToiletPage);
