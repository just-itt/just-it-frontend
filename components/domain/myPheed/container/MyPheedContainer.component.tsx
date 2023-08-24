import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { Heading, Filter, Pheed, Footer, NoResult } from "@components/index";
import PheedDetail from "@components/common/pheed/pheedDetail/PheedDetail.component";
import { useGetMyPheeds } from "@service/index";
import { useViewport } from "@hooks/index";
import { handleResize } from "utils";
import { COLUMNS_COUNT_BREAK_POINTS } from "assets";
import * as S from "./MyPheedContainer.styled";

const MyPheedContainer = () => {
  const {
    query: { id, filter, pheedSearch },
  } = useRouter();

  const { data: myPheeds } = useGetMyPheeds({
    query: { ...(filter && { tag_options: filter }) },
  });

  const { isMobile } = useViewport();

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <S.Main isClickPheed={!!id}>
      <S.PheedWrapper isClickPheed={!!id}>
        <S.PaddingWrapper>
          {pheedSearch && myPheeds?.items.length === 0 ? (
            <NoResult />
          ) : pheedSearch && myPheeds?.items.length !== 0 ? (
            <>
              <Heading
                css={S.heading}
                heading="검색결과"
                count={myPheeds?.items.length}
              />
              {myPheeds && (
                <ResponsiveMasonry
                  columnsCountBreakPoints={COLUMNS_COUNT_BREAK_POINTS}
                >
                  <Masonry gutter="16px">
                    {myPheeds.items.map(pheed => (
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
            </>
          ) : (
            <>
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
            </>
          )}
        </S.PaddingWrapper>
        {(!isMobile || myPheeds?.items?.length !== 0) && <Footer />}
      </S.PheedWrapper>
      {id && <PheedDetail />}
    </S.Main>
  );
};

export default MyPheedContainer;
