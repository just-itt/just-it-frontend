import React from "react";
import Link from "next/link";

import { BackArrowIcon } from "@icons/index";
import * as S from "./Header.styled";

const Header = () => {
  return (
    <S.Header>
      <S.ContentWrapper>
        <div>
          <Link css={S.link} href="/">
            <BackArrowIcon />
          </Link>
          새 글 올리기
        </div>
        <S.CreateBtn type="button">완료</S.CreateBtn>
      </S.ContentWrapper>
    </S.Header>
  );
};

export default Header;
