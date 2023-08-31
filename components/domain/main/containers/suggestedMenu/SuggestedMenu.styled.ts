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
  `}
`;

export const FilterSetting = styled.span`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakPoint.minTablet}) {
      display: unset;
    }
  `}
`;

export const MobileFilterResetBtn = styled.button`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_justifyC_alignC};

    svg {
      width: 20px;
      height: 20px;
    }

    svg > path {
      fill: ${theme.color.grey_600};
    }

    &:disabled {
      transition: transform 0.5s ease-in-out;
      transform: rotate(360deg);
    }

    @media (min-width: ${theme.breakPoint.minTablet}) {
      display: none;
    }
  `}
`;

export const PheedWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    column-gap: 12px;
    overflow-x: auto;

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
      margin-bottom: 28px;

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

export const ReloadBtnWrapper = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakPoint.minTablet}) {
      ${theme.flexMixin.flex_justifyC};
    }
  `}
`;

export const ReloadBtn = styled.button<{ isLoading: boolean }>`
  ${({ theme, isLoading }) => css`
    border: 1px solid ${theme.color.grey_300};
    border-radius: 5px;
    background-color: ${theme.color.grey_100};

    svg > path {
      fill: ${theme.color.grey_600};
    }

    @media (hover: Hover) {
      :hover {
        background-color: ${theme.color.grey_200};
      }
    }

    @media (min-width: ${theme.breakPoint.minTablet}) {
      ${isLoading
        ? theme.flexMixin.flex_justifyC
        : theme.flexMixin.flex_justifySb_alignC};
      ${theme.font.medium_15};
      width: 150px;
      height: 40px;
      padding: 8px 20px;
      color: ${theme.color.grey_700};

      svg {
        width: 20px;
        height: 20px;
      }
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      padding: 10px 20px;
    }
  `}
`;
