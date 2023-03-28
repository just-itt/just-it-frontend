import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const DropdownBtnWrapper = styled.button`
  position: relative;
`;

export const DropdownWrapper = styled.ul`
  ${({ theme }) => css`
    position: absolute;
    top: 36px;
    right: 0;
    border: 1px solid ${theme.color.grey_300};
    border-radius: 5px;
    padding: 3px 0;
    background-color: ${theme.color.white};
    z-index: ${theme.zIndex.dropdown};
  `}
`;

export const DropdownItem = styled.li`
  ${({ theme }) => css`
    ${theme.font.regular_15};
    min-width: 118px;
    padding: 8px 20px;
    text-align: left;

    @media (hover: hover) {
      :hover {
        background-color: ${theme.color.grey_100};
      }
    }
  `}
`;
