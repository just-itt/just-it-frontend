import styled from "@emotion/styled";
import { Theme, css } from "@emotion/react";

export const layout = (theme: Theme) => css`
  @media (min-width: ${theme.breakPoint.minTablet}) {
    display: flex;
    column-gap: 40px;
  }
`;

export const imgUpload = (theme: Theme) => css`
  margin-bottom: 32px;

  @media (min-width: ${theme.breakPoint.minTablet}) {
    max-width: 520px;
    height: 390px;
  }
`;

export const Canvas = styled.canvas`
  width: 100px;
  height: 100px;
`;