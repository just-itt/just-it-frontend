import React, { ReactElement } from "react";
import axios from "axios";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import type { GetServerSidePropsContext } from "next";

import { MainLayout, MyPheedContainer, Seo } from "@components/index";
import { makePheedFilterQuery } from "utils";

interface MyPheedProps {
  nickname?: string;
  profileImgUrl?: string;
}

const MyPheed = ({ nickname, profileImgUrl }: MyPheedProps) => {
  return (
    <>
      <Seo
        title={`${nickname}의 게시글`}
        description={`${nickname}가 등록한 게시글을 확인 할 수 있는 페이지 입니다.`}
        imgUrl={profileImgUrl}
      />
      <MyPheedContainer />
    </>
  );
};

MyPheed.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { req, query } = ctx;
  const token = req.cookies.auth;

  const ax = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 5000,
  });

  let nickname = "";
  let profileImgUrl = "";

  const queryClient = new QueryClient();

  if (token) {
    ax.defaults.headers.Authorization = `Bearer ${token}`;

    const { data: profile } = await ax.get("/members/me");

    nickname = profile.nickname;
    profileImgUrl = profile.profile_image;

    const filter = { ...(query?.filter && { tag_options: query.filter }) };

    await queryClient.prefetchQuery({
      queryKey: ["myPheed"],
      queryFn: async () => {
        const { data } = await ax.get(
          `/posts/me${makePheedFilterQuery(filter)}`,
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

export default MyPheed;
