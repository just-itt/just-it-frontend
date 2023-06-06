import React from "react";

import { Profile } from "@components/index";
import type { Comment } from "types";
import * as S from "./Comments.styled";

interface CommentsProps {
  className?: string;
  comments: Comment[];
}

const Comments = ({ className, comments }: CommentsProps) => {
  return (
    <S.Wrapper className={className}>
      {comments.map(({ author: { profile_image, nickname }, content }, i) => (
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
        </S.CommentWrapper>
      ))}
    </S.Wrapper>
  );
};

export default Comments;
