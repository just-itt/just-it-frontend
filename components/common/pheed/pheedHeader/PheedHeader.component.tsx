import React from "react";
import Link from "next/link";

import { PersonIcon } from "@icons/index";
import * as S from "./PheedHeader.styled";

interface HeaderProps {
  type: "create" | "edit";
  handleSubmit: () => void;
}

const Header = ({ type, handleSubmit }: HeaderProps) => {
  return (
    <S.Header>
      <S.ContentWrapper>
        <div>
          <Link css={S.link} href="/">
            <PersonIcon />
          </Link>
          {type === "create" ? "새 글 올리기" : "글 수정하기"}
        </div>
        <S.CreateBtn type="button" onClick={handleSubmit}>
          {type === "create" ? "올리기" : "수정하기"}
        </S.CreateBtn>
      </S.ContentWrapper>
    </S.Header>
  );
};

export default Header;
