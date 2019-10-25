import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router";
import { DEFAULT } from "../assets/urls";
import PrivatePage from "./private-page";

/* eslint react/prop-types: 0 */
const PrivatePath = ({ isLoggedIn, ...props }) => {
  console.log("......................", isLoggedIn);
  return isLoggedIn ? (
    <Route {...props} render={() => <PrivatePage {...props} />} />
  ) : (
    <Redirect to={DEFAULT} />
  );
};

const mapStateToProps = state => {
  const { isLoggedIn } = state.loginData;
  return { isLoggedIn };
};

export default connect(mapStateToProps)(PrivatePath);
