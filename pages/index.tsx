import React, { ReactElement } from "react";
import axios from "axios";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import type { GetServerSidePropsContext } from "next";

import { MainLayout, HomeContainer } from "@components/index";
import { pheedKeys } from "@service/index";

const index = () => {
  return <HomeContainer />;
};

index.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { query } = ctx;

  const ax = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 3000,
  });

  const queryClient = new QueryClient();

  const filter = {
    ...(query?.search_word && { search_word: query?.search_word as string }),
    ...(query?.filter && {
      tag_options: query.filter,
    }),
  };

  await queryClient.prefetchQuery({
    queryKey: pheedKeys.pheed({ query: filter }),
    queryFn: async () => {
      const { data } = await ax.get("/posts", { params: filter });
      return data;
    },
  });

  // TODO: 인증 없이 호출 하도록 수정되면 로직 추가
  // await queryClient.prefetchQuery({
  //   queryKey: commonKeys.tags,
  //   queryFn: async () => {
  //     const { data } = await ax.get("/tags");
  //     return data;
  //   },
  //   cacheTime: Infinity,
  //   staleTime: Infinity,
  // });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

export default index;
