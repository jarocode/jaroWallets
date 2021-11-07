import React from "react";
import styled from "styled-components";
import { Tabs, Typography } from "antd";
import { useQuery } from "react-query";
import { useMediaQuery } from "react-responsive";

import DashboardLayout from "../../../layouts/dashboardLayout";
import colors from "../../../configs/colors";
import device from "../../../configs/mediaQueries";
import FundWalletForm from "./FundWalletForm";
import AppText from "../../reusableComponents/AppText";

const { mobile } = device;

const Index = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <DashboardLayout padding="3rem 3rem" background={colors.white}>
      <Container>
        <TitleDiv>
          <AppText
            value="Fund Your Wallet"
            weight="600"
            size="1.7rem"
            align="center"
          />
        </TitleDiv>
        <FundWalletForm />
      </Container>
    </DashboardLayout>
  );
};

export default Index;

const Container = styled.div``;
const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
`;
