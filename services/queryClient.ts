import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 0, // 기본 값 사용 - 0초
      // cacheTime: 1000 * 60 * 5, // 기본 값 사용 - 5분
      // refetchOnMount: true, // 기본 값 사용 - true
      // refetchOnReconnect: true, // 기본 값 사용 - true
      refetchOnWindowFocus: false,
      retry: 0, //
      // suspense: true,
      onError: err => console.log(err),
    },
    mutations: {
      onError: err => console.log(err),
    },
  },
});
