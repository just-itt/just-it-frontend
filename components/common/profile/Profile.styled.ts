import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    overflow: hidden;

    svg {
      fill: ${theme.color.grey_500};
    }
  `}
`;
