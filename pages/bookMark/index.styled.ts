import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Main = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    padding: 28px 20px;

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      width: calc(100vw - 248px);
      padding: 40px;
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

export const heading = (theme: Theme) => css`
  margin-bottom: 12px;

  @media (min-width: ${theme.breakPoint.minTablet}) {
    margin-bottom: 16px;
  }
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    @media (min-width: ${theme.breakPoint.minDesktop}) {
      width: 100%;
      height: calc(100vh - ${theme.constantCss.navHeight});
      overflow-y: scroll;
    }
  `}
`;
