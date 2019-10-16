import { Layout } from "antd";
import styled from "styled-components";
import Logo from "../assets/logo.jpg";
import Grandma from "../assets/grandma.png";

// purple: 9F0468
// orange: f36408 rgb(243, 100, 8)
// darkgrey: 282828 rgb(159, 4, 104)

export const Header = styled(Layout.Header)`
  height: 4em;
  background: linear-gradient(
    to right,
    rgb(255, 255, 255),
    rgb(255, 255, 255),
    rgb(243, 100, 8, 1),
    rgb(159, 4, 104, 2)
  );
  border-bottom: 4px solid #9f0468;
  display: flex;
  justify-content: flex-start;
  align-items: right;
  margin-left: -35px;
`;

// export const Footer = styled(Layout.Footer)`
//   height: 1em;
//   padding-top: 4px;
//   position: absolute;
//   bottom: 0em;
//   width: 100%;

//   background-color: #282828;
//   font-family: psrFont;
//   color: #ffffff;
// `;

export const Footer = styled.div`
  height: 2em;
  padding-top: 3px;
  background-color: #282828;
  font-family: psrFont;
  color: #ffffff;
  width: 100%;
`;

export const LogoImage = styled.img.attrs({
  src: Logo
})`
  display: block;
  max-height: 2.5em;
  width: auto;
  height: auto;
  margin-top: 0.5em;
`;

export const HeaderText = styled.div`
  font-family: psrFont;
  font-weight: bold;
  color: #ffffff;
  font-size: 28px;
  // letter-spacing: 0.1em;
  text-align: right;
  width: 100%;
`;

export const GrandmaImage = styled.img.attrs({
  src: Grandma
})`
  display: block;
  max-height: 3.5em;
  width: auto;
  height: auto;
  margin-top: 0.5em;
`;

export const QueueTitleText = styled.div`
  font-family: psrFont;
  font-weight: bold;
  font-size: 18px;
  width: 100%;
`;
