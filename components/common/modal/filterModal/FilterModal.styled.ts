import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Modal = styled.dialog`
  ${({ theme }) => css`
    width: 720px;
    height: 598px;
    border-radius: 5px;
    background-color: ${theme.color.white};
  `}
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 32px;
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.font.bold_20};
  `}
`;

export const CloseBtn = styled.button`
  ${({ theme }) => css`
    svg {
      width: 20px;
      height: 20px;
      fill: ${theme.color.grey_900};
    }
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column;
    row-gap: 32px;
    height: 444px;
    margin-bottom: 20px;
    border-top: 1px solid ${theme.color.grey_200};
    border-bottom: 1px solid ${theme.color.grey_200};
    padding: 32px;
    overflow-y: auto;
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
    flex-grow: 1;
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
    margin-right: 32px;
    border-radius: 5px;
    padding: 8px 20px;
    color: ${theme.color.white};
    background-color: ${theme.color.blue_300};
  `}
`;
