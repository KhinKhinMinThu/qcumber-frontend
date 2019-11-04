import React, { Component } from "react";
import { connect } from "react-redux";
import { LED, DEFAULT } from "../assets/urls";
import LoginPage from "../pub-login-path";
import LedPage from "../pub-led-path";

class PublicPage extends Component {
  // direct urls (e.g., type localhost:3000/dashboard and enter)
  switchPage = (pathname, id) => {
    if (pathname === DEFAULT) return LoginPage;
    if (pathname === LED) return LedPage;
  };

  render() {
    const {
      // location: { pathname },
      computedMatch: { params }
    } = this.props;
    const { pathname, id } = params;
    const path = pathname ? "/".concat(pathname) : DEFAULT;
    const Page = this.switchPage(path, id);
    return <Page {...this.props} />;
  }
}

export default connect()(PublicPage);
