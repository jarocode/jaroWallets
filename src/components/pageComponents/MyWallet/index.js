import React, { useState } from "react";
import styled from "styled-components";
import { Tabs, Typography } from "antd";
import { useQuery } from "react-query";
import { useMediaQuery } from "react-responsive";

import DashboardLayout from "../../../layouts/dashboardLayout";
import colors from "../../../configs/colors";
import WalletCard from "./WalletCard";
import NoWallet from "./NoWallet";
import device from "../../../configs/mediaQueries";
import CreateWalletModal from "./CreateWalletModal";

const { mobile } = device;

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <DashboardLayout
      padding="3rem 3rem"
      navGap="78rem"
      background={colors.white}
    >
      <Container>
        <CreateWalletModal showModal={showModal} setShowModal={setShowModal} />
        {/* <WalletCard /> */}
        <NoWallet setShowModal={setShowModal} />
      </Container>
    </DashboardLayout>
  );
};

export default Index;

const Container = styled.div``;
const Div = styled.div`
  background: ${colors.white};
  border-radius: 6px;
  min-height: 10rem;
  padding: 3rem;
  margin-top: 4rem;
  @media ${mobile} {
    padding: 0.8rem;
  }
`;
