import styled from "styled-components";

export const Footer = styled.footer`
  background: lightgray;
  font-size: 15px;
  width: 100%;
  height: 100px;
  padding: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.p`
  color: black;
  font-size: 16px;
  text-align: center;
  margin: 10px;
`;

export const Image = styled.img`
  width: 80px;
  border-radius: 50%;
  margin: 10px;
  &:hover {
    cursor: pointer;
  }
`;
