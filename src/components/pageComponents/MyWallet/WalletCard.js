import React from "react";
import styled from "styled-components";
import { Typography, Dropdown, Menu } from "antd";
import { useQuery } from "react-query";

import colors from "../../../configs/colors";
import device from "../../../configs/mediaQueries";

const { mobile } = device;

const { Paragraph } = Typography;

const WalletCard = ({ transactionMetrix, isMobile }) => {
  return (
    <Container>
      <HeadDiv>
        <P size="24px" weight="700" color="#000" top="1rem">
          Wallet Details
        </P>
        <Dropdown overlay={""}>
          <Withdraw>
            {/* <img src={dollarIcon} style={{ marginRight: "5px" }} />
            <span>Withdraw</span>
            <img src={caretIcon} style={{ marginLeft: "9px" }} /> */}
          </Withdraw>
        </Dropdown>
      </HeadDiv>
      <CardRow>
        <CardDiv>
          <Img src={""} />
          <Inner>
            <P color="#999" bottom="0" size="16px" weight="500">
              Total Funds
            </P>
            <P color={colors.dark} size="26px" weight="700">
              $0
            </P>
          </Inner>
        </CardDiv>
        <CardDiv>
          <Img src={""} />
          <Inner>
            <P color="#999" bottom="0" size="16px" weight="500">
              Approved Funds
            </P>
            <P color={colors.dark} size="26px" weight="700">
              $0
            </P>
          </Inner>
        </CardDiv>
        <CardDiv>
          <Img src={""} />
          <Inner>
            <P color="#999" bottom="0" size="16px" weight="500">
              Unapproved Funds
            </P>
            <P color={colors.dark} size="26px" weight="700">
              $0
            </P>
          </Inner>
        </CardDiv>
      </CardRow>
    </Container>
  );
};

export default WalletCard;

const Container = styled.div`
  padding-top: 1rem;
`;

const P = styled(Paragraph)`
  font-size: ${({ size }) => (size ? size : "14px")};
  color: ${({ color }) => (color ? color : colors.textGrey)};
  font-weight: ${({ weight }) => (weight ? weight : "normal")};
  margin-bottom: ${({ bottom }) => bottom}!important;
  margin-top: ${({ top }) => top}!important;
  text-align: ${({ center }) => center && "center"};
  cursor: ${({ pointer }) => pointer && "pointer"};
`;

const HeadDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Withdraw = styled.div`
  background: ${colors.primary};
  opacity: 0;
  user-select: none;
  height: 60px;
  width: 180px;
  text-align: center;
  padding-top: 0.7rem;
  border-radius: 3px;
  /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
  color: ${colors.white};
`;

const CardRow = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 6%;
  @media ${mobile} {
    flex-direction: column;
    gap: 1rem;
  }
`;
const CardDiv = styled.div`
  display: flex;
  height: 130px;
  width: 330px;
  gap: 13%;
  border-radius: 10px;
  background: ${colors.white};
  box-shadow: 8px 8px 64px 0 ${colors.shadow3};
  align-items: center;
  padding: 2rem;
`;

const Img = styled.img`
  display: block;
  height: 52px;
  width: 52px;
`;

const Inner = styled.div`
  padding-top: 1.2rem;
`;
