import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Setting = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: calc(100vh - 72px);
    margin: 0 auto;
    padding: 20px;
    overflow-y: auto;

    @media (min-width: ${theme.breakPoint.minTablet}) {
      & > div {
        width: 386px;
      }
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      display: flex;
      justify-content: center;
    }
  `}
`;

export const heading = css`
  margin-bottom: 40px;
`;

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

export const emailLabelContent = css`
  margin-bottom: 40px;
`;

export const emailInput = css`
  width: 100%;
`;

export const nicknameInput = css`
  width: 100%;
`;

export const division = css`
  margin-bottom: 40px;
`;

export const PasswordHint = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    margin-bottom: 40px;
    color: ${theme.color.grey_500};
  `}
`;

export const saveBtn = css`
  margin-bottom: 80px;
`;
