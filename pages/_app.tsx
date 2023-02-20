import Head from "next/head";
import { RecoilRoot } from "recoil";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID,
};

initializeApp(firebaseConfig);
export const auth = getAuth();

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || (page => page);

  return (
    <>
      <Head>
        <script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js"
          integrity="sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx"
          crossorigin="anonymous"
        ></script>
      </Head>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <RecoilRoot>{getLayout(<Component {...pageProps} />)}</RecoilRoot>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
