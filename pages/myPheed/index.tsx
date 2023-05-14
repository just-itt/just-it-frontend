import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { MainLayout, Heading, Filter, Pheed } from "@components/index";
import PheedDetail from "@components/common/pheedDetail/PheedDetail.component";
import { useGetMyPheeds } from "@service/index";
import type { NextPageWithLayout } from "pages/_app";
import * as S from "./index.styled";

const MyPheed: NextPageWithLayout = () => {
  const {
    query: { id },
  } = useRouter();

  const { data } = useGetMyPheeds();

  return (
    <S.Main isClickPheed={!!id}>
      <S.PheedWrapper isClickPheed={!!id}>
        <div>
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

MyPheed.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default MyPheed;
