import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ErrorMessage = styled.div`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    color: ${theme.color.red_200};
  `}
`;
