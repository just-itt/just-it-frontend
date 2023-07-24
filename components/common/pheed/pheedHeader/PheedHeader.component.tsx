import React from "react";
import Link from "next/link";

import { Spinner } from "@components/index";
import { ArrowLineIcon } from "@icons/index";
import * as S from "./PheedHeader.styled";

interface HeaderProps {
  type: "create" | "edit";
  isError: boolean;
  isLoading: boolean;
  handleSubmit: () => void;
}

const Header = ({ type, isError, isLoading, handleSubmit }: HeaderProps) => {
  return (
    <S.Header>
      <S.ContentWrapper>
        <div>
          <Link css={S.link} href="/">
            <ArrowLineIcon />
          </Link>
          <S.Heading>
            {type === "create" ? "새 글 올리기" : "글 수정하기"}
          </S.Heading>
        </div>
        <S.CreateBtn
          disabled={isError || isLoading}
          type="button"
          onClick={handleSubmit}
        >
          {isLoading ? <Spinner /> : type === "create" ? "올리기" : "수정하기"}
        </S.CreateBtn>
      </S.ContentWrapper>
    </S.Header>
  );
};

export default Header;
