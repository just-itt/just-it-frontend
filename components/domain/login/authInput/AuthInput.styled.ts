import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Label = styled.label`
  position: absolute;
  top: 8px;
  left: 12px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    ${theme.font.medium_15};
    width: 100%;
    height: 48px;
    border: 1px solid ${theme.color.grey_300};
    border-radius: 5px;
    padding: 30px 12px 12px 12px;
  `}
`;

export const PasswordBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
`;
