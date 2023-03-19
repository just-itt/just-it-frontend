import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  row-gap: 32px;
`;

export const CommentWrapper = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  column-gap: 12px;

  svg {
    width: 40px;
    height: 40px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  row-gap: 4px;
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
