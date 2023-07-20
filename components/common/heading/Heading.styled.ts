import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.font.bold_18};

    @media (min-width: ${theme.breakPoint.minTablet}) {
      ${theme.font.bold_20};
    }
  `}
`;

export const Count = styled.span`
  ${({ theme }) => css`
    margin-left: 4px;
    color: ${theme.color.blue_200};
  `}
`;
