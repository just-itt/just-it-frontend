import { css } from "@emotion/react";
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

export const nicknameInput = css`
  width: 388px;
`;

export const emailLabelContent = css`
  margin-bottom: 40px;
`;

export const emailInput = css`
  width: 388px;
`;
