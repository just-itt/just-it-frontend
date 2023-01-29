import React from "react";

import { HeartIcon, SearchIcon } from "@icons/index";
import * as S from "./Header.styled";

const Header = () => {
  return (
    <S.Header>
      <S.Title>JUST IT</S.Title>
      <S.SearchWrapper>
        <SearchIcon />
        <S.Search placeholder="짬뽕을 검색해 보세요" />
      </S.SearchWrapper>
      <S.FlexWrapper>
        <S.CreatePheed href="https://www.naver.com">게시글 등록</S.CreatePheed>
        <HeartIcon />
      </S.FlexWrapper>
    </S.Header>
  );
};

export default Header;
