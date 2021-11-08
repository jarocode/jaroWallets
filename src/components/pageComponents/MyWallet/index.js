import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Tabs, Typography } from "antd";
import { useQuery } from "react-query";
import { useMediaQuery } from "react-responsive";

import DashboardLayout from "../../../layouts/dashboardLayout";
import colors from "../../../configs/colors";
import WalletCard from "./WalletCard";
import NoWallet from "./NoWallet";
import { getWallet } from "../../../apis/queries/wallets";
import device from "../../../configs/mediaQueries";
import CreateWalletModal from "./CreateWalletModal";
import WalletTable from "./WalletTable";

const { mobile } = device;

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [tableData, setTableData] = useState();
  const { data, isLoading } = useQuery(["getWallet"], getWallet);
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  console.log("wallet", data);

  useEffect(() => {
    if (data?.data) setTableData(data?.data);
  }, [data?.data]);

  return (
    <DashboardLayout
      padding="3rem 3rem"
      navGap="78rem"
      background={colors.white}
    >
      <Container>
        <CreateWalletModal showModal={showModal} setShowModal={setShowModal} />
        {tableData && (
          <WalletTable tableData={tableData} setShowModal={setShowModal} />
        )}
        {!tableData && !isLoading && <NoWallet setShowModal={setShowModal} />}
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
