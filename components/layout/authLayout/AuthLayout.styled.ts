import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const AuthLayout = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    background-color: ${theme.color.grey_100};
  `}
`;
