import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const AuthCodeInputWrapper = styled.div`
  position: relative;
`;

export const AuthCodeBtn = styled.button`
  ${({ theme }) => css`
    ${theme.font.medium_15};
    position: absolute;
    top: 12px;
    right: 12px;
    color: ${theme.color.blue_300};
  `}
`;

export const RetryBtn = styled.button`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    margin-top: 4px;
    color: ${theme.color.grey_500};
    text-decoration: underline;
  `}
`;
