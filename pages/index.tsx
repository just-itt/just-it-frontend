import React, { useEffect, ReactElement } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import type { GetServerSidePropsContext } from "next";

import {
  MainLayout,
  Filter,
  Pheed,
  Heading,
  SuggestedMenu,
} from "@components/index";
import PheedDetail from "@components/common/pheedDetail/PheedDetail.component";
import { profileAtom } from "@recoil/common";
import type { NextPageWithLayout } from "pages/_app";
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

const index: NextPageWithLayout = ({ profile }: IndexProps) => {
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
          <Heading css={S.heading} heading="실시간 인기 피드" />
          <Filter />
          <ResponsiveMasonry
            columnsCountBreakPoints={{
              555: 2,
              900: 3,
              1200: 4,
            }}
          >
            <Masonry gutter="10px">
              <Pheed src="/imgs/food1.jpeg" title="설렁탕" />
              <Pheed src="/imgs/food2.jpeg" title="피자" />
              <Pheed src="/imgs/food3.jpeg" title="핫도그" />
              <Pheed src="/imgs/food4.jpeg" title="떡볶이" />
              <Pheed src="/imgs/food5.png" title="스시롤" />
              <Pheed src="/imgs/food6.jpeg" title="스시" />
              <Pheed src="/imgs/food7.jpeg" title="돈까스" />
              <Pheed src="/imgs/food8.jpeg" title="고등어 백반" />
              <Pheed src="/imgs/food9.jpeg" title="양꼬치" />
              <Pheed src="/imgs/food1.jpeg" title="설렁탕" />
              <Pheed src="/imgs/food2.jpeg" title="피자" />
              <Pheed src="/imgs/food3.jpeg" title="핫도그" />
              <Pheed src="/imgs/food4.jpeg" title="떡볶이" />
              <Pheed src="/imgs/food5.png" title="스시롤" />
              <Pheed src="/imgs/food6.jpeg" title="스시" />
              <Pheed src="/imgs/food7.jpeg" title="돈까스" />
              <Pheed src="/imgs/food8.jpeg" title="고등어 백반" />
              <Pheed src="/imgs/food9.jpeg" title="양꼬치" />
              <Pheed src="/imgs/food1.jpeg" title="설렁탕" />
              <Pheed src="/imgs/food2.jpeg" title="피자" />
              <Pheed src="/imgs/food3.jpeg" title="핫도그" />
              <Pheed src="/imgs/food4.jpeg" title="떡볶이" />
              <Pheed src="/imgs/food5.png" title="스시롤" />
              <Pheed src="/imgs/food6.jpeg" title="스시" />
              <Pheed src="/imgs/food7.jpeg" title="돈까스" />
              <Pheed src="/imgs/food8.jpeg" title="고등어 백반" />
              <Pheed src="/imgs/food9.jpeg" title="양꼬치" />
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

  if (token) {
    const ax = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      timeout: 3000,
    });
    ax.defaults.headers.Authorization = `Bearer ${token}`;

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
      },
    };
  }

  return { props: {} };
}

export default index;
