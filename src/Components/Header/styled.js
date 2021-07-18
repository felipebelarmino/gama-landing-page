import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  margin: 0;
  height: 100px;
`;

export const Title = styled.h1`
  margin: 110px;
  text-align: right;
  font-family: "Just Another Hand", cursive;
  font-size: 15vw;
  color: red;

  @media (max-width: 768px) {
    margin: 10px;
    text-align: right;
    font-family: "Just Another Hand", cursive;
    font-size: 17vw;
    color: red;
  }
`;
