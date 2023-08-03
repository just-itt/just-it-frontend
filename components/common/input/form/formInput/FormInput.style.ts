import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface InputWrapperProps {
  hasValue: boolean;
  hasError: boolean;
}

export const FormWrapper = styled.div<InputWrapperProps>`
  ${({ theme, hasValue, hasError }) => css`
    input {
      margin-bottom: ${hasError && "4px"};
      border-color: ${hasError && theme.color.red_200};
      padding: ${hasValue ? "30px 12px 12px 12px" : "12px"};
    }

    label {
      ${hasValue ? theme.font.regular_12 : theme.font.medium_15};
      top: ${hasValue ? "5px" : "12px"};
      color: ${theme.color.grey_500};
      transition-duration: 0.2s;
    }

    &:focus-within {
      input {
        border-color: ${theme.color.blue_300};
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

    @media (hover: hover) {
      :hover {
        border-color: ${theme.color.blue_200};
      }
    }
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
  ${({ theme }) => css`position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);

  svg{
    width: 24px;
    height; 24px;
    fill: ${theme.color.grey_400};
  }`}
`;

export const ErrorMsg = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    color: ${theme.color.red_100};
  `}
`;
