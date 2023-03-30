import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import {
  Comments,
  HashTag,
  DropdownBtn,
  ConfirmModal,
} from "@components/index";
import { useModal } from "@hooks/index";
import {
  BookMarkIcon,
  BookMarkMonoIcon,
  CloseIcon,
  MoreIcon,
} from "@icons/index";
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
  const { replace } = useRouter();

  const [isBookMark, setIsBookMark] = useState(false);

  const { handleOpenModal } = useModal();

  const handleClickBookMark = () => {
    setIsBookMark(!isBookMark);
  };

  const handleCloseModal = () => {
    replace("/", "/", { scroll: false });
  };

  return (
    <S.Wrapper>
      <ConfirmModal
        content="내 글을 삭제하시겠어요?"
        confirmLabel="삭제하기"
        cancelLabel="취소"
      />
      <S.HeaderWrapper>
        <button type="button" onClick={handleCloseModal}>
          <CloseIcon />
        </button>
        <S.BtnWrapper>
          <button type="button" onClick={handleClickBookMark}>
            {isBookMark ? <BookMarkMonoIcon /> : <BookMarkIcon />}
          </button>
          <DropdownBtn
            btnRender={<MoreIcon />}
            dropdownItems={[
              {
                label: "수정하기",
                value: "edit",
              },
              { label: "삭제하기", value: "delete", handler: handleOpenModal },
            ]}
          />
        </S.BtnWrapper>
      </S.HeaderWrapper>
      <S.ProfileWrapper>
        <S.Profile />
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
        <S.Profile />
        <S.InputWrapper>
          <S.Input placeholder="댓글 남기기..." />
          <S.ApplyBtn>등록</S.ApplyBtn>
        </S.InputWrapper>
      </S.FormWrapper>
    </S.Wrapper>
  );
};

export default PheedDetail;
