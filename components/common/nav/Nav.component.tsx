import React from "react";
import { useRouter } from "next/router";

import * as S from "./Nav.styled";

const Nav = () => {
  const { pathname } = useRouter();

  return (
    <S.Nav>
      <S.NavItem>
        <S.NavMenu href="/" isSelect={pathname === "/"}>
          <S.CustomTagIcon isSelect={pathname === "/"} /> 탐색하기
        </S.NavMenu>
      </S.NavItem>
      <S.NavItem>
        <S.NavMenu href="myPheed" isSelect={pathname === "/myPheed"}>
          <S.CustomPencilIcon isSelect={pathname === "/myPheed"} />내 게시글
        </S.NavMenu>
      </S.NavItem>
      <S.NavItem>
        <S.NavMenu href="bookMark" isSelect={pathname === "/bookMark"}>
          <S.CustomBookmarkIcon isSelect={pathname === "/bookMark"} />
          저장한 게시글
        </S.NavMenu>
      </S.NavItem>
      <S.NavItem>
        <S.NavMenu href="setting" isSelect={pathname === "/setting"}>
          <S.CustomSettingIcon isSelect={pathname === "/setting"} />
          설정
        </S.NavMenu>
      </S.NavItem>
    </S.Nav>
  );
};

export default Nav;
