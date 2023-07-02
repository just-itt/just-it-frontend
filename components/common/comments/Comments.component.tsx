import React from "react";

import { Profile } from "@components/index";
import { TrashIcon } from "@icons/index";
import type { Comment } from "types";
import * as S from "./Comments.styled";

interface CommentsProps {
  className?: string;
  comments: Comment[];
  handleDeletePheedReply: (i: number) => () => void;
}

const Comments = ({
  className,
  comments,
  handleDeletePheedReply,
}: CommentsProps) => {
  return (
    <S.Wrapper className={className}>
      {comments.length === 0 ? (
        <S.NoCommentWrapper>
          <div>댓글이 없어요.</div>
          <div>첫번째 댓글을 달아보시겠어요?</div>
        </S.NoCommentWrapper>
      ) : (
        comments.map(
          ({ author: { profile_image, nickname }, content, id }, i) => (
            <S.CommentWrapper key={i}>
              {profile_image ? (
                <Profile
                  css={S.profile}
                  src={profile_image}
                  alt={`${nickname}님의 프로필 사진`}
                />
              ) : (
                <S.Profile />
              )}
              <S.ContentWrapper>
                <S.Nickname>{nickname}</S.Nickname>
                <S.Comment>{content}</S.Comment>
              </S.ContentWrapper>
              <S.BtnWrapper>
                <button type="button" onClick={handleDeletePheedReply(id)}>
                  <TrashIcon />
                </button>
              </S.BtnWrapper>
            </S.CommentWrapper>
          ),
        )
      )}
    </S.Wrapper>
  );
};

export default Comments;
