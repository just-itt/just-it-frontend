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

export const Input = styled.input`
  ${({ theme }) => css`
    height: 44px;
    border: 1px solid ${theme.color.grey_300};
    border-radius: 5px;
    padding: 10px 12px;
  `}
`;

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    height: 400px;
    border: 1px solid ${theme.color.grey_300};
    border-radius: 5px;
    padding: 10px 12px;
    resize: none;
  `}
`;
