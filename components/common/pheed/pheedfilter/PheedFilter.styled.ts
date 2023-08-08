import styled from "@emotion/styled";
import { Theme, css } from "@emotion/react";

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: 120px;

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      overflow-y: scroll;
    }
  `}
`;

export const Section = styled.section`
  ${({ theme }) => css`
    margin-bottom: 40px;

    @media (min-width: ${theme.breakPoint.minTablet}) {
      margin-bottom: 60px;
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    ${theme.font.semiBold_16};
    margin-bottom: 24px;
    color: ${theme.color.grey_900};
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
  margin-bottom: 24px;

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

export const division = css`
  margin-bottom: 24px;
`;
