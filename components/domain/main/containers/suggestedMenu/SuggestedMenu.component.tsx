import React from "react";

import { Heading, Pheed } from "@components/index";
import { FilterIcon } from "@icons/index";
import * as S from "./SuggestedMenu.styled";

const SuggestedMenu = () => {
  return (
    <S.SuggestedMenu>
      <S.HeadingWrapper>
        <Heading heading="오늘의 추천 메뉴" />
        <S.FilterSettingBtn type="button">
          <FilterIcon />
          <span>필터 설정</span>
        </S.FilterSettingBtn>
      </S.HeadingWrapper>
      <S.PheedWrapper>
        <Pheed src="/imgs/food1.jpeg" title="설렁탕" />
        <Pheed src="/imgs/food2.jpeg" title="피자" />
        <Pheed src="/imgs/food3.jpeg" title="핫도그" />
      </S.PheedWrapper>
    </S.SuggestedMenu>
  );
};

export default SuggestedMenu;
