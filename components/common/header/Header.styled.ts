import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Header = styled.div`
  ${({ theme }) => css`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;
    border-bottom: 1px solid ${theme.color.grey_200};
    padding: 0 28px;
    background-color: ${theme.color.white};
    z-index: ${theme.zIndex.header};
  `}
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 104px;
  height: 52px;
`;

export const MenuBtn = styled.button`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    margin-right: 20px;

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      display: none;
    }
  `}
`;

export const SearchWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: 40px;
    border: 1px solid ${theme.color.grey_300};
    border-radius: 100px;
    padding-left: 12px;
    background-color: ${theme.color.grey_100};

    @media (min-width: ${theme.breakPoint.minTablet}) {
      column-gap: 12px;
      width: 240px;
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      column-gap: 8px;
      width: 380px;
    }
  `}
`;

export const Search = styled.input`
  ${({ theme }) => css`
    height: 24px;
    background-color: inherit;

    @media (min-width: ${theme.breakPoint.minTablet}) {
      width: 184px;
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      width: 324px;
    }
  `}
`;

export const FlexWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    @media (min-width: ${theme.breakPoint.minMobile}) {
      column-gap: 24px;
    }

    @media (min-width: ${theme.breakPoint.minTablet}) {
      column-gap: 16px;
    }
  `}
`;

export const CreatePheed = styled(Link)`
  ${({ theme }) => css`
    ${theme.font.medium_15};
    ${theme.flexMixin.flex_justifyC_alignC};
    width: 99px;
    height: 40px;
    border-radius: 100px;
    background-color: ${theme.color.blue_200};
    color: ${theme.color.white};
  `}
`;

export const MobileLoginWrapper = styled.div`
  ${({ theme }) =>
    css`
      ${theme.flexMixin.flex_alignC};
      column-gap: 20px;
    `}
`;

export const LoginBtn = styled(Link)`
  ${({ theme }) => css`
    ${theme.font.medium_15};

    padding: 6px 18px;
    border-radius: 100px;
    color: ${theme.color.white};
    background-color: ${theme.color.blue_200};
  `}
`;
