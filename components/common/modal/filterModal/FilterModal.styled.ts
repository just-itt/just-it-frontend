import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Modal = styled.dialog`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.color.white};

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      width: 720px;
      height: 598px;
      border-radius: 5px;
    }
  `}
`;

export const HeadingWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 32px;

    @media (min-width: ${theme.breakPoint.minTablet}) {
      padding: 24px 40px;
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      justify-content: space-between;
    }
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.font.bold_20};

    @media (min-width: ${theme.breakPoint.minTablet}) {
      ${theme.font.semiBold_16};
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      ${theme.font.bold_20};
    }
  `}
`;

export const CloseBtn = styled.button`
  ${({ theme }) => css`
    position: absolute;
    left: 32px;

    svg {
      width: 20px;
      height: 20px;
      fill: ${theme.color.grey_900};
    }

    @media (min-width: ${theme.breakPoint.minTablet}) {
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      left: unset;
      right: 32px;
    }
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column;
    row-gap: 32px;
    margin-bottom: 20px;
    border-top: 1px solid ${theme.color.grey_200};
    padding: 32px;
    overflow-y: auto;

    @media (min-width: ${theme.breakPoint.minTablet}) {
      margin-bottom: 0;
      padding: 40px;
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      height: 444px;
      padding: 40px;
      border-bottom: 1px solid ${theme.color.grey_200};
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    ${theme.font.regular_15};
    height: 44px;
    border: 1px solid ${theme.color.grey_300};
    border-radius: 5px;
    padding: 10px 12px;
  `}
`;

export const FilterWrapper = styled.ul`
  display: flex;
  flex-flow: wrap;
  gap: 10px;
  white-space: nowrap;
`;

export const FilterItem = styled.button<{ isSelect: boolean }>`
  ${({ theme, isSelect }) => css`
    height: 40px;
    border: 1px solid
      ${isSelect ? `${theme.color.blue_200}` : `${theme.color.grey_300}`};
    border-radius: 100px;
    padding: 8px 20px;
    color: ${isSelect ? `${theme.color.blue_200}` : `${theme.color.grey_700}`};

    @media (hover: hover) {
      :hover {
        background-color: ${!isSelect && theme.color.grey_200};
      }
    }
  `}
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ConfirmBtn = styled.button`
  ${({ theme }) => css`
    ${theme.font.semiBold_15};
    width: 100%;
    margin: 0 20px;
    border-radius: 5px;
    padding: 12px;
    color: ${theme.color.white};
    background-color: ${theme.color.blue_300};

    @media (min-width: ${theme.breakPoint.minTablet}) {
      margin: 0 40px;
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      width: unset;
      margin-right: 32px;
      padding: 8px 20px;
    }
  `}
`;
