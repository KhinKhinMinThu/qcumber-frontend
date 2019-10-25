import styled from "styled-components";
import Grandma from "../assets/grandma.png";

// purple: 9F0468
// orange: f36408 rgb(243, 100, 8)
// darkgrey: 282828 rgb(159, 4, 104)

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
  font-weight: bold;
  font-size: 18px;
  width: 100%;
`;
