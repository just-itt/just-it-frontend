import styled from "@emotion/styled";
import { Theme, css } from "@emotion/react";

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: 120px;

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      height: calc(var(--vh) * 100 + 100px);
      overflow-y: scroll;

      ::-webkit-scrollbar {
        display: none;
      }
    }
  `}
`;

export const input = (theme: Theme) => css`
  ::placeholder {
    ${theme.font.regular_14};
    color: ${theme.color.grey_500};
  }

  @media (min-width: ${theme.breakPoint.minTablet}) {
    ::placeholder {
      ${theme.font.regular_15};
    }
  }
`;

export const labelcontent = (theme: Theme) => css`
  margin-bottom: 32px;

  & > label {
    ${theme.font.semiBold_14};
  }

  @media (min-width: ${theme.breakPoint.minTablet}) {
    max-width: 520px;

    & > label {
      ${theme.font.semiBold_15};
    }
  }
`;

export const textArea = (theme: Theme) => css`
  ::placeholder {
    ${theme.font.regular_14};
    color: ${theme.color.grey_500};
  }

  @media (min-width: ${theme.breakPoint.minTablet}) {
    height: 300px;

    ::placeholder {
      ${theme.font.regular_15};
    }
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
