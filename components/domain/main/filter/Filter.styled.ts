import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Filter = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    column-gap: 10px;
    margin-bottom: 12px;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 40px;
      width: 60px;
      height: 100%;
      background: linear-gradient(to right, rgba(255, 255, 255, 0), #fff);
    }

    @media (min-width: ${theme.breakPoint.minTablet}) {
      margin-bottom: 16px;
    }
  `}
`;

export const FilterWrapper = styled.div<{ isFilterOpen: boolean }>`
  ${({ isFilterOpen }) => css`
    display: flex;
    flex-wrap: ${isFilterOpen ? "wrap" : "nowrap"};
    column-gap: 10px;
    row-gap: 10px;
    width: calc(100% - 40px);
    overflow-x: ${isFilterOpen ? "visible" : "scroll"};
    white-space: nowrap;
  `}
`;

export const FilterItem = styled.button<{ isSelect: boolean }>`
  ${({ theme, isSelect }) => css`
    flex-grow: 1;
    height: 40px;
    border: 1px solid
      ${isSelect ? `${theme.color.blue_300}` : `${theme.color.grey_300}`};
    border-radius: 100px;
    padding: 8px 20px;
    color: ${isSelect ? `${theme.color.blue_300}` : `${theme.color.grey_700}`};
    background-color: ${isSelect && `${theme.color.blue_100}`};

    @media (hover: hover) {
      :hover {
        background-color: ${!isSelect && theme.color.grey_200};
      }
    }
  `}
`;

export const OpenBtn = styled.button<{ isFilterOpen: boolean }>`
  ${({ theme, isFilterOpen }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid ${theme.color.grey_300};
    border-radius: 100px;
    background-color: ${theme.color.grey_100};
    transition: transform 0.2s ease;

    & > svg {
      width: 17px;
      height: 17 px;
      fill: ${theme.color.grey_700};
      transform: ${isFilterOpen ? "rotate(90deg)" : "rotate(270deg)"};
      transition: transform 0.2s ease;
    }
  `}
`;
