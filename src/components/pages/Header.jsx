import React from "react";
import { NavLink } from "react-router";
import styled from "styled-components";

function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "3px",
        background: "#ddd",
      }}
    >
      <h1>Register</h1>
      <StyledNav>
        <NavLink to="/login"> Login</NavLink>
        <NavLink to="/register"> Register</NavLink>
      </StyledNav>
    </header>
  );
}
const StyledNav = styled.nav`
  width: 40%;
  margin-top: 25px;
  gap: 15px;
  margin-left: 300px;
  display: flex;
  justify-content: end;
`;

export default Header;
