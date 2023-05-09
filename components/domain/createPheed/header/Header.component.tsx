import React from "react";
import Link from "next/link";

import { PersonIcon } from "@icons/index";
import * as S from "./Header.styled";

interface HeaderProps {
  handleSubmit: () => void;
}

const Header = ({ handleSubmit }: HeaderProps) => {
  return (
    <S.Header>
      <S.ContentWrapper>
        <div>
          <Link css={S.link} href="/">
            <PersonIcon />
          </Link>
          새 글 올리기
        </div>
        <S.CreateBtn type="button" onClick={handleSubmit}>
          올리기
        </S.CreateBtn>
      </S.ContentWrapper>
    </S.Header>
  );
};

export default Header;
