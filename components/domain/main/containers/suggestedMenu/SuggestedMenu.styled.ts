import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const SuggestedMenu = styled.section`
  margin-bottom: 48px;
`;

export const HeadingWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    column-gap: 8px;
    margin-bottom: 12px;

    @media (min-width: ${theme.breakPoint.minTablet}) {
      margin-bottom: 16px;
    }
  `}
`;

export const FilterSettingBtn = styled.button`
  ${({ theme }) => css`
    ${theme.font.regular_15};
    display: flex;
    align-items: center;
    column-gap: 4px;
    color: ${theme.color.grey_700};

    & > svg {
      width: 20px;
      height: 20px;
      fill: ${theme.color.grey_600};
    }

    & > span {
      display: none;
    }

    @media (min-width: ${theme.breakPoint.minTablet}) {
      & > span {
        display: unset;
      }
    }
  `}
`;

export const PheedWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    column-gap: 12px;
    overflow-x: auto;

    ::-webkit-scrollbar {
      display: none;
    }

    & > button {
      flex: 1;
      min-width: 169px;
      min-height: 169px;
      max-width: 169px;
      max-height: 169px;

      & > div {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        margin-bottom: 0;
      }
    }

    @media (min-width: ${theme.breakPoint.minTablet}) {
      height: 208px;

      & > button {
        min-width: 208px;
        min-height: 208px;
        max-width: 208px;
        max-height: 208px;
      }
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      height: 252px;
      column-gap: 16px;

      & > button {
        min-width: 252px;
        min-height: 252px;
        max-width: 252px;
        max-height: 252px;
      }
    }
  `}
`;
