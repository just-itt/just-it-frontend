import { RecoilRoot } from "recoil";

import { Global, ThemeProvider } from "@emotion/react";
import { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import { BaseModal } from "@components/index";
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
      <RecoilRoot>
        {getLayout(<Component {...pageProps} />)}
        <BaseModal />
      </RecoilRoot>
      <div id="modal" />
    </ThemeProvider>
  );
};

export default MyApp;
