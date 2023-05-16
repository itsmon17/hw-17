import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <h1>iStore</h1>
      <Container>
        <Link to="/products">Product</Link>
        <Link to="/mycard">My Card</Link>
        <Link to="/myorder">My Order</Link>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background-color: #0077ff;

  h1 {
    color: #fff;
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 40px;
  a {
    color: #fff;
    font-size: 1.7rem;
    font-weight: bold;
    text-decoration: none;
  }
`;

export default Header;
