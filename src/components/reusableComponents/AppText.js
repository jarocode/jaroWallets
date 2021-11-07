import React from "react";
import styled from "styled-components";
import { Typography, Row, Col } from "antd";

import colors from "../../configs/colors";

const { Paragraph } = Typography;

const AppText = ({
  size,
  color,
  weight,
  bottom,
  top,
  align,
  pointer,
  decoration,
  value,
  icon,
  left,
  onClick,
  style,
  iconSuffix,
}) => {
  return (
    <P
      size={size}
      color={color}
      weight={weight}
      bottom={bottom}
      top={top}
      left={left}
      align={align}
      pointer={pointer}
      decoration={decoration}
      onClick={onClick}
      style={style}
    >
      <Row>
        {icon && (
          <Col>
            <span style={{ marginTop: "3px", display: "block" }}>{icon}</span>
          </Col>
        )}
        {value && (
          <Col>
            <span style={{ display: "block", align }}>{value}</span>
          </Col>
        )}
        {iconSuffix && (
          <Col>
            <span style={{ marginTop: "3px", display: "block" }}>
              {iconSuffix}
            </span>
          </Col>
        )}
      </Row>
    </P>
  );
};

export default AppText;

const P = styled(Paragraph)`
  font-size: ${({ size }) => (size ? size : "14px")};
  color: ${({ color }) => (color ? color : colors.textGrey)};
  font-weight: ${({ weight }) => (weight ? weight : "normal")};
  margin-bottom: ${({ bottom }) => bottom}!important;
  margin-top: ${({ top }) => top}!important;
  margin-left: ${({ left }) => left}!important;
  text-align: ${({ align }) => align};
  cursor: ${({ pointer }) => pointer && "pointer"};
  text-decoration: ${({ decoration }) => decoration};
`;
