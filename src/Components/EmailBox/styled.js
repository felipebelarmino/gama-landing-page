import styled from "styled-components";

export const Box = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 50px 0;
`;

export const Input = styled.input`
  width: 300px;
  border-radius: 10px 0 0 10px;
  font-size: 15px;
  border: none;
  outline: none;
  color: black;
  background-color: white;
  padding: 10px 15px;
`;

export const Button = styled.button`
  width: 120px;
  font-size: 15px;
  border-radius: 0 10px 10px 0;
  border: none;
  outline: none;
  color: white;
  background-color: green;
  padding: 10px 15px;
  &: hover {
    cursor: pointer;
  }
`;
