import reset from "emotion-reset";
import { css } from "@emotion/react";

export const globalStyle = css`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: "Pretendard";
  }

  button {
    border: 0;
    background-color: inherit;

    @media (hover: Hover) {
      &:hover {
        cursor: pointer;
      }
    }
  }

  a {
    text-decoration: none;
  }

  input {
    border: 0;

    :focus {
      outline: none;
    }
  }
`;
