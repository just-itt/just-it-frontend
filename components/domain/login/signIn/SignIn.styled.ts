import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const marginBottom = css`
  margin-bottom: 12px;
`;

export const PasswordHint = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    display: block;
    margin-bottom: 40px;
    color: ${theme.color.grey_500};
  `}
`;

export const LoginBtn = styled.button`
  ${({ theme }) => css`
    ${theme.font.semiBold_16};
    width: 100%;
    height: 52px;
    margin-bottom: 40px;
    border-radius: 5px;
    color: ${theme.color.white};
    background-color: ${theme.color.blue_200};
  `}
`;

export const SignUpWrapper = styled.div`
  display: flex;
  column-gap: 8px;
  margin: 0 auto;
`;

export const SignUpQuestion = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    color: ${theme.color.grey_600};
  `}
`;

export const SignUp = styled.button`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    color: ${theme.color.blue_300};
    text-decoration: underline;
  `}
`;
