import { ReactElement } from "react";
import { RecoilRoot } from "recoil";
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Global, ThemeProvider } from "@emotion/react";
import { Toaster } from "react-hot-toast";

import { queryClient } from "services";
import { BaseModal } from "@components/index";
import { globalStyle } from "styles/globalStyles";
import { theme } from "styles/theme";
import type { AppLayoutProps } from "next/app";

// console.log(`

//        ██╗██╗   ██╗███████╗████████╗   ██╗████████╗
//        ██║██║   ██║██╔════╝╚══██╔══╝   ██║╚══██╔══╝
//        ██║██║   ██║███████╗   ██║█████╗██║   ██║
//   ██   ██║██║   ██║╚════██║   ██║╚════╝██║   ██║
//   ╚█████╔╝╚██████╔╝███████║   ██║      ██║   ██║
//    ╚════╝  ╚═════╝ ╚══════╝   ╚═╝      ╚═╝   ╚═╝

// `);

const MyApp = ({ Component, pageProps }: AppLayoutProps) => {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Hydrate state={pageProps.dehydrateState}>
            {getLayout(<Component {...pageProps} />)}
            <BaseModal />
            <Toaster
              containerStyle={{ zIndex: "99999999999" }}
              toastOptions={{
                duration: 2500,
                style: {
                  width: "350px",
                  height: "48px",
                  borderRadius: "5px",
                  fontSize: "14px",
                  color: "#1E242B",
                  backgroundColor: "#FFFFFF",
                },
              }}
            />
            <div id="modal" />
          </Hydrate>
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default MyApp;
