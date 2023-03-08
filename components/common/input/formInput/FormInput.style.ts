import { css } from "@emotion/react";
import styled from "@emotion/styled";

import type * as type from "types/components/common/input/formInput";

export const InputWrapper = styled.div<type.InputWrapperProps>`
  ${({ theme, hasValue, hasError }) => css`
    position: relative;

    input {
      padding: ${hasValue ? "30px 12px 12px 12px" : "12px"};
      border-color: ${hasError && "red"};
    }

    label {
      ${hasValue ? theme.font.regular_12 : theme.font.medium_15};
      top: ${hasValue ? "5px" : "12px"};

      color: ${theme.color.grey_700};
      transition-duration: 0.2s;
    }

    &:focus-within {
      input {
        border-color: ${theme.color.blue_200};
        padding: 30px 12px 12px 12px;
      }

      label {
        ${theme.font.regular_12};
        top: 5px;
        color: ${theme.color.grey_700};
        transition-duration: 0.2s;
      }
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    ${theme.font.medium_15};
    width: 100%;
    height: 48px;
    border: 1px solid ${theme.color.grey_300};
    border-radius: 5px;
  `}
`;

export const Placeholder = styled.label`
  ${({ theme }) => css`
    ${theme.font.medium_15};
    position: absolute;
    top: 12px;
    left: 12px;
    color: ${theme.color.grey_500};
  `}
`;

export const PasswordBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
`;
