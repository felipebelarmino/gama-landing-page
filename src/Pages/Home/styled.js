import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
`;

export const BoxProducts = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  flex-wrap: wrap;
`;

export const H1 = styled.p`
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  color: green;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  text-align: justify;
  padding: 0 20px;
`;

export const ButtonToTop = styled.button`
  background-color: green;
  margin: 30px 0;
  padding: 10px; 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 1em;
`;
