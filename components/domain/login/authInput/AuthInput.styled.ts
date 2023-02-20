import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Input = styled.input`
  ${({ theme }) => css`
    ${theme.font.medium_15};
    width: 100%;
    height: 52px;
    border: 1px solid ${theme.color.grey_300};
    border-radius: 5px;
    padding: 14px 12px;
  `}
`;
