import React from "react";

import { DropdownBtn, Profile } from "@components/index";
import { useGetMyProfile } from "@service/index";
import { MoreIcon } from "@icons/index";
import type { Comment } from "types";
import * as S from "./Comments.styled";

interface CommentsProps {
  className?: string;
  comments: Comment[];
  replyType: "create" | "edit";
  changeReplyType: () => void;
  handleCancelPheedReply: () => void;
  handleEditPheedReply: (
    content: string,
    userId: number,
    postId: number,
  ) => void;
  handleDeletePheedReply: (replyId: number) => () => void;
}

const Comments = ({
  className,
  comments,
  replyType,
  changeReplyType,
  handleCancelPheedReply,
  handleEditPheedReply,
  handleDeletePheedReply,
}: CommentsProps) => {
  const { data: profile } = useGetMyProfile();

  const handleEdit =
    (content: string, replyId: number, postId: number) => () => {
      changeReplyType();
      handleEditPheedReply(content, replyId, postId);
    };

  const handleCancel = () => {
    changeReplyType();
    handleCancelPheedReply();
  };

  return (
    <S.PositionWrapper>
      <S.Wrapper className={className}>
        {comments.length === 0 ? (
          <S.NoCommentWrapper>
            <div>댓글이 없어요.</div>
            <div>첫번째 댓글을 달아보시겠어요?</div>
          </S.NoCommentWrapper>
        ) : (
          comments.map(
            (
              {
                author: { profile_image, nickname, id },
                content,
                id: replyId,
                post_id,
              },
              i,
            ) => (
              <S.CommentWrapper key={i}>
                <Profile
                  css={S.profile}
                  src={profile_image ?? null}
                  alt={`${nickname}님의 프로필 사진`}
                />
                <S.ContentWrapper>
                  <S.Nickname>{nickname}</S.Nickname>
                  <S.Comment>{content}</S.Comment>
                </S.ContentWrapper>
                {profile?.id === id && (
                  <DropdownBtn
                    css={S.dropdown}
                    btnRender={<MoreIcon />}
                    dropdownItems={[
                      {
                        label: "수정",
                        value: "edit",
                        handler: handleEdit(content, replyId, post_id),
                      },
                      {
                        label: "삭제",
                        value: "delete",
                        handler: handleDeletePheedReply(replyId),
                      },
                    ]}
                  />
                )}
              </S.CommentWrapper>
            ),
          )
        )}
      </S.Wrapper>
      {replyType === "edit" && (
        <S.EditNotice>
          댓글을 수정하고 있습니다.
          <button type="button" onClick={handleCancel}>
            취소
          </button>
        </S.EditNotice>
      )}
    </S.PositionWrapper>
  );
};

export default Comments;
