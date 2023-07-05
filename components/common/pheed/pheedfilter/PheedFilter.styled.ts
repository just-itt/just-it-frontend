import styled from "@emotion/styled";
import { Theme, css } from "@emotion/react";

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: calc(100vh - 100px);

    @media (min-width: ${theme.breakPoint.minTablet}) {
      overflow-y: scroll;

      ::-webkit-scrollbar {
        display: none;
      }
    }
  `}
`;

export const margin = (theme: Theme) => css`
  margin-bottom: 32px;

  @media (min-width: ${theme.breakPoint.minTablet}) {
    max-width: 520px;
  }
`;

export const textArea = (theme: Theme) => css`
  @media (min-width: ${theme.breakPoint.minTablet}) {
    height: 300px;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const FilterItem = styled.div<{ isSelect: boolean }>`
  ${({ theme, isSelect }) => css`
    & > label {
      ${theme.font.regular_14};
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      border: 1px solid
        ${isSelect ? theme.color.blue_300 : theme.color.grey_300};
      border-radius: 100px;
      padding: 8px 20px;
      color: ${isSelect ? theme.color.blue_300 : theme.color.grey_700};
      background-color: ${isSelect
        ? theme.color.blue_100
        : theme.color.grey_100};

      :hover {
        background-color: ${theme.color.grey_200};
        cursor: pointer;
      }
    }

    & > input {
      display: none;
    }
  `}
`;
