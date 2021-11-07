import React from "react";
import styled from "styled-components";
import { Form, Select, Input } from "antd";

import colors from "../../../configs/colors";
import AppBtn from "../../reusableComponents/AppBtn";
import AppText from "../../reusableComponents/AppText";

const FundWalletForm = () => {
  const onFinish = () => {
    return null;
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
