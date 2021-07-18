import React from "react";
import * as S from "./styled";
// Components -----------------------------------------------------
import Header from "../../Components/Header";
import Box from "../../Components/Box";
import ProductCard from "../../Components/ProductCard";
import EmailBox from "../../Components/EmailBox";
import Footer from "../../Components/Footer";
// Images ---------------------------------------------------------
import MacBook from "../../Assets/Images/Products/Notebook-hp-i3.jpeg";
import A31 from "../../Assets/Images/Products/A31.jpg";
import FonePhilco from "../../Assets/Images/Products/FonePhilco.jpg";
import IPhone from "../../Assets/Images/Products/IPhone.jpg";
import NotebookLenovo from "../../Assets/Images/Products/NotebookLenovo.jpg";
import NotebookPredator from "../../Assets/Images/Products/NotebookPredator.jpeg";
import TV from "../../Assets/Images/Products/TV.jpg";
import Nespresso from "../../Assets/Images/Products/Nespresso.jpg";
import Lavadora from "../../Assets/Images/Products/Lavadora.jpg";
// ----------------------------------------------------------------
export default function Home() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <S.Container>
      <Header />
      <Box />
      <div>
        <S.H1>As promoções estão imperdíveis</S.H1>
        <S.Text>
          Não fique fora dessa, cadastre seu e-mail para receber com
          exclusividade as promoções
        </S.Text>
      </div>
      <br />
      <EmailBox />
      <S.BoxProducts>
        <ProductCard
          img={MacBook}
          price="CENSURADO"
          title="Macbook"
          oldPrice="11.999,00"
          description="Apple Macbook 16gb 256gb SSD placa de vídeo integrada"
        />
        <ProductCard
          img={A31}
          price="CENSURADO"
          title="Galaxy A31"
          oldPrice="1.999,00"
          description="Smartphone Samsung Galaxy A31 tela 6.2 polegadas 4gb ram 64gb memória interna"
        />
        <ProductCard
          img={FonePhilco}
          price="CENSURADO"
          title="Fone Philco"
          oldPrice="999,00"
          description="Fone de ouvido profissional"
        />
        <ProductCard
          img={IPhone}
          price="CENSURADO"
          title="IPhone"
          oldPrice="7.999,00"
          description="IPhone tela retina 6.2 polegadas"
        />
        <ProductCard
          img={NotebookLenovo}
          price="CENSURADO"
          title="Notebook Lenovo"
          oldPrice="4.999,00"
          description="Notebook Lenovo 8gb 1tb"
        />
        <ProductCard
          img={NotebookPredator}
          price="CENSURADO"
          title="Notebook Acer Predator"
          oldPrice="8.999,00"
          description="Notebook Acer Predator 16gb SSD 1tb Placa de vídeo GTX 1060"
        />
        <ProductCard
          img={TV}
          price="CENSURADO"
          title="TV"
          oldPrice="5.999,00"
          description="Televisor 75 polegadas 4k"
        />
        <ProductCard
          img={Lavadora}
          price="CENSURADO"
          title="Lavadora"
          oldPrice="3.999,00"
          description="Lavadora de roupas"
        />
        <ProductCard
          img={Nespresso}
          price="CENSURADO"
          title="Nespresso"
          oldPrice="999,00"
          description="Cafeteira Nespresso"
        />
      </S.BoxProducts>
      <S.ButtonToTop onClick={scrollToTop}>Cadastrar e-mail</S.ButtonToTop>
      <Footer />
    </S.Container>
  );
}
