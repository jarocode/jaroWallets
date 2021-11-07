import React from "react";
import styled from "styled-components";

import colors from "../../configs/colors";
import AppText from "../../components/reusableComponents/AppText";
import AppBtn from "../../components/reusableComponents/AppBtn";

const Header = () => {
  return (
    <Container>
      <LogoDiv>
        <AppText
          value={
            <span>
              Jaro<Span>Wallets</Span>
            </span>
          }
          weight="bold"
          size="1.7em"
          top="0"
          bottom="0"
        />
      </LogoDiv>
      <NavDiv>
        <AppBtn text="Log In" />
      </NavDiv>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: sticky;
  min-height: 5rem;
  z-index: 1000;
  top: 0;
  padding: 1rem 3rem;
  background: ${colors.white}!important;
  display: flex;
  justify-content: space-between;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 8px 0px !important;
`;

const LogoDiv = styled.div``;
const NavDiv = styled.div``;

const Span = styled.span`
  color: ${colors.primary};
`;
