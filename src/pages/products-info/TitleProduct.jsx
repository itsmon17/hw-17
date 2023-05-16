import React from "react";
import styled from "styled-components";
import Button from "../../components/UI/Button";

const TitleProduct = ({ id }) => {
  switch (id) {
    case "1":
      return (
        <DivStyle>
          <ImageApple src="https://www.istore.kg/media/products/iphone-14-pro-storage-select-202209-6-1inch-deeppurple_VUroiNn.webp" />
          <TitleDevice>
            <Button />

            <h1>Apple Iphone 14 pro</h1>
            <p>Price: $1320</p>
            <p>
              The iPhone 14 Pro display has rounded corners that follow a
              beautiful curved design, and these corners are within a standard
              rectangle. When measured as a standard rectangular shape, the
              screen is 6.12 inches diagonally (actual viewable area is
              less).Pay with your iPhone using Face ID in stores, within apps,
              and on the web Send and receive money in Messages with Apple Cash4
              Complete purchases made with Apple Pay on your Mac Pay for your
              ride using Express Transit5
            </p>
          </TitleDevice>
        </DivStyle>
      );
    default:
      break;
  }
};

export const TitleProductIdTwo = ({ id }) => {};

export default TitleProduct;
const DivStyle = styled.div`
  width: 100%;
  height: 85vh;

  padding-top: 70px;
  display: flex;
  gap: 100px;
  justify-content: center;
`;

const ImageApple = styled.img`
  width: 40%;
  height: 70vh;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const TitleDevice = styled.div`
  width: 40%;
  height: 60vh;
`;
