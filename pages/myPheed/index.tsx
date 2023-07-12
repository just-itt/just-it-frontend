import React, { ReactElement } from "react";
import axios from "axios";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import type { GetServerSidePropsContext } from "next";

import { MainLayout, MyPheedContainer } from "@components/index";

const MyPheed = () => {
  return <MyPheedContainer />;
};

MyPheed.getLayout = function getLayout(page: ReactElement) {
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

  if (token) {
    ax.defaults.headers.Authorization = `Bearer ${token}`;

    const filter = {
      ...(query?.tag_options && {
        tag_options: (query?.tag_options as string[]).map(item => +item),
      }),
    };
    await queryClient.prefetchQuery({
      queryKey: ["myPheed"],
      queryFn: async () => {
        const { data } = await ax.get("/posts/me", { params: filter });
        return data;
      },
    });

    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    };
  }

  return { props: {} };
}

export default MyPheed;
