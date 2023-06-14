import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { MainLayout, Heading, Filter, Pheed, Footer } from "@components/index";
import PheedDetail from "@components/common/pheed/pheedDetail/PheedDetail.component";
import { useGetMyPheeds } from "@service/index";
import * as S from "./index.styled";

const MyPheed = () => {
  const {
    query: { id },
  } = useRouter();

  const { data } = useGetMyPheeds();

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
          <Footer />
        </S.PaddingWrapper>
      </S.PheedWrapper>
      {id && <PheedDetail />}
    </S.Main>
  );
};

MyPheed.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default MyPheed;
