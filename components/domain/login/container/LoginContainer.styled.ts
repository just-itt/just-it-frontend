import Link from "next/link";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Layout = styled.section`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_column};
    width: 390px;
    margin: 0 auto;
    padding: 150px 20px 0 20px;
  `}
`;

export const LogoWrapper = styled(Link)`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_justifyC};
    margin-bottom: 52px;
  `}
`;

export const KakaoLoginBtn = styled.button`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_justifyC_alignC};
    ${theme.font.regular_15};
    display: flex;
    column-gap: 8px;
    width: 100%;
    height: 52px;
    margin-bottom: 40px;
    border-radius: 5px;
    background-color: ${theme.color.kakao};

    svg {
      width: 24px;
      height: 24px;
    }
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
      width: 110px;
      height: 1px;
      margin-right: 12px;
      border-top: 1px solid ${theme.color.grey_300};
    }

    ::after {
      content: "";
      display: block;
      width: 110px;
      height: 1px;
      margin-left: 12px;
      border-top: 1px solid ${theme.color.grey_300};
    }
  `}
`;

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

export const ResetPassword = styled(Link)`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    display: block;
    margin-bottom: 20px;
    color: ${theme.color.grey_500};
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
