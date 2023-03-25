import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.font.bold_18};
  `}
`;
