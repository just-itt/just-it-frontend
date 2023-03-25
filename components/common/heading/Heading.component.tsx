import React from "react";

import * as S from "./Heading.styled";

interface HeadingProps {
  className?: string;
  heading: string;
}

const Heading = ({ className, heading }: HeadingProps) => {
  return <S.Heading className={className}>{heading}</S.Heading>;
};

export default Heading;
