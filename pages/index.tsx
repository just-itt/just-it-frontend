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
  const { req, query } = ctx;

  const token = req.cookies.auth;

  const ax = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 3000,
  });

  const queryClient = new QueryClient();

  const filter = {
    ...(query?.search_word && { search_word: query?.search_word as string }),
    ...(query?.tag_options && {
      tag_options: (query?.tag_options as string[]).map(item => +item),
    }),
  };

  await queryClient.prefetchQuery({
    queryKey: pheedKeys.pheed({ query: filter }),
    queryFn: async () => {
      const { data } = await ax.get("/posts", { params: filter });
      return data;
    },
  });

  if (token) {
    ax.defaults.headers.Authorization = `Bearer ${token}`;

    await queryClient.prefetchQuery({
      queryKey: pheedKeys.pheed({ query: filter }),
      queryFn: async () => {
        const { data } = await ax.get("/posts", { params: filter });
        return data;
      },
    });
  }

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

export default index;
