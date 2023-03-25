import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Main = styled.div`
  ${({ theme }) => css`
    width: 100%;

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      width: calc(100vw - 248px);
    }
  `}
`;

export const FlexWrapper = styled.div`
  ${({ theme }) => css`
    @media (min-width: ${theme.breakPoint.minDesktop}) {
      display: flex;
      height: calc(100vh - ${theme.constantCss.navHeight});
    }
  `}
`;

export const ContentWrapper = styled.div<{ isClickPheed: boolean }>`
  ${({ theme, isClickPheed }) => css`
    @media (min-width: ${theme.breakPoint.minDesktop}) {
      width: ${isClickPheed ? "calc(100% - 536px)" : "100%"};
      height: calc(100vh - ${theme.constantCss.navHeight});
      padding: 40px;
      overflow-y: scroll;
    }
  `}
`;
