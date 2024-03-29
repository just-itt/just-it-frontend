import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import {
  Comments,
  ConfirmModal,
  DropdownBtn,
  HashTag,
  LoginLinkModal,
  Profile,
} from "@components/index";
import {
  myPheedKeys,
  pheedKeys,
  useDeletePheed,
  useGetMyProfile,
  useGetPheedDetail,
} from "@service/index";
import { useImageError, useModal, useResize } from "@hooks/index";
import {
  BookmarkEmptyIcon,
  BookmarkFullIcon,
  CloseIcon,
  MoreIcon,
} from "@icons/index";
import { useBookMark, usePheedReply } from "./hooks";
import * as S from "./PheedDetail.styled";

const PheedDetail = () => {
  const { push, asPath, query } = useRouter();

  const queryClient = useQueryClient();

  const { data, refetch } = useGetPheedDetail({ id: query.id as string });
  const { data: profile } = useGetMyProfile();
  const { mutate: deletePheed } = useDeletePheed();
  const {
    replyType,
    changeReplyType,
    register,
    handleSubmit,
    handleCancelPheedReply,
    handleEditPheedReply,
    handleDeletePheedReply,
  } = usePheedReply(refetch);
  const { handleClickBookmark } = useBookMark(data!, refetch);

  const { errorImage, isImageError, handleErrorImg, IMAGE_ERROR_MESSAGE } =
    useImageError();
  const { handleOpenModal, handleCloseModal } = useModal();
  useResize();

  const handleCloseDetailModal = () => {
    const { id, ...updateQuery } = query;

    push({ query: updateQuery }, undefined, { scroll: false });
  };

  const handleBookmark = () => {
    if (!profile) {
      handleOpenModal(<LoginLinkModal />)();
    } else {
      handleClickBookmark();
    }
  };

  if (!data) return null;

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <button type="button" onClick={handleCloseDetailModal}>
          <CloseIcon />
        </button>
        <S.BtnWrapper>
          <S.BookmarkBtn
            type="button"
            isBookmark={data.is_bookmark}
            onClick={handleBookmark}
          >
            {data.is_bookmark ? <BookmarkFullIcon /> : <BookmarkEmptyIcon />}
          </S.BookmarkBtn>
          {profile?.id === data.author.id && (
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
                              toast.success("피드 삭제 성공");
                              queryClient.invalidateQueries(
                                myPheedKeys.myPheeds(),
                              );
                              queryClient.invalidateQueries(
                                pheedKeys.suggestedPheeds,
                              );
                              queryClient.invalidateQueries(pheedKeys.pheeds());

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
          <Profile
            css={S.profile}
            src={data.author.profile_image}
            alt={`${data.author.nickname}님의 프로필 사진`}
          />
          <S.Nickname>{data.author.nickname}</S.Nickname>
        </S.ProfileWrapper>
        <S.ImgWrapper>
          <Image
            src={isImageError ? errorImage : data.image.image}
            alt={isImageError ? IMAGE_ERROR_MESSAGE : `${data.title} 사진`}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              marginBottom: "20px",
            }}
            onError={handleErrorImg}
          />
          <S.ImgCircle />
        </S.ImgWrapper>
        <S.ContentWrapper>
          <S.Title>{data.title}</S.Title>
          <S.Content>{data.content}</S.Content>
          <HashTag css={S.hashTag} hashTags={data.tag_options} />
        </S.ContentWrapper>
        <Comments
          css={S.CommentsWrapper}
          comments={data.replies}
          replyType={replyType}
          changeReplyType={changeReplyType}
          handleCancelPheedReply={handleCancelPheedReply}
          handleEditPheedReply={handleEditPheedReply}
          handleDeletePheedReply={handleDeletePheedReply}
        />
      </S.ScrollWrapper>
      <S.FormWrapper onSubmit={handleSubmit}>
        <Profile
          css={S.profile}
          src={profile?.profile_image ?? null}
          alt={`${profile?.nickname}님의 프로필 사진`}
        />
        <S.InputWrapper>
          <S.Input
            autoComplete="off"
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
