import { ReactElement } from "react";
import { RecoilRoot } from "recoil";
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { Global, ThemeProvider } from "@emotion/react";
import { Toaster } from "react-hot-toast";

import { queryClient } from "services";
import { BaseModal } from "@components/index";
import { globalStyle } from "styles/globalStyles";
import { theme } from "styles/theme";
import type { AppLayoutProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppLayoutProps) => {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydrateState}>
            {getLayout(<Component {...pageProps} />)}
            <BaseModal />
            <Toaster />
            <div id="modal" />
          </Hydrate>
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default MyApp;
