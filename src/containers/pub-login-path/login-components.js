import React from "react";
import { Form, Icon, Input, Button } from "antd";

const FormItem = Form.Item;

/* eslint react/prop-types: 0 */
export const UsernameInput = ({ decorator }) => (
  <FormItem>
    {decorator("username", {
      rules: [
        {
          required: true,
          message: "Please enter username!"
        }
      ]
    })(<Input prefix={<Icon type="user" />} placeholder="Username" />)}
  </FormItem>
);

export const PasswordInput = ({ decorator }) => (
  <FormItem>
    {decorator("password", {
      rules: [
        {
          required: true,
          message: "Please enter password!"
        }
      ]
    })(
      <Input
        prefix={<Icon type="lock" />}
        type="password"
        placeholder="Password"
      />
    )}
  </FormItem>
);

export const LoginButton = ({ loading }) => (
  <Button type="primary" htmlType="submit" loading={loading}>
    Login
  </Button>
);
