import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Main = styled.div<{ isClickPheed: boolean }>`
  ${({ theme, isClickPheed }) => css`
    position: relative;
    width: 100%;
    height: calc(var(--vh) * 100 - 72px);
    overflow-y: auto;

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      display: flex;
      overflow-y: ${isClickPheed && "visible"};
    }
  `}
`;

export const PheedWrapper = styled.div<{ isClickPheed: boolean }>`
  ${({ theme, isClickPheed }) => css`
    @media (min-width: ${theme.breakPoint.minDesktop}) {
      width: ${isClickPheed ? "calc(100% - 523px)" : "100%"};
      border-right: ${isClickPheed && `1px solid ${theme.color.grey_200}`};
      overflow-y: ${isClickPheed ? "auto" : "visible"};
    }
  `}
`;

export const PaddingWrapper = styled.div`
  ${({ theme }) => css`
    padding: 20px;

    @media (min-width: ${theme.breakPoint.minTablet}) {
      padding: 40px;
    }
  `}
`;

export const heading = (theme: Theme) => css`
  margin-bottom: 12px;

  @media (min-width: ${theme.breakPoint.minTablet}) {
    margin-bottom: 16px;
  }
`;
