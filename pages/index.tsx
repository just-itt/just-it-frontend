import React, { ReactElement } from "react";
import axios from "axios";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import type { GetServerSidePropsContext } from "next";

import { MainLayout, HomeContainer, Seo } from "@components/index";
import { commonKeys, pheedKeys } from "@service/index";
import { makePheedFilterQuery } from "utils";

interface HomeProps {
  detailTitle?: string;
  imgUrl?: string;
  content?: string;
}

const Home = ({ detailTitle, imgUrl, content }: HomeProps) => {
  return (
    <>
      <Seo
        title={detailTitle}
        description={
          content ??
          "매일 똑같은 고민, 오늘 점심 뭐먹지? just it이 고민을 해결해줄게요! 나와 같은 상황일 때 다른 사람은 무엇을 먹을까요? 궁금하지 않나요? just it은 다양한 음식 메뉴를 추천하여 특별한 식사 시간을 만들어드립니다."
        }
        imgUrl={imgUrl}
      />
      <HomeContainer />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { query } = ctx;

  const ax = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 5000,
  });

  const queryClient = new QueryClient();

  const filter = {
    ...(query?.searchWord && { search_word: query?.searchWord as string }),
    ...(query?.filter && {
      tag_options: query.filter,
    }),
  };

  await queryClient.prefetchQuery({
    queryKey: pheedKeys.pheed({ query: filter }),
    queryFn: async () => {
      const { data } = await ax.get(`/posts${makePheedFilterQuery(filter)}`);
      return data;
    },
  });

  await queryClient.prefetchQuery({
    queryKey: commonKeys.tags,
    queryFn: async () => {
      const { data } = await ax.get("/tags");
      return data;
    },
    cacheTime: Infinity,
    staleTime: Infinity,
  });

  let detailTitle = "";
  let imgUrl = "";
  let content = "";

  await queryClient.prefetchQuery({
    queryKey: pheedKeys.pheedDetail({ id: query.id as string }),
    queryFn: async () => {
      const { data } = await ax.get(`/posts/${query.id}`);
      detailTitle = data.title;
      content = data.content;
      imgUrl = data.image.image;

      return data;
    },
  });

  return {
    props: {
      detailTitle,
      imgUrl,
      content,
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

export default Home;
