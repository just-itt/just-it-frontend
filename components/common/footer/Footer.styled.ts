import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Footer = styled.footer`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_column_justifyC_alignC};
    ${theme.font.regular_12};
    height: 149px;
    border-top: 1px solid ${theme.color.grey_200};
    color: ${theme.color.grey_500};

    & > svg {
      margin-bottom: 12px;
    }

    @media (min-width: ${theme.breakPoint.minTablet}) {
      ${theme.flexMixin.flex_column_justifyC_alignC};
      ${theme.font.regular_14};
      row-gap: 12px;
      height: 105px;
      padding-top: 20px;

      & > svg {
        margin-bottom: 0;
      }
    }
  `}
`;

export const NameWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_column_justifyC_alignC};

    a {
      color: inherit;
      text-decoration: none;
    }

    @media (min-width: ${theme.breakPoint.minTablet}) {
      display: block;

      & > span:not(:last-child)::after {
        content: "";
        width: 1px;
        margin: 20px;
        border-right: 1px solid ${theme.color.grey_200};
      }
    }
  `}
`;

export const Position = styled.span`
  ${({ theme }) => css`
    ${theme.font.medium_15};
    margin-right: 8px;
  `}
`;
