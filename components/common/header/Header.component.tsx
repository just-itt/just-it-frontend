import React, { useEffect } from "react";
import Link from "next/link";
import { useRecoilState, useSetRecoilState } from "recoil";

import { userAtom, navAtom } from "@recoil/common";
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
  const { isMobile, isTablet, isDesktop } = useViewport();

  const [userState, setUserState] = useRecoilState(userAtom);
  const setNavState = useSetRecoilState(navAtom);

  const handleClickMenu = () => {
    setNavState(true);
  };

  useEffect(() => {}, []);

  return (
    <S.Header>
      <S.LogoWrapper>
        <S.MenuBtn type="button" onClick={handleClickMenu}>
          <HamburgerIcon />
        </S.MenuBtn>
        <Link href="/">
          <LogoIcon />
        </Link>
      </S.LogoWrapper>
      {isMobile && userState.user && (
        <S.MobileLoginWrapper>
          <button type="button">
            <SearchMobileIcon />
          </button>
          <Link href="/">
            <AddPheedIcon />
          </Link>
        </S.MobileLoginWrapper>
      )}
      {isMobile && !userState.user && (
        <S.MobileLoginWrapper>
          <button type="button">
            <SearchMobileIcon />
          </button>
          <S.LoginBtn href="/login">로그인</S.LoginBtn>
        </S.MobileLoginWrapper>
      )}
      {(isTablet || isDesktop) && userState.user && (
        <>
          <S.SearchWrapper>
            <SearchIcon />
            <S.Search placeholder="검색..." maxLength={30} />
          </S.SearchWrapper>
          <S.FlexWrapper>
            <S.CreatePheed href="/createPheed">새 글 등록</S.CreatePheed>
            <button type="button">
              <ProfileIcon />
            </button>
          </S.FlexWrapper>
        </>
      )}
      {(isTablet || isDesktop) && !userState.user && (
        <>
          <S.SearchWrapper>
            <SearchIcon />
            <S.Search placeholder="검색..." maxLength={30} />
          </S.SearchWrapper>
          <S.FlexWrapper>
            <S.LoginBtn href="/login">로그인</S.LoginBtn>
          </S.FlexWrapper>
        </>
      )}
    </S.Header>
  );
};

export default Header;
