import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TitleProduct from "./TitleProduct";
import TitleProductIdTwo from "./TitleProductIdTwo";
import TitleProductIdThree from "./TitleProductIdThree";

const ProductsInfo = () => {
  const { id } = useParams();
  return (
    <Container>
      <TitleProduct id={id} />
      <TitleProductIdTwo id={id}/>
      <TitleProductIdThree id={id}/>

    </Container>
  );
};

export default ProductsInfo;

const Container = styled.div`
  width: 85%;
  height: 80vh;
  background-color: #ffffff;
  margin: 0 auto;
  margin-top: 25px;
  border-radius: 20px;
`;
