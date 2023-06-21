import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

import {
  Comments,
  ConfirmModal,
  DropdownBtn,
  HashTag,
  Profile,
} from "@components/index";
import { useDeletePheed, useGetPheedDetail } from "@service/index";
import { profileAtom } from "@recoil/index";
import { useModal } from "@hooks/index";
import { handleResize } from "utils";
import {
  BookMarkIcon,
  BookMarkMonoIcon,
  CloseIcon,
  MoreIcon,
} from "@icons/index";
import { useBookMark, usePheedReply } from "./hooks";
import * as S from "./PheedDetail.styled";

const PheedDetail = () => {
  const { replace, push, asPath, query } = useRouter();

  const [profileState] = useRecoilState(profileAtom);

  const { data, refetch } = useGetPheedDetail({ id: query.id as string });

  const { mutate: deletePheed } = useDeletePheed();

  const { handleOpenModal, handleCloseModal } = useModal();
  const { register, handleSubmit, handleDeletePheedReply } =
    usePheedReply(refetch);
  const { handleClickBookMark } = useBookMark(data!, refetch);

  const handleCloseDetailModal = () => {
    const { id, ...updateQuery } = query;

    replace({ query: updateQuery }, undefined, { scroll: false });
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!data) return null;

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <button type="button" onClick={handleCloseDetailModal}>
          <CloseIcon />
        </button>
        <S.BtnWrapper>
          <button type="button" onClick={handleClickBookMark}>
            {data.is_bookmark ? <BookMarkMonoIcon /> : <BookMarkIcon />}
          </button>
          {profileState.id === data.author_id && (
            <DropdownBtn
              btnRender={<MoreIcon />}
              dropdownItems={[
                {
                  label: "수정하기",
                  value: "edit",
                  handler: () => {
                    push(
                      `/editPheed?id=${
                        query.id
                      }&currentPath=${encodeURIComponent(asPath)}`,
                    );
                  },
                },
                {
                  label: "삭제하기",
                  value: "delete",
                  handler: handleOpenModal(
                    <ConfirmModal
                      content="내 글을 삭제하시겠어요?"
                      confirmLabel="삭제하기"
                      cancelLabel="취소"
                      handleConfirm={() => {
                        deletePheed(
                          { id: query.id as string },
                          {
                            onSuccess: () => {
                              alert("피드 삭제 성공");
                              handleCloseDetailModal();
                              handleCloseModal();
                            },
                          },
                        );
                      }}
                    />,
                  ),
                },
              ]}
            />
          )}
        </S.BtnWrapper>
      </S.HeaderWrapper>
      <S.ScrollWrapper>
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
        {!!data.replies.length && (
          <Comments
            css={S.CommentsWrapper}
            comments={data.replies}
            handleDeletePheedReply={handleDeletePheedReply}
          />
        )}
      </S.ScrollWrapper>
      <S.FormWrapper onSubmit={handleSubmit}>
        <Profile
          css={S.profile}
          src={profileState.profileImage ?? null}
          alt={`${profileState.nickname}님의 프로필 사진`}
        />
        <S.InputWrapper>
          <S.Input
            placeholder="댓글 남기기..."
            {...register("comment", {
              required: true,
              validate: value => value.trim().length > 0,
            })}
          />
          <S.ApplyBtn>등록</S.ApplyBtn>
        </S.InputWrapper>
      </S.FormWrapper>
    </S.Wrapper>
  );
};

export default PheedDetail;
