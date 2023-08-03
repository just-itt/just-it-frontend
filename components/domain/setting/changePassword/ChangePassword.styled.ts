import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

export const heading = css`
  margin-bottom: 40px;
`;

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: 40px;
    border-bottom: 1px solid ${theme.color.grey_300};

    & > div > label {
      ${theme.font.medium_14};
    }
  `}
`;

export const labelContent = (theme: Theme) => css`
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: ${theme.breakPoint.minDesktop}) {
    width: 386px;
  }
`;

export const input = (theme: Theme) => css`
  & > input {
    ${theme.font.regular_14};
  }

  @media (min-width: ${theme.breakPoint.minTablet}) {
    & > input {
      ${theme.font.regular_15};
    }
  }
`;

export const division = css`
  margin-bottom: 40px;
`;

export const PasswordHint = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    display: block;
    margin-bottom: 40px;
    color: ${theme.color.grey_500};
  `}
`;

export const saveBtn = css`
  margin-bottom: 40px;
`;
