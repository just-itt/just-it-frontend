import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { ArrowShortIcon } from "@icons/index";

export const DropdownBtn = styled.div`
  ${({ theme }) => css`
    ${theme.font.regular_15};
    position: relative;
  `}
`;

export const SelectValue = styled.button<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
    width: 220px;
    height: 40px;
    border: 1px solid ${theme.color.grey_300};
    border-radius: 100px;
    color: ${isSelected && `${theme.color.blue_200}`};

    @media (hover: hover) {
      :hover {
        background-color: ${theme.color.grey_100};
        transition: 0.5s;
      }
    }
  `}
`;

export const ListWrapper = styled.ul`
  ${({ theme }) => css`
    position: absolute;
    top: 44px;
    left: 6px;
    width: 220px;
    border: 1px solid ${theme.color.grey_300};
    border-radius: 5px;
    padding: 4px 1px;
    background-color: ${theme.color.white};
    z-index: ${theme.zIndex.dropdown};
  `}
`;

export const List = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    padding-left: 20px;

    @media (hover: hover) {
      :hover {
        background-color: ${theme.color.grey_100};
      }
    }
  `}
`;

export const Arrow = styled(ArrowShortIcon)<{ isopen: boolean }>`
  transform: ${({ isopen }) => (isopen ? "rotate(-180deg)" : "rotate(0deg)")};
  transition: 0.5s;
`;
