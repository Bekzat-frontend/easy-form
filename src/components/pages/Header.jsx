import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <>
      <header
        style={{
          display: "flex",

          justifyContent: "space-evenly",

          background: "#ddd",
        }}
      >
        <h1 style={{ marginLeft: "45%" }}>Register</h1>
        <StyledNav>
          <NavLink to="/login"> Login</NavLink>
          <NavLink to="/register"> Register</NavLink>
        </StyledNav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
const StyledNav = styled.nav`
  width: 20%;
  margin-top: 25px;
  gap: 15px;
  margin-left: 20%;
  font-size: 15px;
  display: flex;
  justify-content: end;
`;

export default Header;
