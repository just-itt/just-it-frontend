import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 268px;
    border-radius: 5px;
    padding: 28px;
    background-color: ${theme.color.grey_000};
    opacity: 1;
  `}
`;

export const Content = styled.p`
  ${({ theme }) => css`
    ${theme.font.bold_18};
    margin-bottom: 28px;
  `}
`;

export const BtnWrapper = styled.div`
  display: flex;
  column-gap: 12px;

  button {
    min-width: 100px;
  }
`;

export const cancelBtn = (theme: Theme) => css`
  border: 1px solid ${theme.color.grey_300};
  color: ${theme.color.grey_700};
  background-color: ${theme.color.grey_100};
`;
