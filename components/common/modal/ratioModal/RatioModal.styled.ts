import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const RatioModal = styled.dialog`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 230px;
    border-top: 1px solid ${theme.color.grey_000};
    border-radius: 20px 20px 0 0;
    background-color: ${theme.color.white};
  `}
`;

export const Heading = styled.h3`
  ${({ theme }) => css`
    ${theme.font.bold_16};
    padding: 14px 20px;
    text-align: center;
  `}
`;

export const Ratio = styled.li`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_justifySb_alignC};
    padding: 12px 20px 12px 20px;

    svg {
      width: 20px;
      height: 20px;

      & > path {
        fill: ${theme.color.blue_300};
      }
    }
  `}
`;

export const RatioBtn = styled.button<{ isSelect: boolean }>`
  ${({ theme, isSelect }) => css`
    ${isSelect ? theme.font.semiBold_15 : theme.font.regular_15};
  `}
`;
