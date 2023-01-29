import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Nav = styled.ul`
  ${({ theme }) => css`
    width: 248px;
    height: 100vh;
    border-right: 1px solid ${theme.color.grey_200};
  `}
`;

export const NavMenu = styled.li`
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
