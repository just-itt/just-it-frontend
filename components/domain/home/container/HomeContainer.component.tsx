import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import {
  Filter,
  Pheed,
  Heading,
  SuggestedMenu,
  Footer,
  NoResult,
} from "@components/index";
import PheedDetail from "@components/common/pheed/pheedDetail/PheedDetail.component";
import { useGetPheeds } from "@service/index";
import { useViewport } from "@hooks/index";
import { handleResize } from "utils";
import * as S from "./HomeContainer.styled";

const HomeContainer = () => {
  const {
    query: { id, filter, searchWord },
  } = useRouter();

  const { data: pheeds } = useGetPheeds({
    query: {
      ...(searchWord && { search_word: searchWord as string }),
      ...(filter && { tag_options: filter }),
    },
  });

  const { isMobile } = useViewport();

  const columnsCountBreakPoints = {
    555: 2,
    900: 3,
    1200: 4,
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <S.Main isClickPheed={!!id}>
      <S.PheedWrapper isClickPheed={!!id}>
        <S.PaddingWrapper>
          {searchWord && pheeds?.length === 0 ? (
            <NoResult />
          ) : searchWord && pheeds?.length !== 0 ? (
            <>
              <Heading
                css={S.heading}
                heading="검색결과"
                count={pheeds?.length}
              />
              {pheeds && (
                <ResponsiveMasonry
                  columnsCountBreakPoints={columnsCountBreakPoints}
                >
                  <Masonry gutter="16px">
                    {pheeds.map((pheed, i) => (
                      <Pheed
                        key={i}
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
              <SuggestedMenu />
              <Heading css={S.heading} heading="실시간 피드" />
              <Filter />
              {pheeds && (
                <ResponsiveMasonry
                  columnsCountBreakPoints={columnsCountBreakPoints}
                >
                  <Masonry gutter="16px">
                    {pheeds.map((pheed, i) => (
                      <Pheed
                        key={i}
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
        {(!isMobile || pheeds?.length !== 0) && <Footer />}
      </S.PheedWrapper>
      {id && <PheedDetail />}
    </S.Main>
  );
};

export default HomeContainer;
