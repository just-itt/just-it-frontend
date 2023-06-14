import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const MainLayout = styled.div`
  position: relative;
  min-width: 360px;
  margin: 0 auto;
`;

export const BodyLayout = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column;

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      width: calc(100% - 248px);
      margin-left: 248px;
    }
  `}
`;
