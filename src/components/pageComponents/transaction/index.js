import React from "react";
import styled from "styled-components";
import { Tabs, Typography } from "antd";
import { useQuery } from "react-query";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";

import DashboardLayout from "../../../layouts/dashboardLayout";
import colors from "../../../configs/colors";
import device from "../../../configs/mediaQueries";
import AppText from "../../reusableComponents/AppText";
import { getTransactions } from "../../../apis/queries/transaction";
import TransactionTable from "./TransactionTable";

const { mobile } = device;

const Index = () => {
  const { walletId } = useSelector((state) => state.wallet);
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const { data, isLoading } = useQuery(
    ["getTransactions", walletId],
    getTransactions
  );
  console.log("transactions", data);
  return (
    <DashboardLayout
      padding="3rem 3rem"
      background={colors.white}
      navGap="78rem"
    >
      <Container>
        <AppText
          value="Transaction Details"
          size="24px"
          weight="700"
          color="#000"
          top="1rem"
          bottom="2rem"
        />
        <TransactionTable />
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
