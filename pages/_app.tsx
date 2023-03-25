import Head from "next/head";
import { RecoilRoot } from "recoil";

import { Global, ThemeProvider } from "@emotion/react";
import { ReactElement, ReactNode } from "react";
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
    <>
      <Head>
        <script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js"
          integrity="sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx"
          crossOrigin="anonymous"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <RecoilRoot>{getLayout(<Component {...pageProps} />)}</RecoilRoot>
        <div id="modal" />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
