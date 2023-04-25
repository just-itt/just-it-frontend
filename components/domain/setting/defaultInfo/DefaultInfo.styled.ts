import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: 40px;
    border-bottom: 1px solid ${theme.color.grey_300};
  `}
`;

export const heading = css`
  margin-bottom: 40px;
`;

export const button = css`
  margin-bottom: 40px;
`;
