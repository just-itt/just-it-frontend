import { ReactElement, ReactNode } from "react";
import { RecoilRoot } from "recoil";
import { QueryClientProvider } from "@tanstack/react-query";
import { Global, ThemeProvider } from "@emotion/react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import { BaseModal } from "@components/index";
import { queryClient } from "services";
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
        <QueryClientProvider client={queryClient}>
          {getLayout(<Component {...pageProps} />)}
          <BaseModal />
          <div id="modal" />
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default MyApp;
