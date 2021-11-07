import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { FaWallet } from "react-icons/fa";

import colors from "../../../configs/colors";
import AppText from "../../reusableComponents/AppText";
import AppBtn from "../../reusableComponents/AppBtn";
import device from "../../../configs/mediaQueries";

const { mobile } = device;

const NoWallet = ({ setShowModal }) => {
  const history = useHistory();
  return (
    <Container>
      <Inner>
        <FaWallet color={colors.borderGrey2} size="4rem" />
        <AppText
          value="You have no Wallet yet"
          align="center"
          weight="600"
          size="22px"
          top="1rem"
          color={colors.borderGrey2}
        />
        <AppBtn
          text="Create Wallet"
          background={colors.primary}
          onClick={() => setShowModal(true)}
          width="65%"
          height="3.5rem"
          margin=".7rem 0"
        />
      </Inner>
    </Container>
  );
};

export default NoWallet;

const Container = styled.div`
  width: 100%;
  min-height: 7rem;
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  width: 40%;
  display: flex;
  min-height: 100%;
  background: ${colors.white};
  box-shadow: 8px 8px 64px 0 ${colors.shadow3};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  @media ${mobile} {
    width: 100%;
  }
`;
