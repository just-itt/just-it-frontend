import React from "react";
import Link from "next/link";

import { PersonIcon } from "@icons/index";
import * as S from "./PheedHeader.styled";

interface HeaderProps {
  type: "create" | "edit";
  isError: boolean;
  handleSubmit: () => void;
}

const Header = ({ type, isError, handleSubmit }: HeaderProps) => {
  return (
    <S.Header>
      <S.ContentWrapper>
        <div>
          <Link css={S.link} href="/">
            <PersonIcon />
          </Link>
          {type === "create" ? "새 글 올리기" : "글 수정하기"}
        </div>
        <S.CreateBtn disabled={isError} type="button" onClick={handleSubmit}>
          {type === "create" ? "올리기" : "수정하기"}
        </S.CreateBtn>
      </S.ContentWrapper>
    </S.Header>
  );
};

export default Header;
