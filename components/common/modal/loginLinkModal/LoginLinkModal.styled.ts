import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

export const LoginLinkModal = styled.div`
  ${({ theme }) => css`
    ${theme.font.bold_18};
    width: 292px;
    height: 180px;
    padding: 28px;
    border-radius: 5px;
    text-align: center;
    background-color: ${theme.color.white};
  `}
`;

export const BtnWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_justifyC};
    column-gap: 12px;
    margin-top: 28px;
  `}
`;

export const cancelBtn = (theme: Theme) => css`
  width: 100px;
  height: 40px;
  border: 1px solid ${theme.color.grey_300};
  color: ${theme.color.grey_700};
  background-color: ${theme.color.grey_100};
`;

export const link = (theme: Theme) => css`
  width: 100px;
  height: 40px;
  border: 1px solid ${theme.color.grey_300};
  color: ${theme.color.white};
  background-color: ${theme.color.blue_300};
`;
