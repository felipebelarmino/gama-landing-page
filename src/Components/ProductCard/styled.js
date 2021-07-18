import styled from "styled-components";

export const Card = styled.div`
  margin: 10px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 300px;
  padding: 10px 20px;
  transition: 250ms all;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 15px 0px red;
`;

export const Img = styled.img`
  width: 100%;
  margin: auto;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: black;
`;

export const Price = styled.p`
  font-size: 1.2em;
  color: green;
  font-weight: bold;
  margin: 10px;
`;

export const OldPrice = styled.p`
  font-size: 1em;
  color: red;
  text-decoration: line-through;
`;

export const Description = styled.p`
  color: gray;
  margin-top: 10px;
  text-align: justify;
`;

export const Title = styled.p`
  font-size: 1.5em;
  color: black;
  margin-bottom: 10px;

`;
