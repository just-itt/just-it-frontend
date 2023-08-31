import React from "react";
import { useRouter } from "next/router";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { Heading, Filter, Pheed, Footer } from "@components/index";
import PheedDetail from "@components/common/pheed/pheedDetail/PheedDetail.component";
import { useGetMyPheeds } from "@service/index";
import { useResize } from "@hooks/index";
import { COLUMNS_COUNT_BREAK_POINTS } from "@assets/index";
import * as S from "./MyPheedContainer.styled";

const MyPheedContainer = () => {
  const {
    query: { id, filter },
  } = useRouter();

  const { data: myPheeds } = useGetMyPheeds({
    query: { ...(filter && { tag_options: filter }) },
  });

  useResize();

  return (
    <S.Main isClickPheed={!!id}>
      <S.PheedWrapper isClickPheed={!!id}>
        <S.PaddingWrapper>
          <Heading
            css={S.heading}
            heading="내 게시글"
            count={myPheeds?.items.length}
          />
          <Filter />
          {myPheeds && (
            <ResponsiveMasonry
              columnsCountBreakPoints={COLUMNS_COUNT_BREAK_POINTS}
            >
              <Masonry gutter="16px">
                {myPheeds?.items.map(pheed => (
                  <Pheed
                    key={pheed.id}
                    src={pheed.image.image}
                    id={pheed.id}
                    title={pheed.title}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          )}
        </S.PaddingWrapper>
        <Footer />
      </S.PheedWrapper>
      {id && <PheedDetail />}
    </S.Main>
  );
};

export default MyPheedContainer;
