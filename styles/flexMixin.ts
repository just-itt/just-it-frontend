import { css } from "@emotion/react";

export const flexMixin = {
  flex: css`
    display: flex;
  `,
  flex_justifyC: css`
    display: flex;
    justify-content: center;
  `,
  flex_justifyC_alignC: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flex_alignC: css`
    display: flex;
    align-items: center;
  `,
  flex_justifySb: css`
    display: flex;
    justify-content: space-between;
  `,
  flex_justifySb_alignC: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  flex_column: css`
    display: flex;
    flex-flow: column;
  `,
  flex_column_justifyC: css`
    display: flex;
    flex-flow: column;
    justify-content: center;
  `,
  flex_column_alignC: css`
    display: flex;
    flex-flow: column;
    align-items: center;
  `,
};
