import reset from "emotion-reset";
import { css } from "@emotion/react";

export const globalStyle = css`
  ${reset}

  * {
    box-size: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: "Pretendard";
  }

  button {
    border: 0;
    background-color: inherit;
  }

  a {
    text-decoration: none;
  }

  input {
    border: 0;
  }
`;
