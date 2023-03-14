import React from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

import { navAtom } from "@recoil/common";
import {
  Close20Icon,
  LogoIcon,
  BookmarkIcon,
  PencilIcon,
  SettingIcon,
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
        <LogoIcon />
        <button type="button" onClick={handleCloseNav}>
          <Close20Icon />
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
          <PencilIcon />내 게시글
        </S.NavMenu>
      </S.NavItem>
      <S.NavItem>
        <S.NavMenu
          href="bookMark"
          isclick={(pathname === "/bookMark").toString()}
        >
          <BookmarkIcon />
          저장한 게시글
        </S.NavMenu>
      </S.NavItem>
      <S.NavItem>
        <S.NavMenu
          href="setting"
          isclick={(pathname === "/setting").toString()}
        >
          <SettingIcon />
          설정
        </S.NavMenu>
      </S.NavItem>
    </S.Nav>
  );
};

export default Nav;
