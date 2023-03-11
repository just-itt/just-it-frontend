import React from "react";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";

import useViewport from "@hooks/useViewport";
import { navAtom } from "@recoil/common";
import { Close20Icon, LogoIcon } from "@icons/index";
import * as S from "./Nav.styled";

const Nav = () => {
  const { pathname } = useRouter();
  const { isDesktop } = useViewport();

  const setNavState = useSetRecoilState(navAtom);

  const handleCloseNav = () => {
    setNavState(false);
  };

  return (
    <S.Nav>
      {!isDesktop && (
        <S.Wrapper>
          <LogoIcon />
          <button type="button" onClick={handleCloseNav}>
            <Close20Icon />
          </button>
        </S.Wrapper>
      )}
      <S.NavItem>
        <S.NavMenu href="/" isSelect={pathname === "/"}>
          {isDesktop && <S.CustomTagIcon isSelect={pathname === "/"} />}
          탐색하기
        </S.NavMenu>
      </S.NavItem>
      <S.NavItem>
        <S.NavMenu href="myPheed" isSelect={pathname === "/myPheed"}>
          {isDesktop && (
            <S.CustomPencilIcon isSelect={pathname === "/myPheed"} />
          )}
          내 게시글
        </S.NavMenu>
      </S.NavItem>
      <S.NavItem>
        <S.NavMenu href="bookMark" isSelect={pathname === "/bookMark"}>
          {isDesktop && (
            <S.CustomBookmarkIcon isSelect={pathname === "/bookMark"} />
          )}
          저장한 게시글
        </S.NavMenu>
      </S.NavItem>
      <S.NavItem>
        <S.NavMenu href="setting" isSelect={pathname === "/setting"}>
          {isDesktop && (
            <S.CustomSettingIcon isSelect={pathname === "/setting"} />
          )}
          설정
        </S.NavMenu>
      </S.NavItem>
    </S.Nav>
  );
};

export default Nav;
