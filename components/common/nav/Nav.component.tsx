import React from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

import { navAtom } from "@recoil/common";
import {
  BookMarkMonoIcon,
  CloseIcon,
  EditMonoIcon,
  LogoShortIcon,
  SettingMonoIcon,
  TagIcon,
} from "@icons/index";
import * as S from "./Nav.styled";

const Nav = () => {
  const { pathname } = useRouter();

  const [navState, setNavState] = useRecoilState(navAtom);

  const handleCloseNav = () => {
    setNavState(false);
  };

  return (
    <S.Nav isOpen={navState}>
      <S.Wrapper>
        <LogoShortIcon />
        <button type="button" onClick={handleCloseNav}>
          <CloseIcon />
        </button>
      </S.Wrapper>
      <S.NavItem>
        <S.NavMenu href="/" isclick={(pathname === "/").toString()}>
          <TagIcon />
          탐색하기
        </S.NavMenu>
      </S.NavItem>
      <S.NavItem>
        <S.NavMenu
          href="myPheed"
          isclick={(pathname === "/myPheed").toString()}
        >
          <EditMonoIcon />내 게시글
        </S.NavMenu>
      </S.NavItem>
      <S.NavItem>
        <S.NavMenu
          href="bookMark"
          isclick={(pathname === "/bookMark").toString()}
        >
          <BookMarkMonoIcon />
          저장한 게시글
        </S.NavMenu>
      </S.NavItem>
      <S.NavItem>
        <S.NavMenu
          href="setting"
          isclick={(pathname === "/setting").toString()}
        >
          <SettingMonoIcon />
          설정
        </S.NavMenu>
      </S.NavItem>
    </S.Nav>
  );
};

export default Nav;
