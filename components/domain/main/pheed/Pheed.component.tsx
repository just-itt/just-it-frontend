import React from "react";

import { HeartIcon, TalkIcon } from "@icons/index";
import * as S from "./Pheed.styled";

const Pheed = () => {
  return (
    <S.Pheed>
      <S.Thumbnail
        src="https://i.pinimg.com/736x/ec/78/69/ec7869aaaeb6bd561573aa131e0203ea.jpg"
        alt="아이유찡"
        width="264"
        height="264"
      />
      <S.Title>이치에, 사시미모리아와세</S.Title>
      <S.ContentWrapper>
        <S.Content>
          우리나라 이자카야의 모범답안 같은 우리나라 이자카야의 모범답안 같은
          우리나라 이자카야의 모범답안 같은
        </S.Content>
        <S.MoreBtn type="button">더 보기</S.MoreBtn>
      </S.ContentWrapper>
      <S.BadgeWrapper>
        <S.Badge>
          <HeartIcon />
          <S.BadgeCount>3</S.BadgeCount>
        </S.Badge>
        <S.Badge>
          <TalkIcon />
          <S.BadgeCount>3</S.BadgeCount>
        </S.Badge>
      </S.BadgeWrapper>
    </S.Pheed>
  );
};

export default Pheed;
