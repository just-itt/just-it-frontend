import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Layout = styled.section`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_column_justifyC_alignC};
    height: 100vh;
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    ${theme.font.semiBold_18};
    margin: 10px 0;
  `}
`;

export const link = (theme: Theme) => css`
  ${theme.font.regular_15};
  border: 1px solid ${theme.color.grey_400};
  border-radius: 3px;
  padding: 10px 20px;
  color: ${theme.color.black};
`;
