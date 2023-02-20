import React from "react";

import { useViewport } from "@hooks/index";
import {
  ProfileIcon,
  LogoIcon,
  SearchIcon,
  SearchMobileIcon,
  HamburgerIcon,
  AddPheedIcon,
} from "@icons/index";
import * as S from "./Header.styled";

const Header = () => {
  const { isMobile, isDesktop } = useViewport();

  return (
    <S.Header>
      <S.LogoWrapper>
        {!isDesktop && (
          <S.MenuBtn type="button">
            <HamburgerIcon />
          </S.MenuBtn>
        )}
        <LogoIcon />
      </S.LogoWrapper>
      {!isMobile && (
        <S.SearchWrapper>
          <SearchIcon />
          <S.Search placeholder="검색..." maxLength={30} />
        </S.SearchWrapper>
      )}
      <S.FlexWrapper>
        {isMobile ? (
          <>
            <button type="button">
              <SearchMobileIcon />
            </button>
            <button type="button">
              <AddPheedIcon />
            </button>
          </>
        ) : (
          <S.CreatePheed href="https://www.naver.com">새 글 등록</S.CreatePheed>
        )}
        <button type="button">
          <ProfileIcon />
        </button>
      </S.FlexWrapper>
    </S.Header>
  );
};

export default Header;
