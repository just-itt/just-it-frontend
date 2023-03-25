import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Button = styled.button<{ mode: "primary" | "secondary" }>`
  ${({ theme, mode }) => css`
    ${theme.font.semiBold_15};
    width: fit-content;
    min-height: 40px;
    padding: 8px 20px;
    border-radius: 5px;
    color: ${theme.color.white};
    background-color: ${mode === "primary" && `${theme.color.blue_300}`};

    :disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  `}
`;
