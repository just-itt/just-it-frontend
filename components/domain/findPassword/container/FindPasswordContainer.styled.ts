import Link from "next/link";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Layout = styled.form`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  padding: 120px 20px 0 20px;
`;

export const LogoWrapper = styled(Link)`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_justifyC};
    margin-bottom: 52px;
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.font.bold_20};
    margin-bottom: 4px;
    text-align: center;
  `}
`;

export const P = styled.p`
  ${({ theme }) => css`
    ${theme.font.regular_15};
    margin-bottom: 40px;
    color: ${theme.color.grey_600};
    text-align: center;
  `}
`;

export const input = css`
  margin-bottom: 12px;
`;

export const passwordChangeBtn = css`
  width: 100%;
  height: 48px;
`;

export const marginBottom = (isCheckAuthCode: boolean) => css`
  margin-bottom: ${isCheckAuthCode ? "12px" : "40px"};
`;

export const PasswordHint = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    display: block;
    margin-bottom: 40px;
    color: ${theme.color.grey_500};
  `}
`;
