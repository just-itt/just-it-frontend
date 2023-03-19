import React from "react";

import * as S from "./HashTag.styled";

interface HashTagProps {
  className?: string;
  hashTags: {
    icon: string;
    title: string;
  }[];
}

const HashTag = ({ className, hashTags }: HashTagProps) => {
  return (
    <S.Wrapper className={className}>
      {hashTags.map(({ icon, title }) => (
        <S.HashTag>
          {icon} {title}
        </S.HashTag>
      ))}
    </S.Wrapper>
  );
};

export default HashTag;
