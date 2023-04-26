import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Modal = styled.dialog`
  ${({ theme }) => css`
    position: relative;
    width: 350px;
    height: 256px;
    border-radius: 5px;
    padding: 32px 24px;

    @media (min-width: ${theme.breakPoint.minTablet}) {
      width: 400px;
      height: 268px;
      padding: 32px;
    }
  `}
`;

export const CloseBtn = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 12px;
    right: 12px;
    width: 20px;
    height: 20px;

    svg {
      fill: ${theme.color.grey_500};
    }
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.font.bold_18};
    margin-bottom: 4px;

    @media (min-width: ${theme.breakPoint.minTablet}) {
      ${theme.font.bold_20};
    }
  `}
`;

export const P = styled.p`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    margin-bottom: 32px;
    color: ${theme.color.grey_600};

    @media (min-width: ${theme.breakPoint.minTablet}) {
      ${theme.font.regular_15};
    }
  `}
`;

export const deleteBtn = css`
  width: 100%;
  margin-bottom: 8px;
`;

export const CancelBtn = styled.button`
  ${({ theme }) => css`
    ${theme.font.medium_15};
    width: 100%;
    height: 40px;
    border: 1px solid ${theme.color.grey_300};
    border-radius: 5px;
  `}
`;
