import Link from "next/link";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Layout = styled.section`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_column_justifyC};
    width: 390px;
    height: 100vh;
    margin: 0 auto;
    padding: 0 20px;
  `}
`;

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_justifyC};
    margin-bottom: 52px;
  `}
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_column};
    row-gap: 12px;
    margin-bottom: 40px;
  `}
`;

export const FlexWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_justifySb_alignC};
    margin-bottom: 20px;
  `}
`;

export const CheckboxWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_alignC};
  `}
`;

export const KeepLogin = styled.label`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    margin-left: 8px;
    color: ${theme.color.grey_600};
  `}
`;

export const ResetPassword = styled(Link)`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    color: ${theme.color.grey_600};
    text-decoration: underline;
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

export const Or = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    ${theme.flexMixin.flex_justifyC_alignC};
    height: 20px;
    margin-bottom: 40px;
    color: ${theme.color.grey_700};

    ::before {
      content: "";
      display: block;
      width: 150px;
      height: 1px;
      margin-right: 12px;
      border-top: 1px solid ${theme.color.grey_300};
    }

    ::after {
      content: "";
      display: block;
      width: 150px;
      height: 1px;
      margin-left: 12px;
      border-top: 1px solid ${theme.color.grey_300};
    }
  `}
`;

export const SocialLoginBtnWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_justifySb};
    margin-bottom: 40px;
    padding: 0 13px;
  `}
`;

export const SocialLoginBtn = styled.button`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_column_alignC};
    row-gap: 8px;
    color: ${theme.color.grey_500};
  `}
`;

export const SignUpWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flexMixin.flex};
    column-gap: 8px;
    margin: 0 auto;
  `}
`;

export const SignUpQuestion = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    color: ${theme.color.grey_600};
  `}
`;

export const SignUp = styled(Link)`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    color: ${theme.color.grey_600};
    text-decoration: underline;
  `}
`;
