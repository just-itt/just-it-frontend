import React from "react";

import { EMOJI } from "assets/filter";
import * as S from "./HashTag.styled";

interface HashTagProps {
  className?: string;
  hashTags: {
    id: number;
    title: string;
    tag_title: string;
  }[];
}

const HashTag = ({ className, hashTags }: HashTagProps) => {
  return (
    <S.Wrapper className={className}>
      {hashTags.map(({ title }) => (
        <S.HashTag key={title}>
          {EMOJI[title]} {title}
        </S.HashTag>
      ))}
    </S.Wrapper>
  );
};

export default HashTag;
