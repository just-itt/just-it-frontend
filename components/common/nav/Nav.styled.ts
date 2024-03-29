import { Theme, css } from "@emotion/react";
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

export const Wrapper = styled.li`
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

export const ProfileWrapper = styled.li`
  ${({ theme }) => css`
    ${theme.font.semiBold_16};
    ${theme.flexMixin.flex_alignC};
    padding: 12px 0 12px 20px;
    border-bottom: 1px solid ${theme.color.grey_300};

    & > a {
      ${theme.flexMixin.flex_alignC};
      color: ${theme.color.grey_900};

      & > svg {
        width: 20px;
        height: 20px;
        margin-left: 4px;
        fill: ${theme.color.grey_900};
        transform: rotate(-90deg);
      }
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      display: none;
    }
  `}
`;

export const profile = (theme: Theme) => css`
  width: 48px;
  height: 48px;
  margin-right: 16px;
  border: 1px solid ${theme.color.grey_300};

  a {
    color: ${theme.color.grey_900};
  }

  svg {
    width: 20px;
    height: 20px;
  }
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

export const NavMenu = styled.button<{ isclick: string }>`
  ${({ theme, isclick }) => css`
    ${theme.font.medium_15};
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
      ${isclick === "true" ? theme.font.semiBold_15 : theme.font.medium_15};
      column-gap: 8px;
      width: 224px;
      height: 52px;
      border-radius: 5px;
      padding-left: 12px;

      svg {
        display: block;
      }

      svg > path {
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

export const IconWrapper = styled.li`
  ${({ theme }) => css`
    width: 24px;
    height: 24px;

    svg > path {
      fill: ${theme.color.grey_500};
    }
  `}
`;
