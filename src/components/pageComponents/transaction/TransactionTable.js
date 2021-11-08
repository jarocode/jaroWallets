import React from "react";
import styled from "styled-components";
import { Table, Typography } from "antd";
import moment from "moment";

import AppText from "../../reusableComponents/AppText";
import AppBtn from "../../reusableComponents/AppBtn";
import colors from "../../../configs/colors";

const { Paragraph } = Typography;

const columns = [
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text) => <StatusText>{text}</StatusText>,
  },
  {
    title: "Wallet ID",
    dataIndex: "walletId",
    key: "walletId",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },

  {
    title: "DRCR",
    dataIndex: "drcr",
    key: "drcr",
  },
  {
    title: "Currency",
    dataIndex: "currency",
    key: "currency",
  },

  {
    title: "Date Created",
    key: "date",
    dataIndex: "date",
    render: (text) => <AppText value={text} />,
  },
];

const TransactionTable = ({ tableData, setShowModal }) => {
  //   const data = tableData.map((item) => {
  //     const { balance, created_at, customer_email, wallet_id, status, currency } =
  //       item;
  //     return {
  //       key: wallet_id,
  //       status: status,
  //       balance: `${currency === "NGN" ? "₦" : "$"}${balance}`,
  //       walletId: wallet_id,
  //       email: customer_email,
  //       date: moment(created_at).format("LL"),
  //     };
  //   });
  return (
    <Container>
      <Table columns={columns} dataSource={""} />
    </Container>
  );
};

export default TransactionTable;
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
const HeadDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Withdraw = styled.div`
  background: ${colors.white};
  border: 2px solid ${colors.primary};
  user-select: none;
  height: 50px;
  width: 180px;
  text-align: center;
  border-radius: 3px;
  padding-top: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
