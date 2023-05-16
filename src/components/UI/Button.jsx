import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return <StyledButton onClick={goBack}>GO BACK</StyledButton>;
};

const StyledButton = styled.button`
  border: none;
  background-color: #3ab0ae;
  color: #fff;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 15px;
`;

export default Button;
