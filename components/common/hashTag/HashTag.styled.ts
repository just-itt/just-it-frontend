import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    column-gap: 8px;
    height: 36px;
    padding-left: 12px;

    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background-color: ${theme.color.grey_300};
      border-radius: 100px;
    }
  `}
`;

export const HashTag = styled.div`
  ${({ theme }) => css`
    ${theme.font.medium_14};
    display: flex;
    align-items: center;
    width: fit-content;
    height: 36px;
    border: 1px solid ${theme.color.grey_300};
    border-radius: 100px;
    padding: 8px 16px;
    color: ${theme.color.grey_700};
    background-color: ${theme.color.grey_100};
  `}
`;
