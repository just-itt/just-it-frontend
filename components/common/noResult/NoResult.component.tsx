import React from "react";

import { InfoIcon } from "@icons/index";
import * as S from "./NoResult.styled";

const NoResult = () => {
  return (
    <S.Wrapper>
      <InfoIcon css={S.icon} />
      <S.Text>찾으시는 결과가 없습니다.</S.Text>
    </S.Wrapper>
  );
};

export default NoResult;
