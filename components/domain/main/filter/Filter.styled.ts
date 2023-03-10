import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Filter = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px;
  column-gap: 10px;
`;

export const FilterWrapper = styled.ul<{ isFilterOpen: boolean }>`
  ${({ isFilterOpen }) => css`
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    column-gap: 10px;
    row-gap: 10px;
    /* height: ${isFilterOpen ? "140px" : "40px"}; */
    margin-bottom: 20px;
    /* overflow: hidden; */
    /* transition: height 0.5s ease; */
  `}
`;

export const FilterItem = styled.button<{ isSelect: boolean }>`
  ${({ theme, isSelect }) => css`
    height: 40px;
    border: 1px solid
      ${isSelect ? `${theme.color.blue_200}` : `${theme.color.grey_300}`};
    border-radius: 100px;
    padding: 8px 20px;
    color: ${isSelect ? `${theme.color.blue_200}` : `${theme.color.grey_700}`};

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
      transform: ${isFilterOpen && "rotate(180deg)"};
      transition: transform 0.2s ease;
    }
  `}
`;
