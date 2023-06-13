import React from "react";

import { FooterIcon } from "@icons/index";
import * as S from "./Footer.styled";

const Footer = () => {
  return (
    <S.Footer>
      <FooterIcon />
      <S.NameWrapper>
        <S.Name>
          <S.Position>Front-end Developer</S.Position>Choi Su-hyeok
        </S.Name>
        <S.Name>
          <S.Position>Back-end Developer</S.Position>Lee Ji-soo
        </S.Name>
        <S.Name>
          <S.Position>Prodect Designer</S.Position>Jeong Seung-hoon
        </S.Name>
      </S.NameWrapper>
    </S.Footer>
  );
};

export default Footer;
