import React from "react";

import { SearchIcon, ClipIcon, SaveIcon } from "@icons/index";
import * as S from "./Nav.styled";

const Nav = () => {
  return (
    <S.Nav>
      <S.NavMenu>
        <SearchIcon width="20px" height="20px" />
        발견
      </S.NavMenu>
      <S.NavMenu>
        <ClipIcon />내 게시글
      </S.NavMenu>
      <S.NavMenu>
        <SaveIcon />
        저장한 게시글
      </S.NavMenu>
    </S.Nav>
  );
};

export default Nav;
