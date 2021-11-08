import React, { useState } from "react";
import styled from "styled-components";
import { Form, message } from "antd";
import { useSelector } from "react-redux";
import { useMutation } from "react-query";

import AppModal from "../../reusableComponents/AppModal";
import AppText from "../../reusableComponents/AppText";
import AppBtn from "../../reusableComponents/AppBtn";
import { createWallet } from "../../../apis/mutations/wallet";

const CreateWalletModal = ({ showModal, setShowModal }) => {
  const [loading, setloading] = useState();
  const { email } = useSelector((state) => state.auth);
  const [createMutate] = useMutation(createWallet, {
    onMutate: () => setloading(true),
    onSuccess: (data) => {
      setloading(false);
      message.success(data.message);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    },
    onError: (error) => {
      setloading(false);
      message.error("something went wrong");
      console.log(error);
    },
  });
  const onFinish = async (formDetails) => {
    createMutate(formDetails);
  };
  const CreateWalletForm = (
    <FormDiv>
      <AppText value="Create your Wallet" />
      <Form layout="vertical" onFinish={onFinish}>
        {email && (
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
            rules={[
              {
                required: true,
                message: "Email is required",
              },
              {
                pattern: new RegExp(
                  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
                ),
                message: "Email is invalid",
              },
            ]}
            name="customer_email"
            initialValue={email}
          >
            <StyledInput placeholder="Enter text..." />
          </Form.Item>
        )}
        <Form.Item>
          <AppBtn
            text="Create"
            htmlType="Submit"
            height="3.5rem"
            loading={loading}
          />
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
