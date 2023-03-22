import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Setting = styled.div`
  padding: 28px 20px 0 20px;
`;

export const heading = css`
  margin-bottom: 40px;
`;

export const ProfileWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    svg {
      width: 80px;
      height: 80px;
      margin-right: 20px;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 36px;
      height: 36px;
      border: 1px solid ${theme.color.grey_300};
      border-radius: 5px;
    }

    button + button {
      margin-left: 12px;
    }
  `}
`;
