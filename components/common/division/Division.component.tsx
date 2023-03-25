import React from "react";

import * as S from "./Division.styled";

interface DivisionProps {
  className?: string;
}

const Division = ({ className }: DivisionProps) => {
  return <S.Division className={className} />;
};

export default Division;
