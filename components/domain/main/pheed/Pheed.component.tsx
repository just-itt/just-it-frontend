import React from "react";

// import { HeartIcon, TalkIcon } from "@icons/index";
import * as S from "./Pheed.styled";

interface PheedProps {
  src: string;
  title: string;
}

const Pheed = ({ src, title }: PheedProps) => {
  return (
    <>
      <S.Img src={src} alt="음식사진" />
      <S.Title>{title}</S.Title>
      {/* <S.ContentWrapper>
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
      </S.BadgeWrapper> */}
    </>
  );
};

export default Pheed;