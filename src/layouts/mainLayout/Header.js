import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { Avatar, Popover } from "antd";
import { AiFillCaretDown } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

import colors from "../../configs/colors";
import AppText from "../../components/reusableComponents/AppText";
import { signOut } from "../../store/actions/auth";
import { landingpage, emailLogin } from "../../userRoutes";
import AppBtn from "../../components/reusableComponents/AppBtn";

const Header = () => {
  const { token, email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogOut = () => {
    dispatch(signOut(""));
    history.push(landingpage);
    window.location.reload();
  };

  const content = (
    <AppText value="Sign Out" weight="bold" onClick={handleLogOut} pointer />
  );
  return (
    <Container>
      <LogoDiv>
        <AppText
          value={
            <span>
              Jaro<Span>Wallets</Span>
            </span>
          }
          weight="bold"
          size="2em"
          top="0"
          bottom="0"
        />
      </LogoDiv>
      <NavDiv>
        {!email ? (
          <AppBtn
            text="Log In"
            width="12rem"
            height="3rem"
            onClick={() => history.push(emailLogin)}
          />
        ) : (
          <Popover content={content} placement="bottom" trigger="click">
            <AvatarDiv>
              <UserAvatar size="medium">
                {email.charAt(0).toUpperCase()}
              </UserAvatar>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AiFillCaretDown />
              </div>
            </AvatarDiv>
          </Popover>
        )}
      </NavDiv>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: sticky;
  min-height: 5rem;
  z-index: 1000;
  top: 0;
  padding: 1rem 3rem;
  background: ${colors.white}!important;
  display: flex;
  justify-content: space-between;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 8px 0px !important;
`;

const LogoDiv = styled.div``;
const NavDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserAvatar = styled(Avatar)`
  background-color: ${colors.primary};
  vertical-align: middle;
`;
const AvatarDiv = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  gap: 1.5%;
`;

const Span = styled.span`
  color: ${colors.primary};
`;
