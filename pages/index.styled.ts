import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Main = styled.div`
  ${({ theme }) => css`
    padding: 40px;

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      width: calc(100vw - 248px);
    }
  `}
`;

export const PheedWrapper = styled.div`
  ${({ theme }) => css`
    width: 120px;

    @media (min-width: ${theme.breakPoint.minTablet}) {
      width: 229px;
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      width: 252px;
    }
  `}
`;
