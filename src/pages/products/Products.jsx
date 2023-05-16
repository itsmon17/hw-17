import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/UI/Button";

const card = [
  {
    image:
      "https://www.istore.kg/media/products/iphone-14-pro-storage-select-202209-6-1inch-deeppurple_VUroiNn.webp",
    title: "Iphone 14 pro",
    price: "$1320",
    id: 1,
  },
  {
    image:
      "https://www.istore.kg/media/products/iphone-14-pro-finish-select-202209-6-1inch-gold_vKOx8mg.webp",
    title: "Iphone 13 pro",
    price: "$1120",
    id: 2,
  },
  {
    image:
      "https://www.istore.kg/media/products/iphone-14-pro-finish-select-202209-6-1inch-silver_I3rTGV5.webp",
    title: "Iphone 12 pro",
    price: "$650",
    id: 3,
  },
];

const Products = () => {
  return (
    <>
      <div>
        <BigContainer>
          {card.map((el) => {
            return (
              <div>
                <Container>
                  <img src={el.image} alt="fdwvgw" />
                  <Link
                    key={el.id}
                    to={`${el.id}/details`}
                    style={{ listStyle: "none", color: "red" }}
                  >
                    <p>{el.title}</p>
                  </Link>
                  <p>{el.price}</p>
                </Container>
              </div>
            );
          })}
        </BigContainer>
        <Button />
      </div>
      <Outlet />
    </>
  );
};

const BigContainer = styled.ul`
  display: flex;
  gap: 40px;
`;

const Container = styled.div`
  background-color: #fff;
  border-radius: 16px;
  p {
    font-weight: bold;
    color: black;
    text-decoration: none;
  }

  img {
    width: 400px;
  }
`;

export default Products;
