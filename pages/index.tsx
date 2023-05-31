import React, { useEffect, ReactElement } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import type { GetServerSidePropsContext } from "next";
import type { NextPageWithLayout } from "pages/_app";

import {
  MainLayout,
  Filter,
  Pheed,
  Heading,
  SuggestedMenu,
} from "@components/index";
import PheedDetail from "@components/common/pheed/pheedDetail/PheedDetail.component";
import { profileAtom } from "@recoil/common";
import type { GetPheedsServerModel } from "types";
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
  pheeds: GetPheedsServerModel["items"];
}

const index: NextPageWithLayout = ({ profile, pheeds }: IndexProps) => {
  const {
    query: { id },
  } = useRouter();

  const setUserState = useSetRecoilState(profileAtom);

  useEffect(() => {
    if (!profile) return;

    setUserState(profile);
  }, []);

  return (
    <S.Main isClickPheed={!!id}>
      <S.PheedWrapper isClickPheed={!!id}>
        <div>
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
              {pheeds?.map(pheed => (
                <Pheed
                  src={pheed.image.image}
                  id={pheed.id}
                  title={pheed.title}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </S.PheedWrapper>
      {id && <PheedDetail />}
    </S.Main>
  );
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
    const { data: pheeds } = await ax.get("/posts");

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
        pheeds: pheeds.items,
      },
    };
  }

  return { props: {} };
}

export default index;
