import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Division = styled.div`
  ${({ theme }) =>
    css`
      width: 100%;
      height: 1px;
      border-top: 1px solid ${theme.color.grey_300};
    `}
`;
