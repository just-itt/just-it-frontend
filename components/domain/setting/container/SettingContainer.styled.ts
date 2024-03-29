import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Setting = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: calc(100vh - 72px);
    margin: 0 auto;
    padding: 28px 20px 20px 20px;
    overflow-y: auto;

    @media (min-width: ${theme.breakPoint.minTablet}) {
      padding: 40px;

      & > div {
        width: 386px;
      }
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      display: flex;
      justify-content: center;

      & > div {
        width: 788px;
      }
    }
  `}
`;
