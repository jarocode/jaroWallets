import React, { useState } from "react";
import styled from "styled-components";
import { Form, Select, Input, message } from "antd";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";

import colors from "../../../configs/colors";
import AppBtn from "../../reusableComponents/AppBtn";
import AppText from "../../reusableComponents/AppText";
import { fundWallet } from "../../../apis/mutations/wallet";

const FundWalletForm = () => {
  const [loading, setloading] = useState();
  const { walletId } = useSelector((state) => state.wallet);
  const [fundWalletMutate] = useMutation(fundWallet, {
    onMutate: () => null,
    onSuccess: (data) => {
      setloading(false);
      message.success(data.message);
    },
    onError: (error) => {
      setloading(false);
      message.error("something went wrong");
      console.log(error);
    },
  });
  const onFinish = (formDetails) => {
    fundWalletMutate(formDetails);
  };
  return (
    <Container>
      <Form layout="vertical" onFinish={onFinish}>
        <FormItem
          label={
            <AppText
              value="Currency"
              weight="600"
              size="1.3em"
              top="0"
              bottom="0"
            />
          }
          initialValue="NGN"
          name="currency"
          rules={[
            {
              required: true,
              message: "Currency is required",
            },
          ]}
        >
          <Select defaultValue="NGN" style={{ height: "3rem" }}>
            <Select.Option value="NGN">NGN</Select.Option>
            <Select.Option value="USD">USD</Select.Option>
          </Select>
        </FormItem>
        <FormItem
          label={
            <AppText
              value="Wallet ID"
              weight="600"
              size="1.3em"
              top="0"
              bottom="0"
            />
          }
          name="wallet_id"
          initialValue={walletId}
          rules={[
            {
              required: true,
              message: "wallet id is required",
            },
          ]}
        >
          <Input placeholder="Enter text" style={{ height: "3rem" }} />
        </FormItem>
        <FormItem
          label={
            <AppText
              value="Amount"
              weight="600"
              size="1.3em"
              top="0"
              bottom="0"
            />
          }
          name="amount"
          rules={[
            {
              required: true,
              message: "Amount is required",
            },
          ]}
        >
          <Input placeholder="Enter text" style={{ height: "3rem" }} />
        </FormItem>
        <FormItem>
          <AppBtn text="Fund Wallet" htmlType="Submit" height="3.5rem" />
        </FormItem>
      </Form>
    </Container>
  );
};

export default FundWalletForm;

const Container = styled.div`
  min-height: 10rem;
  width: 55%;
  padding: 1rem 2rem;
  margin: auto;
  box-shadow: 8px 8px 64px 0 ${colors.shadow3};
  background: ${colors.white};
`;

const FormItem = styled(Form.Item)``;
