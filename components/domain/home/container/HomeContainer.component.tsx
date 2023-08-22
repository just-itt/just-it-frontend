import React, { useRef, useEffect } from "react";
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

  const lastRef = useRef();

  const {
    data: pheeds,
    fetchNextPage,
    hasNextPage,
  } = useGetPheeds({
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

  useEffect(() => {
    if (!lastRef.current || !pheeds) return;

    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting || !hasNextPage) return;

          fetchNextPage();
          observer.unobserve(entry.target);
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    );

    io.observe(lastRef.current as any);
  }, [pheeds?.pages.length]);

  return (
    <S.Main isClickPheed={!!id}>
      <S.PheedWrapper isClickPheed={!!id}>
        <S.PaddingWrapper>
          {searchWord && pheeds?.pages.length === 0 ? (
            <NoResult />
          ) : searchWord && pheeds?.pages.length !== 0 ? (
            <>
              <Heading
                css={S.heading}
                heading="검색결과"
                count={pheeds?.pages[0].length}
              />
              {pheeds && (
                <ResponsiveMasonry
                  columnsCountBreakPoints={columnsCountBreakPoints}
                >
                  <Masonry gutter="16px">
                    {pheeds.pages.map((page, i) =>
                      page.map((pheed, j) => (
                        <Pheed
                          ref={
                            pheeds.pages.length * 10 + j === (i + 1) * 10 + j
                              ? lastRef
                              : null
                          }
                          key={i * 10 + j}
                          src={pheed.image.image}
                          id={pheed.id}
                          title={pheed.title}
                        />
                      )),
                    )}
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
                    {pheeds.pages.map((page, i) =>
                      page.map((pheed, j) => (
                        <Pheed
                          ref={
                            pheeds.pages.length * 10 + j === (i + 1) * 10 + j
                              ? lastRef
                              : null
                          }
                          key={i * 10 + j}
                          src={pheed.image.image}
                          id={pheed.id}
                          title={pheed.title}
                        />
                      )),
                    )}
                  </Masonry>
                </ResponsiveMasonry>
              )}
            </>
          )}
        </S.PaddingWrapper>
        {(!isMobile || pheeds?.pages.length !== 0) && <Footer />}
      </S.PheedWrapper>
      {id && <PheedDetail />}
    </S.Main>
  );
};

export default HomeContainer;
