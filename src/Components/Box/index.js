import BlackFridayLogo from "../../Assets/Images/black-friday-logo.png";
import React from "react";
import * as S from "./styled";

export default function Box() {
  return (
    <S.Box>
      <S.BlackFridayImage src={BlackFridayLogo} alt="Black Friday Logo" />      
    </S.Box>
  );
}
