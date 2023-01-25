import { Global, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";

import { globalStyle } from "styles/globalStyles";
import { theme } from "styles/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
