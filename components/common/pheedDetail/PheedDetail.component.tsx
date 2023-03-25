import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
// import { useSetRecoilState } from "recoil";

import { Comments, HashTag } from "@components/index";
// import { pheedDetailAtom } from "@recoil/common";
import { BookmarkIcon, Close20Icon, MoreIcon, ProfileIcon } from "@icons/index";
// import BaseModal from "../modal/baseModal/BaseModal.component";
import * as S from "./PheedDetail.styled";

const dummyComments = [
  {
    nickname: "부산사나이",
    comment:
      "사진으로만 봐도 침이 주르륵이네요사진으로만 봐도 침이 주르륵이네요사진으로만 봐도 침이 주르륵이네요사진으로만 봐도 침이 주르륵이네요사진으로만 봐도 침이 주르륵이네요사진으로만 봐도 침이 주르륵이네요사진으로만 봐도 침이 주르륵이네요사진으로만 봐도 침이 주르륵이네요사진으로만 봐도 침이 주르륵이네요",
  },
  {
    nickname: "농심신라면",
    comment: "위치좀 알려주세요!!",
  },
];

const dummyHashtag = [
  { icon: "hi", title: "한식" },
  { icon: "hi", title: "더위가 심한 날" },
];

interface PheedDetailProps {
  src: string;
  title: string;
}

const PheedDetail = ({ src, title }: PheedDetailProps) => {
  // const isCloseModal = useSetRecoilState(pheedDetailAtom);

  console.log(src, title);

  const { replace } = useRouter();

  const handleCloseModal = () => {
    // isCloseModal(false);
    replace("/", "/", { scroll: false });
  };

  return (
    // <BaseModal>
    <S.Wrapper>
      <S.HeaderWrapper>
        <button type="button" onClick={handleCloseModal}>
          <Close20Icon />
        </button>
        <S.BtnWrapper>
          <button type="button">
            <BookmarkIcon fill="#1683E7" />
          </button>
          <button type="button">
            <MoreIcon />
          </button>
        </S.BtnWrapper>
      </S.HeaderWrapper>
      <S.ProfileWrapper>
        <ProfileIcon />
        <S.Nickname>캔디바</S.Nickname>
      </S.ProfileWrapper>
      <S.ImgWrapper>
        <Image
          src="/imgs/food1.jpeg"
          alt="음식사진"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            marginBottom: "20px",
          }}
        />
        <S.ImgCircle />
      </S.ImgWrapper>
      <S.ContentWrapper>
        <S.Title>웨스터돔 오말리</S.Title>
        <S.Content>
          뚝섬역과 서울숲역 중간에 위치한 이탈리안 레스토랑 오말리. <br />
          <br />
          스테이크는 역시나 현지인 분들이 하는 곳이 찐이고 양파 더 주는 곳은
          근본이자 천국이다. <br />
          <br />
          스테이크는 역시 양파 반 고기 반해서 먹는 게 최고다. 그리고 바삭했던
          감자취팀마저 너무 맛있었다. <br />
          <br />
          출근길에 올리려니 배가 고프다 오늘 점심 뭐나오지
        </S.Content>
        <HashTag css={S.hashTag} hashTags={dummyHashtag} />
      </S.ContentWrapper>
      <Comments css={S.CommentsWrapper} comments={dummyComments} />
      <S.FormWrapper>
        <ProfileIcon />
        <S.InputWrapper>
          <S.Input placeholder="댓글 남기기..." />
          <S.ApplyBtn>등록</S.ApplyBtn>
        </S.InputWrapper>
      </S.FormWrapper>
    </S.Wrapper>
    // </BaseModal>
  );
};

export default PheedDetail;
