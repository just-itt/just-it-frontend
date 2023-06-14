import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import type { GetServerSidePropsContext } from "next";

import { MainLayout, Heading, Filter, Pheed, Footer } from "@components/index";
import PheedDetail from "@components/common/pheed/pheedDetail/PheedDetail.component";
import type { GetBookmarksServerModel } from "types";
import * as S from "./index.styled";

interface BookMarkProps {
  bookmarks: GetBookmarksServerModel;
}

const index = ({ bookmarks }: BookMarkProps) => {
  const {
    query: { id },
  } = useRouter();

  return (
    <S.Main isClickPheed={!!id}>
      <S.PheedWrapper isClickPheed={!!id}>
        <S.PaddingWrapper>
          <Heading css={S.heading} heading="저장한 게시글" />
          <Filter />
          <ResponsiveMasonry
            columnsCountBreakPoints={{
              555: 2,
              900: 3,
              1200: 4,
            }}
          >
            <Masonry gutter="10px">
              {bookmarks.count &&
                bookmarks.items.map(bookmark => (
                  <Pheed
                    src={bookmark.image.image}
                    title={bookmark.title}
                    id={bookmark.id}
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
