import { Layout } from "antd";
import styled from "styled-components";
import Logo from "../assets/logo.jpg";
import Background from "../assets/background.jpg";

export const ContentStyle = {
  backgroundImage: `url(${Background})`,
  backgroundSize: "100% auto",
  backgroundRepeat: "no-repeat"
};
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
  font-weight: bold;
  color: #ffffff;
  font-size: 28px;
  // letter-spacing: 0.1em;
  text-align: right;
  width: 100%;
`;
