import React, { ReactElement } from "react";
import axios from "axios";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import type { GetServerSidePropsContext } from "next";

import { MainLayout, BookmarkContainer, Seo } from "@components/index";
import { bookmarkKeys } from "@service/index";
import { makePheedFilterQuery } from "@utils/index";

interface BookmarkProps {
  nickname?: string;
  profileImgUrl?: string;
}

const Bookmark = ({ nickname, profileImgUrl }: BookmarkProps) => {
  return (
    <>
      <Seo
        title={`${nickname}의 저장한 게시글`}
        description={`${nickname}가 북마크로 등록한 게시글을 확인 할 수 있는 페이지 입니다.`}
        imgUrl={profileImgUrl}
      />
      <BookmarkContainer />
    </>
  );
};

Bookmark.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { req, query } = ctx;
  const token = req.cookies.auth;

  const queryClient = new QueryClient();

  const ax = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 5000,
  });

  let nickname = "";
  let profileImgUrl = "";

  if (token) {
    ax.defaults.headers.Authorization = `Bearer ${token}`;

    const { data: profile } = await ax.get("/members/me");

    nickname = profile.nickname;
    profileImgUrl = profile.profile_image;

    const filter = { ...(query?.filter && { tag_options: query.filter }) };

    await queryClient.prefetchQuery({
      queryKey: bookmarkKeys.bookmark({ query: filter }),
      queryFn: async () => {
        const { data } = await ax.get(
          `/posts/bookmarks${makePheedFilterQuery(filter)}`,
        );
        return data;
      },
    });

    return {
      props: {
        nickname,
        profileImgUrl,
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    };
  }

  return { props: {} };
}

export default Bookmark;
