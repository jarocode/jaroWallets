import React from "react";
import styled from "styled-components";

import Header from "./Header";

const index = ({
  children,
  background,
  marginTop,
  userData = null,
  navGap,
}) => {
  return (
    <Container background={background}>
      <Header userData={userData} navGap={navGap} />
      {children}
    </Container>
  );
};

export default index;

const Container = styled.div`
  background: ${(props) => props.background};
`;
