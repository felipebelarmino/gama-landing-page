import React from "react";
import * as S from "./styled";

import AuthorImage from "../../Assets/Images/Felipe.jpeg";

export default function Footer() {
  const redirectToGithub = () =>
    window.open("https://github.com/felipebelarmino", "_blank");

  return (
    <S.Footer>
      <S.Text>&copy; 2021 All Rights Reserved.</S.Text>

      <div className="tooltip">
        <label className="tooltiptext">Github - Felipe Belarmino</label>
        <S.Image          
          src={AuthorImage}
          onClick={redirectToGithub}          
        />
      </div>
    </S.Footer>
  );
}
