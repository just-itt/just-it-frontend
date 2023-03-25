import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Section = styled.section`
  ${({ theme }) => css`
    min-width: 390px;
    max-width: 1080px;
    margin: 0 auto;
    padding: 32px 16px 0 16px;

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      padding: 32px 0 0 0;
    }
  `}
`;
