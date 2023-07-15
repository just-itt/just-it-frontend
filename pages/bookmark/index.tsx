import React, { ReactElement } from "react";
import axios from "axios";
import type { GetServerSidePropsContext } from "next";

import { MainLayout, BookmarkContainer } from "@components/index";
import type { GetBookmarksServerModel } from "types";

interface BookmarkProps {
  bookmarks: GetBookmarksServerModel;
}

const index = ({ bookmarks }: BookmarkProps) => {
  return <BookmarkContainer bookmarks={bookmarks} />;
};

index.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { req } = ctx;
  const token = req.cookies.auth;

  const ax = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 3000,
  });

  if (token) {
    ax.defaults.headers.Authorization = `Bearer ${token}`;
    const { data: bookmarks } = await ax.get("/posts/bookmarks");

    return {
      props: {
        bookmarks,
      },
    };
  }

  return { props: {} };
}

export default index;
