import { Global, ThemeProvider } from "@emotion/react";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import { globalStyle } from "styles/globalStyles";
import { theme } from "styles/theme";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || (page => page);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
};

export default MyApp;
