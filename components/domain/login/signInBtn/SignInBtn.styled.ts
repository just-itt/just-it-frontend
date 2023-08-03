import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const SignInWrapper = styled.div`
  display: flex;
  column-gap: 8px;
  margin: 0 auto;
`;

export const SignInQuestion = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_15};
    color: ${theme.color.grey_600};
  `}
`;

export const SignIn = styled.button`
  ${({ theme }) => css`
    ${theme.font.regular_15};
    color: ${theme.color.blue_300};
    text-decoration: underline;
  `}
`;
