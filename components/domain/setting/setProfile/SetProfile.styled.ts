import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    margin-right: 20px;
    border: 1px solid ${theme.color.grey_300};
    border-radius: 100px;
    overflow: hidden;
  `}
`;

export const personIcon = (theme: Theme) => css`
  width: 32px;
  height: 32px;
  fill: ${theme.color.grey_500};
`;

export const ProfileInput = styled.input`
  display: none;
`;

export const LabelWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    column-gap: 12px;

    svg {
      width: 17px;
      height: 17px;
      fill: ${theme.color.grey_600};
    }
  `}
`;

const buttonMixin = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid ${theme.color.grey_300};
  border-radius: 5px;
  cursor: pointer;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    ${buttonMixin(theme)}
  `}
`;

export const DeleteBtn = styled.button`
  ${({ theme }) => css`
    ${buttonMixin(theme)}
  `}
`;
