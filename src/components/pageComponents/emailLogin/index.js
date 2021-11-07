import React from "react";
import styled from "styled-components";

import AppText from "../../reusableComponents/AppText";
import EmailLoginForm from "./EmailLoginForm";

const index = () => {
  return (
    <Container>
      <AppText
        value="Enter your email to get started"
        weight="600"
        size="1.5rem"
        align="center"
      />
      <EmailLoginForm />
    </Container>
  );
};

export default index;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 12rem;
`;
