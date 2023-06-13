import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Footer = styled.footer`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_column_justifyC_alignC};
    ${theme.font.regular_14};
    row-gap: 12px;
    height: 105px;
    border-top: 1px solid ${theme.color.grey_200};
    padding-top: 20px;
    color: ${theme.color.grey_500};
  `}
`;

export const NameWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;

    & > span:not(:last-child)::after {
      content: "";
      width: 1px;
      margin: 20px;
      border-right: 1px solid ${theme.color.grey_200};
    }
  `}
`;

export const Name = styled.span``;

export const Position = styled.span`
  ${({ theme }) => css`
    ${theme.font.medium_15};
    margin-right: 8px;
  `}
`;
