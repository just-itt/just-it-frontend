import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const PheedLayout = styled.section`
  ${({ theme }) => css`
    min-width: 390px;
    max-width: 1080px;
    height: calc(var(--vh) * 100);
    margin: 0 auto;
    overflow-y: scroll;

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      overflow-y: hidden;
    }
  `}
`;
