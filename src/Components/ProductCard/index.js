import React from "react";
import * as S from "./styled";

export default function ProductCard({
  img,
  title,
  price,
  oldPrice,
  description,
}) {
  return (
    <S.Card>
      <S.Img src={img} alt="Product-card" />
      <S.ProductInfo>
        <S.Title>{title}</S.Title>
        <S.OldPrice>R$ {oldPrice}</S.OldPrice>
        <S.Price>R$ {price}</S.Price>
        <S.Description>{description}</S.Description>
      </S.ProductInfo>
    </S.Card>
  );
}
