import React from "react";
import styled from "styled-components";
import { Layout } from "antd";
import { useMediaQuery } from "react-responsive";

import Header from "../mainLayout/Header";
import Sidebar from "./SideBar";

const { Content } = Layout;

const Index = ({ children, padding, background, margin, layoutPad }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <Wrapper>
      <Header />
      <Layout>
        {!isMobile && <Sidebar />}
        <Layout style={{ padding: layoutPad ? layoutPad : "0 24px 24px" }}>
          <Content
            style={{
              margin: margin ? margin : "24px 16px 0",
              background: `${background}`,
              padding: `${padding}`,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Wrapper>
  );
};

export default Index;

const Wrapper = styled(Layout)`
  min-height: 100vh;
`;
