import React from "react";

import { SearchIcon, ClipIcon, SaveIcon } from "@icons/index";
import * as S from "./Nav.styled";

const Nav = () => {
  return (
    <S.Nav>
      <li>
        <S.NavMenu type="button">
          <SearchIcon width="20px" height="20px" />
          발견
        </S.NavMenu>
      </li>
      <li>
        <S.NavMenu type="button">
          <ClipIcon />내 게시글
        </S.NavMenu>
      </li>
      <li>
        <S.NavMenu type="button">
          <SaveIcon />
          저장한 게시글
        </S.NavMenu>
      </li>
    </S.Nav>
  );
};

export default Nav;
