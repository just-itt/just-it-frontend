import styled from "@emotion/styled";
import { Theme, css } from "@emotion/react";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: fit-content;
    margin: 0 auto;
    padding: 0 20px;

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      display: flex;
      column-gap: 40px;
      width: 100%;
      height: 100%;
    }
  `}
`;

export const imgUpload = (theme: Theme) => css`
  margin-bottom: 40px;

  @media (min-width: ${theme.breakPoint.minTablet}) {
    max-width: 520px;
    height: 390px;
  }

  @media (min-width: ${theme.breakPoint.minDesktop}) {
    margin-bottom: 0px;
  }
`;
