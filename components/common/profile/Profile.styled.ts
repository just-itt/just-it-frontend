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
    border: 1px solid ${theme.color.grey_300};

    svg {
      width: 20px;
      height: 20px;
      fill: ${theme.color.grey_500};
    }
  `}
`;
