import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CheckBox = styled.label`
  ${({ theme }) => css`
    ::after {
      content: "";
      display: block;
      width: 20px;
      height: 20px;
      border: 1px solid ${theme.color.grey_300};
      border-radius: 2px;
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    display: none;

    &[type="checkbox"]:checked + .checkbox {
      ::after {
        border: 1px solid ${theme.color.blue_200};
      }
    }
  `}
`;
