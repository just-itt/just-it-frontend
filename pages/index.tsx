import React, { useEffect, ReactElement } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import type { GetServerSidePropsContext } from "next";

import {
  MainLayout,
  Filter,
  Pheed,
  Heading,
  SuggestedMenu,
  Footer,
} from "@components/index";
import PheedDetail from "@components/common/pheed/pheedDetail/PheedDetail.component";
import { pheedKeys, useGetPheeds } from "@service/index";
import { profileAtom } from "@recoil/common";
import * as S from "./index.styled";

interface IndexProps {
  profile: {
    createdAt: string;
    id: number;
    email: string;
    nickname: string;
    profileImage: string | null;
    status: string;
    lastLoginAt: string;
    updatedAt: string;
  };
}

const index = ({ profile }: IndexProps) => {
  const {
    query: { id, pheedSearch },
  } = useRouter();

  const setUserState = useSetRecoilState(profileAtom);

  const { data } = useGetPheeds({
    query: { ...(pheedSearch && { search_word: pheedSearch as string }) },
  });

  useEffect(() => {
    if (!profile) return;

    setUserState(profile);
  }, []);

  return (
    <S.Main isClickPheed={!!id}>
      <S.PheedWrapper isClickPheed={!!id}>
        <S.PaddingWrapper>
          <SuggestedMenu />
          <Heading css={S.heading} heading="실시간 피드" />
          <Filter />
          <ResponsiveMasonry
            columnsCountBreakPoints={{
              555: 2,
              900: 3,
              1200: 4,
            }}
          >
            <Masonry gutter="10px">
              {data?.map(pheed => (
                <Pheed
                  src={pheed.image.image}
                  id={pheed.id}
                  title={pheed.title}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </S.PaddingWrapper>
        <Footer />
      </S.PheedWrapper>
      {id && <PheedDetail />}
    </S.Main>
  );
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

  if (token) {
    ax.defaults.headers.Authorization = `Bearer ${token}`;

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

    const { data } = await ax.get("/members/me");

    return {
      props: {
        profile: {
          createdAt: data.created_at,
          email: data.email,
          id: data.id,
          nickname: data.nickname,
          profileImage: data.profile_image,
          status: data.status,
          lastLoginAt: data.last_login_at,
          updatedAt: data.updated_at,
        },
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    };
  }

  return { props: {} };
}

export default index;
