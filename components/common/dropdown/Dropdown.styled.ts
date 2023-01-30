import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { ArrowIcon } from "@icons/index";

export const DropdownBtn = styled.button`
  ${({ theme }) => css`
    ${theme.font.regular_15};
    position: relative;
    width: 151px;
    height: 40px;
    border: 1px solid ${theme.color.grey_300};
    border-radius: 100px;
  `}
`;

export const SelectValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
`;

export const ListWrapper = styled.ul`
  ${({ theme }) => css`
    position: absolute;
    top: 40px;
    left: 0px;
    width: 151px;
    background-color: ${theme.color.white};
    z-index: ${theme.zIndex.dropdown};
  `}
`;

export const List = styled.li`
  display: flex;
  width: 151px;
  height: 40px;
  padding-left: 20px;
`;

export const Arrow = styled(ArrowIcon)<{ isopen: boolean }>`
  transform: ${({ isopen }) => (isopen ? "rotate(180deg)" : "rotate(0deg)")};
`;
