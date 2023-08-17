import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    ${theme.font.medium_15};

    margin-bottom: 8px;
    color: ${theme.color.grey_700};
  `}
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;

    & > button {
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
    }

    svg {
      width: 24px;
      height: 24px;
      fill: ${theme.color.grey_400};
    }
  `}
`;

export const Input = styled.input<{ isError: boolean }>`
  ${({ theme, isError }) => css`
    width: 100%;
    height: 44px;
    border: 1px solid ${isError ? theme.color.red_200 : theme.color.grey_300};
    border-radius: 5px;
    padding: 10px 12px;

    :focus {
      border: 1px solid ${theme.color.blue_300};
    }
  `}
`;

export const Textarea = styled.textarea<{ isError: boolean }>`
  ${({ theme, isError }) => css`
    height: 400px;
    border: 1px solid ${isError ? theme.color.red_200 : theme.color.grey_300};
    border-radius: 5px;
    padding: 10px 12px;
    resize: none;

    :focus {
      border: 1px solid ${theme.color.blue_300};
    }
  `}
`;
