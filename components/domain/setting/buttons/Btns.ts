import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const BtnWrapper = styled.div`
  display: flex;
  column-gap: 30px;
`;

export const Btn = styled.button`
  ${({ theme }) => css`
    ${theme.font.regular_15};
    color: ${theme.color.grey_600};
    text-decoration: underline;
    margin-bottom: 120px;
  `}
`;
