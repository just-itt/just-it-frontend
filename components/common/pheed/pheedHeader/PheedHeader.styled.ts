import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Header = styled.header`
  ${({ theme }) => css`
    position: sticky;
    top: 0;
    min-width: 390px;
    height: ${theme.constantCss.navHeight};
    margin-bottom: 28px;
    border-bottom: 1px solid ${theme.color.grey_200};
    padding: 0 20px;
    background-color: ${theme.color.white};

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      position: relative;
    }
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_justifySb_alignC};
    max-width: 1080px;
    height: 100%;
    margin: 0 auto;

    & > div {
      ${theme.flexMixin.flex_alignC};
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      padding: 0;
    }
  `}
`;

export const link = css`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakPoint.minTablet}) {
      display: block;
    }
  `}
`;

export const CreateBtn = styled.button`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_justifyC_alignC};
    ${theme.font.bold_16};
    width: 62px;
    height: 36px;
    color: ${theme.color.blue_300};

    :disabled {
      opacity: 0.3;
    }

    @media (min-width: ${theme.breakPoint.minTablet}) {
      ${theme.font.semiBold_15};
      width: 79px;
      height: 40px;
      border-radius: 100px;
      color: ${theme.color.white};
      background-color: ${theme.color.blue_300};
    }
  `}
`;
