import React, { useState } from "react";
import styled from "styled-components";
import { Form, Input } from "antd";

import AppModal from "../../reusableComponents/AppModal";
import AppText from "../../reusableComponents/AppText";
import AppBtn from "../../reusableComponents/AppBtn";

const CreateWalletModal = ({ showModal, setShowModal }) => {
  const onFinish = () => {
    return;
  };
  const CreateWalletForm = (
    <FormDiv>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label={
            <AppText
              value="Email Address"
              weight="600"
              size="1.3em"
              top="0"
              bottom="0"
            />
          }
        >
          <StyledInput placeholder="Enter text..." />
        </Form.Item>
        <Form.Item>
          <AppBtn text="Create" htmlType="Submit" height="3.5rem" />
        </Form.Item>
      </Form>
    </FormDiv>
  );

  return (
    <AppModal
      isModalVisible={showModal}
      handleCancel={() => setShowModal(false)}
      content={CreateWalletForm}
    />
  );
};

export default CreateWalletModal;

const FormDiv = styled.div`
  min-height: 10rem;
`;

const StyledInput = styled.input`
  height: 3.5rem;
  padding: 1rem;
  width: 100%;
`;
