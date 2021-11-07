import React from "react";
import styled from "styled-components";
import { Button } from "antd";

import colors from "../../configs/colors";

const AppBtn = ({
  display = "block",
  border = "none",
  weight = "600",
  width = "100%",
  shadow = true,
  background = colors.primary,
  color = colors.white,
  height = "2rem",
  radius = "5px",
  margin,
  htmlType,
  loading,
  onClick,
  text,
}) => {
  return (
    <Btn
      display={display}
      background={background}
      weight={weight}
      width={width}
      border={border}
      shadow={shadow}
      color={color}
      height={height}
      radius={radius}
      loading={loading}
      htmlType={htmlType}
      onClick={onClick}
      margin={margin}
    >
      {text}
    </Btn>
  );
};

export default AppBtn;

const Btn = styled(Button)`
  display: ${({ display }) => display};
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  border: ${({ border }) => border};
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  font-weight: ${({ weight }) => weight};
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => radius};
  box-shadow: ${(shadow) => shadow && ` 0px 12px 35px 0px ${colors.shadow}`};
`;
