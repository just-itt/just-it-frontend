import React from "react";
import Link from "next/link";

import { FooterIcon } from "@icons/index";
import * as S from "./Footer.styled";

const Footer = () => {
  return (
    <S.Footer>
      <FooterIcon />
      <S.NameWrapper>
        <span>
          <S.Position>Front-end Developer</S.Position>
          <Link href="https://github.com/choisuhyeok1255" target="_blank">
            Choi Su-hyeok
          </Link>
        </span>
        <span>
          <S.Position>Back-end Developer</S.Position>
          <Link href="https://github.com/2jisu" target="_blank">
            Lee Ji-soo
          </Link>
        </span>
        <span>
          <S.Position>Prodect Designer</S.Position>Jeong Seung-hoon
        </span>
      </S.NameWrapper>
    </S.Footer>
  );
};

export default Footer;
