import React from "react";

import * as S from "./Dim.styled";

interface DimProps {
  children: React.ReactNode;
}

const Dim = ({ children }: DimProps) => {
  return <S.Dim>{children}</S.Dim>;
};

export default Dim;
