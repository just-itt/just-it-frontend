import Link from "next/link";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { BookmarkIcon, PencilIcon, SettingIcon, TagIcon } from "@icons/index";

export const Nav = styled.ul`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.color.white};
    z-index: ${theme.zIndex.nav};

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      position: sticky;
      top: 72px;
      right: 0;
      bottom: 0;
      left: 0;
      width: 248px;
      height: calc(100vh - 88px);
      border-right: 1px solid ${theme.color.grey_200};
      padding: 12px 0;
      background-color: ${theme.color.white};
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_justifySb};
    margin-bottom: 12px;
    padding: 0 20px;
    border-bottom: 1px solid ${theme.color.grey_200};

    @media (min-width: ${theme.breakPoint.minTablet}) {
      margin-bottom: 28px;
    }
  `}
`;

export const NavItem = styled.li`
  ${({ theme }) => css`
    @media (min-width: ${theme.breakPoint.minDesktop}) {
      padding: 12px 0;
      padding: 4px 12px;
    }
  `}
`;

export const NavMenu = styled(Link)<{ isSelect: boolean }>`
  ${({ theme, isSelect }) => css`
    ${theme.flexMixin.flex_alignC};
    ${theme.font.semiBold_16};
    width: 100%;
    height: 48px;
    padding-left: 20px;
    color: ${isSelect ? `${theme.color.blue_200}` : `${theme.color.grey_900}`};
    background-color: ${isSelect ? `${theme.color.blue_navBg}` : "inherit"};

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      ${theme.font.medium_15};
      display: flex;
      align-items: center;
      column-gap: 12px;
      width: 224px;
      height: 52px;
      border-radius: 5px;
      padding-left: 12px;
      color: ${isSelect
        ? `${theme.color.blue_200}`
        : `${theme.color.grey_500}`};
    }

    @media (hover: hover) {
      :hover {
        background-color: ${theme.color.grey_100};
      }
    }
  `}
`;

export const CustomTagIcon = styled(TagIcon)<{ isSelect: boolean }>`
  ${({ theme, isSelect }) =>
    css`
      fill: ${isSelect ? `${theme.color.blue_200}` : `${theme.color.grey_500}`};
    `}
`;

export const CustomPencilIcon = styled(PencilIcon)<{ isSelect: boolean }>`
  ${({ theme, isSelect }) =>
    css`
      fill: ${isSelect ? `${theme.color.blue_200}` : `${theme.color.grey_500}`};
    `}
`;

export const CustomBookmarkIcon = styled(BookmarkIcon)<{ isSelect: boolean }>`
  ${({ theme, isSelect }) =>
    css`
      fill: ${isSelect ? `${theme.color.blue_200}` : `${theme.color.grey_500}`};
    `}
`;

export const CustomSettingIcon = styled(SettingIcon)<{ isSelect: boolean }>`
  ${({ theme, isSelect }) =>
    css`
      fill: ${isSelect ? `${theme.color.blue_200}` : `${theme.color.grey_500}`};
    `}
`;
