import React from "react";

import * as S from "./Heading.styled";

interface HeadingProps {
  className?: string;
  heading: string;
  count?: number;
}

const Heading = ({ className, heading, count }: HeadingProps) => {
  return (
    <S.Heading className={className}>
      {heading}
      {count && <S.Count>{count}</S.Count>}
    </S.Heading>
  );
};

export default Heading;
