import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: 40px;

    & > div > label {
      ${theme.font.medium_14};
    }
  `}
`;

export const labelContent = css`
  margin-bottom: 20px;
`;

export const nicknameInput = (theme: Theme) => css`
  ${theme.font.regular_14};
  width: 100%;

  @media (min-width: ${theme.breakPoint.minTablet}) {
    ${theme.font.regular_15};
  }

  @media (min-width: ${theme.breakPoint.minDesktop}) {
    width: 386px;
  }
`;

export const emailLabelContent = css`
  margin-bottom: 40px;
`;

export const emailInput = (theme: Theme) => css`
  ${theme.font.regular_14};
  width: 100%;

  @media (min-width: ${theme.breakPoint.minDesktop}) {
    @media (min-width: ${theme.breakPoint.minTablet}) {
      ${theme.font.regular_15};
    }

    width: 386px;
  }
`;
