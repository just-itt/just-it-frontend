import Link from "next/link";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Nav = styled.ul<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    background-color: ${theme.color.white};
    transform: translateX(${isOpen ? "100%" : "0%"});
    z-index: ${theme.zIndex.nav};
    transition: transform 0.3s ease-out;

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      position: fixed;
      top: ${theme.constantCss.navHeight};
      right: 0;
      bottom: 0;
      left: 0;
      display: unset;
      width: 248px;
      height: calc(100vh - ${theme.constantCss.navHeight});
      border-right: 1px solid ${theme.color.grey_200};
      padding: 12px 0;
      transform: translateX(0%);
      transition: unset;
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_justifySb_alignC};
    height: 60px;
    margin-bottom: 12px;
    border-bottom: 1px solid ${theme.color.grey_200};
    padding: 0 20px;

    & > svg {
      width: 64px;
      height: 52px;
    }

    @media (min-width: ${theme.breakPoint.minTablet}) {
      height: ${theme.constantCss.navHeight};
      margin-bottom: 28px;
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      display: none;
    }
  `}
`;

export const CloseBtn = styled.button`
  ${({ theme }) => css`
    svg {
      width: 20px;
      height: 20px;
      fill: ${theme.color.grey_900};
    }
  `}
`;

export const NavItem = styled.li`
  ${({ theme }) => css`
    @media (min-width: ${theme.breakPoint.minDesktop}) {
      padding: 0 12px;

      svg {
        width: 24px;
        height: 24px;
      }
    }
  `}
`;

export const NavMenu = styled(Link)<{ isclick: string }>`
  ${({ theme, isclick }) => css`
    ${theme.font.semiBold_16};
    ${theme.flexMixin.flex_alignC};
    width: 100%;
    height: 48px;
    padding: 0 20px;
    color: ${isclick === "true"
      ? `${theme.color.blue_300}`
      : `${theme.color.grey_700}`};
    background-color: ${isclick === "true"
      ? `${theme.color.blue_navBg}`
      : "inherit"};

    svg {
      display: none;
    }

    @media (min-width: ${theme.breakPoint.minTablet}) {
      height: 50px;
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      ${theme.font.medium_15};
      column-gap: 12px;
      width: 224px;
      height: 52px;
      border-radius: 5px;
      padding-left: 12px;

      svg {
        display: block;
        fill: ${isclick === "true"
          ? `${theme.color.blue_300}`
          : `${theme.color.grey_500}`};
      }

      @media (hover: hover) {
        :hover {
          background-color: ${theme.color.grey_100};
        }
      }
    }
  `}
`;
