import React from "react";

import * as S from "./Comments.styled";

interface CommentsProps {
  className?: string;
  comments: {
    profileImgSrc?: string;
    nickname: string;
    comment: string;
  }[];
}

const Comments = ({ className, comments }: CommentsProps) => {
  return (
    <S.Wrapper className={className}>
      {comments.map(({ profileImgSrc, nickname, comment }, i) => (
        <S.CommentWrapper key={i}>
          {profileImgSrc ? <S.Profile /> : <S.Profile />}
          <S.ContentWrapper>
            <S.Nickname>{nickname}</S.Nickname>
            <S.Comment>{comment}</S.Comment>
          </S.ContentWrapper>
        </S.CommentWrapper>
      ))}
    </S.Wrapper>
  );
};

export default Comments;
