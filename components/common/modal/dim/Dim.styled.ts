import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Dim = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: ${theme.color.modal_Bg};
    z-index: ${theme.zIndex.modal};

    @media (min-width: ${theme.breakPoint.minTablet}) {
      justify-content: center;
      align-items: center;
    }
  `}
`;
