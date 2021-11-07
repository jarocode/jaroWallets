import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import PaymentImg from "../../../assets/svgs/payment.svg";
import AppBtn from "../../reusableComponents/AppBtn";
import AppText from "../../reusableComponents/AppText";
import { emailLogin } from "../../../userRoutes";

const Jumbotron = () => {
  const history = useHistory();
  return (
    <Container>
      <Div>
        <TextDiv>
          <AppText
            value="Wallet Management and Infrastructure Made Easy"
            weight="bold"
            size="3em"
            color="#000"
            bottom="2rem"
          />
          <AppText
            value="Make smooth and seamless payments with your wallet within seconds. Keep track of all transactions done including analytics"
            weight="normal"
            size="1.5em"
            top="0"
            bottom="2rem"
          />
          <AppBtn
            text="Get Started"
            width="12.5rem"
            height="3.5rem"
            onClick={() => history.push(emailLogin)}
            shadow
          />
        </TextDiv>
        <ImageDiv>
          <Img src={PaymentImg} />
        </ImageDiv>
      </Div>
    </Container>
  );
};

export default Jumbotron;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 15rem;
  width: 100%;
`;

const Div = styled.div`
  display: flex;
  padding: 7rem;
  min-height: 20rem;
  width: 96rem;
  margin: auto;
`;
const TextDiv = styled.div`
  width: 100%;
  padding-right: 3rem;
`;
const ImageDiv = styled.div`
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;
