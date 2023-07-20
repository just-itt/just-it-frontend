import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_column_justifyC_alignC};
    height: calc(var(--vh) * 100 - 72px - 105px - 80px);
  `}
`;

export const icon = (theme: Theme) => css`
  width: 40px;
  height: 40px;
  margin-bottom: 20px;

  path {
    fill: ${theme.color.grey_500};
  }
`;

export const Text = styled.p`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    color: ${theme.color.grey_700};
  `}
`;
