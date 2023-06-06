import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  row-gap: 32px;
`;

export const CommentWrapper = styled.div`
  display: grid;
  grid-template-columns: 44px 1fr;
  column-gap: 16px;

  svg {
    width: 44px;
    height: 44px;
  }
`;

export const profile = css`
  width: 44px;
  height: 44px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  row-gap: 4px;
`;

export const Profile = styled.div`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    border-radius: 100px;
    background-color: ${theme.color.grey_900};
  `}
`;

export const Nickname = styled.span`
  ${({ theme }) => css`
    ${theme.font.semiBold_14};
  `}
`;

export const Comment = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_14};
  `}
`;
