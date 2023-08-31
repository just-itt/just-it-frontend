import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Modal = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
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
    ${theme.flexMixin.flex_justifyC_alignC};
    width: 100%;
    height: 60px;
    padding: 18px 20px;

    @media (min-width: ${theme.breakPoint.minTablet}) {
      height: 72px;
      padding: 24px 40px;
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      justify-content: space-between;
      height: 72px;
      padding: 20px 32px;
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
    left: 18px;

    svg {
      width: 20px;
      height: 20px;
      fill: ${theme.color.grey_900};
    }

    @media (min-width: ${theme.breakPoint.minTablet}) {
      left: 40px;
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      position: relative;
      left: 0;
    }
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column;
    row-gap: 32px;
    height: calc((var(--vh) * 100) - 60px - 82px);
    border-top: 1px solid ${theme.color.grey_200};
    padding: 28px 20px;
    overflow-y: auto;

    @media (min-width: ${theme.breakPoint.minTablet}) {
      height: calc((var(--vh) * 100) - 72px - 88px);
      margin-bottom: 0;
      padding: 40px;
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      height: 444px;
      padding: 32px;
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

export const label = (theme: Theme) => css`
  & > label {
    ${theme.font.semiBold_14};
  }

  @media (min-width: ${theme.breakPoint.minTablet}) {
    & > label {
      ${theme.font.semiBold_16};
    }
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 10px;
  white-space: nowrap;
`;

export const FilterItem = styled.button<{ isSelect: boolean }>`
  ${({ theme, isSelect }) => css`
    ${theme.font.medium_14};
    height: 40px;
    border: 1px solid
      ${isSelect ? `${theme.color.blue_300}` : `${theme.color.grey_300}`};
    border-radius: 100px;
    padding: 8px 20px;
    color: ${isSelect ? `${theme.color.blue_300}` : `${theme.color.grey_700}`};
    background-color: ${isSelect && `${theme.color.blue_100}`};

    @media (hover: hover) {
      :hover {
        background-color: ${!isSelect && theme.color.grey_200};
      }
    }

    @media (min-width: ${theme.breakPoint.minTablet}) {
      ${theme.font.medium_15};
    }
  `}
`;

export const BtnWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 82px;

    @media (min-width: ${theme.breakPoint.minTablet}) {
      height: 88px;
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      align-items: center;
      height: 80px;
    }
  `}
`;

export const ConfirmBtn = styled.button`
  ${({ theme }) => css`
    ${theme.font.semiBold_15};
    width: 100%;
    height: 48px;
    margin: 0 20px;
    border-radius: 5px;
    padding: 12px;
    color: ${theme.color.white};
    background-color: ${theme.color.blue_300};

    @media (min-width: ${theme.breakPoint.minTablet}) {
      margin: 0 40px;
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      width: 92px;
      height: 40px;
      margin-right: 32px;
      padding: 8px 20px;
    }
  `}
`;
