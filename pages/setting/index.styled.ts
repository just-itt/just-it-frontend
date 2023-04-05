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

export const ProfileWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 36px;
      height: 36px;
      border: 1px solid ${theme.color.grey_300};
      border-radius: 5px;

      svg {
        width: 20px;
        height: 20px;
        fill: ${theme.color.grey_500};
      }
    }

    button + button {
      margin-left: 12px;
    }
  `}
`;

export const Profile = styled.div`
  ${({ theme }) =>
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
      margin-right: 20px;
      border: 1px solid ${theme.color.grey_300};
      border-radius: 100px;

      svg {
        width: 32px;
        height: 32px;
        fill: ${theme.color.grey_500};
      }
    `}
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

export const nicknameLabelContent = css`
  margin-bottom: 40px;
`;

export const EmailIconWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 10px;
    left: 12px;
  }
`;

export const emailInput = css`
  width: 100%;
  padding-left: 44px;
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
