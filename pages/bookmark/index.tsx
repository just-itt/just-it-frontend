import React, { ReactElement } from "react";
import axios from "axios";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import type { GetServerSidePropsContext } from "next";

import { MainLayout, BookmarkContainer } from "@components/index";
import { bookmarkKeys } from "@service/bookmark";

const index = () => {
  return <BookmarkContainer />;
};

index.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { req } = ctx;
  const token = req.cookies.auth;

  const queryClient = new QueryClient();

  const ax = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 5000,
  });

  if (token) {
    ax.defaults.headers.Authorization = `Bearer ${token}`;

    await queryClient.prefetchQuery({
      queryKey: bookmarkKeys.bookmarks,
      queryFn: async () => {
        const { data } = await ax.get("/posts/bookmarks");
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

export default index;
