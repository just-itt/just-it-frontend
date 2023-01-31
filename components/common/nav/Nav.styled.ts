import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Nav = styled.ul`
  ${({ theme }) => css`
    position: sticky;
    top: 72px;
    right: 0;
    bottom: 0;
    left: 0;
    width: 248px;
    height: calc(100vh - 70px);
    border-right: 1px solid ${theme.color.grey_200};
  `}
`;

export const NavMenu = styled.button`
  ${({ theme }) => css`
    ${theme.font.medium_15};
    display: flex;
    align-items: center;
    column-gap: 12px;
    width: 240px;
    height: 52px;
    padding-left: 30px;
  `}
`;
