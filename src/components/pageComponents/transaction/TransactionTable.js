import React, { useState } from "react";
import styled from "styled-components";
import { Table, Typography } from "antd";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import moment from "moment";

import AppText from "../../reusableComponents/AppText";
import AppBtn from "../../reusableComponents/AppBtn";
import { changeWalletId } from "../../../store/actions/wallet";
import { fundWallet } from "../../../userRoutes";
import colors from "../../../configs/colors";

const { Paragraph } = Typography;

const WalletTable = ({ tableData, setShowModal }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = (id) => {
    setLoading(true);
    dispatch(changeWalletId(id));
    setTimeout(() => {
      history.push(fundWallet);
    }, 2000);
  };

  const columns = [
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => <StatusText>{text}</StatusText>,
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
    },
    {
      title: "Wallet ID",
      dataIndex: "walletId",
      key: "walletId",
    },
    {
      title: "Customer Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Date Created",
      key: "date",
      dataIndex: "date",
      render: (text) => <AppText value={text} />,
    },
  ];
  const data = tableData?.map((item) => {
    const { balance, created_at, customer_email, wallet_id, status, currency } =
      item;
    return {
      key: wallet_id,
      status: status,
      balance: `${currency === "NGN" ? "₦" : "$"}${balance}`,
      walletId: wallet_id,
      email: customer_email,
      date: moment(created_at).format("LL"),
    };
  });
  return (
    <Container>
      <Table columns={columns} dataSource={data} />
    </Container>
  );
};

export default WalletTable;
const Container = styled.div``;

const StatusText = styled(Paragraph)`
  color: ${colors.white};
  background: #0f0;
  text-align: center;
  font-weight: bold;
  padding: 0.5rem 0.5rem !important;
  border-radius: 4px;
  margin-top: 1rem;
`;
