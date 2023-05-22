import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import {
  Comments,
  HashTag,
  DropdownBtn,
  ConfirmModal,
} from "@components/index";
import {
  useDeleteBookmark,
  useGetPheedDetail,
  usePostBookmark,
} from "@service/index";
import { useModal } from "@hooks/index";
import {
  BookMarkIcon,
  BookMarkMonoIcon,
  CloseIcon,
  MoreIcon,
} from "@icons/index";
import * as S from "./PheedDetail.styled";

const PheedDetail = () => {
  const {
    replace,
    pathname,
    query: { id },
  } = useRouter();

  const { handleOpenModal } = useModal();
  const { data } = useGetPheedDetail({ id: id as string });
  const { mutate: postBookmarkMutate } = usePostBookmark();
  const { mutate: deleteBookmarkMutate } = useDeleteBookmark();

  const handleClickBookMark = () => {
    if (data?.is_bookmark) {
      deleteBookmarkMutate({ body: { id: id as string } });
    } else {
      postBookmarkMutate({ body: { id: id as string } });
    }
  };

  const handleCloseModal = () => {
    replace(pathname, pathname, { scroll: false });
  };

  if (!data) return null;

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
            {data.is_bookmark ? <BookMarkMonoIcon /> : <BookMarkIcon />}
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
        <S.Nickname>아이디</S.Nickname>
      </S.ProfileWrapper>
      <S.ImgWrapper>
        <Image
          src={data.image.image}
          alt={`${data.title} 사진`}
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
        <S.Title>{data.title}</S.Title>
        <S.Content>{data.content}</S.Content>
        <HashTag css={S.hashTag} hashTags={data.tag_options} />
      </S.ContentWrapper>
      {data.replies && (
        <Comments css={S.CommentsWrapper} comments={data.replies} />
      )}
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
