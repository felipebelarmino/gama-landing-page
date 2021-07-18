import React from "react";
import * as S from "./styled";

export default function EmailBox() {
  const validateEmail = (email) => {
    var re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return re.test(email);
  };

  const saveEmailLocalStorage = () => {
    const emailSavedPreviously = localStorage.getItem("email");
    const emailInputed = document.getElementById("email").value;

    if (emailSavedPreviously === emailInputed) {
      return alert("Este e-mail já foi cadastrado!");
    } else if (validateEmail(emailInputed)) {
      localStorage.clear();
      return localStorage.setItem("email", emailInputed);
    } else {
      const emailIsValid = validateEmail(emailInputed);
      emailIsValid
        ? localStorage.setItem("email", emailInputed)
        : alert("Email com formato incorreto.");
      return;  
    }
  };

  return (
    <S.Box>
      <S.Input id="email" name="email" type="email" placeholder="e-mail" />
      <S.Button onClick={saveEmailLocalStorage}>Cadastrar</S.Button>
    </S.Box>
  );
}
