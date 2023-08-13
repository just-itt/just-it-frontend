import React, { ReactElement } from "react";
import axios from "axios";
import type { GetServerSidePropsContext } from "next";

import { MainLayout, Seo, SettingContainer } from "@components/index";

interface SettingProps {
  nickname?: string;
  profileImgUrl?: string;
}

const Setting = ({ nickname, profileImgUrl }: SettingProps) => {
  return (
    <>
      <Seo
        title={`${nickname}의 마이페이지`}
        description={`${nickname}의 프로필 이미지, 닉네임, 비밀번호를 변경할 수 있는 페이지입니다.`}
        imgUrl={profileImgUrl}
      />
      <SettingContainer />
    </>
  );
};

Setting.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { req } = ctx;
  const token = req.cookies.auth;

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

    return {
      props: {
        nickname,
        profileImgUrl,
      },
    };
  }

  return { props: {} };
}

export default Setting;
