import React from "react";
import styled from "styled-components";
import { Menu, Layout, Typography } from "antd";
import { useHistory } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaWallet, FaMoneyCheckAlt } from "react-icons/fa";
import { AiFillMoneyCollect } from "react-icons/ai";

import { myWallet, transactions, fundWallet } from "../../userRoutes";

const { Text } = Typography;
const { SubMenu } = Menu;
const { Sider } = Layout;

const Sidebar = () => {
  const history = useHistory();
  return (
    <Wrapper width={200} collapsible className="aside_menu">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        // defaultOpenKeys={['sub1']}
        theme="dark"
        style={{ height: "100%", borderRight: 0, paddingTop: "4rem" }}
      >
        <MenuItem onClick={() => history.push(myWallet)}>
          <FaWallet style={{ marginRight: ".5rem" }} />
          <span>My Wallet</span>
        </MenuItem>
        <MenuItem onClick={() => history.push(fundWallet)}>
          <FaMoneyCheckAlt style={{ marginRight: ".5rem" }} />
          <span>Fund Wallet</span>
        </MenuItem>
        <MenuItem onClick={() => history.push(transactions)}>
          <AiFillMoneyCollect style={{ marginRight: ".5rem" }} />
          <span>transaction</span>
        </MenuItem>
      </Menu>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled(Sider)`
  /* overflow: auto;
  height: 100vh;
  position: fixed;
  background-color: #000;
  left: 0; */
`;

const MenuItem = styled(Menu.Item)`
  margin-bottom: 1.7rem;
`;
