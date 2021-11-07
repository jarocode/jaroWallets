import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Form, Select, Input } from "antd";
import { v4 as uuidv4, v5, v3 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import colors from "../../../configs/colors";
import AppBtn from "../../reusableComponents/AppBtn";
import AppText from "../../reusableComponents/AppText";
import { signIn } from "../../../store/actions/auth";
import { myWallet } from "../../../userRoutes";

const FundWalletForm = () => {
  const [canRedirect, setCanRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const onFinish = ({ email }) => {
    setLoading(true);
    const token = uuidv4() + uuidv4() + uuidv4() + uuidv4() + uuidv4();
    const loginMinuite = new Date().getMinutes();
    setTimeout(() => {
      dispatch(
        signIn({
          token,
          loginMinuite,
          email,
        })
      );

      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    setCanRedirect(auth.success);
    console.log(canRedirect);
  }, [auth]);

  if (canRedirect) {
    return <Redirect to={myWallet} />;
  }

  return (
    <Container>
      <Form layout="vertical" onFinish={onFinish}>
        <FormItem
          label={
            <AppText
              value="Email"
              weight="600"
              size="1.3em"
              top="0"
              bottom="0"
            />
          }
          name="email"
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
        >
          <Input placeholder="Enter text" style={{ height: "3rem" }} />
        </FormItem>
        <FormItem>
          <AppBtn
            text="Login"
            htmlType="Submit"
            height="3.5rem"
            loading={loading}
          />
        </FormItem>
      </Form>
    </Container>
  );
};

export default FundWalletForm;

const Container = styled.div`
  min-height: 10rem;
  width: 40%;
  padding: 1rem 2rem;
  margin: auto;
  box-shadow: 8px 8px 64px 0 ${colors.shadow3};
  background: ${colors.white};
`;

const FormItem = styled(Form.Item)``;
