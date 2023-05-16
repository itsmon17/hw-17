import React from "react";
import Button from "../../components/UI/Button";
import styled from "styled-components";

const MyCart = () => {
  return (
    <Container>
      <InfoBlock>
        <h2>My Cart page</h2>
      </InfoBlock>
      <Button />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  height: 150px;
  margin-left: 10rem;
  margin-top: 20px;
`;
const InfoBlock = styled.div`
  width: 1000px;
  display: flex;
  justify-content: flex-start;
  background-color: #fff;
  padding-left: 20px;
  height: 100px;
`;

export default MyCart;
