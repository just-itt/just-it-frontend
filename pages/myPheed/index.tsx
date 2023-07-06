import React, { useEffect, ReactElement } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import type { GetServerSidePropsContext } from "next";

import { MainLayout, Heading, Filter, Pheed, Footer } from "@components/index";
import PheedDetail from "@components/common/pheed/pheedDetail/PheedDetail.component";
import { useGetMyPheeds } from "@service/index";
import { handleResize } from "utils";
import * as S from "./index.styled";

const MyPheed = () => {
  const {
    query: { id },
  } = useRouter();

  const { data } = useGetMyPheeds();

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <S.Main isClickPheed={!!id}>
      <S.PheedWrapper isClickPheed={!!id}>
        <S.PaddingWrapper>
          <Heading css={S.heading} heading="내 게시글" />
          <Filter />
          <ResponsiveMasonry
            columnsCountBreakPoints={{
              555: 2,
              900: 3,
              1200: 4,
            }}
          >
            <Masonry gutter="10px">
              {data?.items.map(pheed => (
                <Pheed
                  key={pheed.image.image}
                  src={pheed.image.image}
                  title={pheed.title}
                  id={pheed.id}
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
