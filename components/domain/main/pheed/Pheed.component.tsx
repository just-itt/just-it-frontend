import React from "react";

import Image from "next/image";
import * as S from "./Pheed.styled";

interface PheedProps {
  src: string;
  title: string;
}

const Pheed = ({ src, title }: PheedProps) => {
  return (
    <>
      <S.ImgWrapper>
        <Image
          src={src}
          alt="음식사진"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", borderRadius: "20px" }}
        />
      </S.ImgWrapper>
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
