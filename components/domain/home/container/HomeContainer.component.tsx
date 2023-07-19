import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import {
  Filter,
  Pheed,
  Heading,
  SuggestedMenu,
  Footer,
} from "@components/index";
import PheedDetail from "@components/common/pheed/pheedDetail/PheedDetail.component";
import { useGetPheeds } from "@service/index";
import { handleResize } from "utils";
import * as S from "./HomeContainer.styled";

const HomeContainer = () => {
  const {
    query: { id, filter, pheedSearch },
  } = useRouter();

  const { data: pheeds } = useGetPheeds({
    query: {
      ...(pheedSearch && { search_word: pheedSearch as string }),
      ...(filter && { tag_options: filter }),
    },
  });

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <S.Main isClickPheed={!!id}>
      <S.PheedWrapper isClickPheed={!!id}>
        <S.PaddingWrapper>
          <SuggestedMenu />
          <Heading css={S.heading} heading="실시간 피드" />
          <Filter />
          {pheeds?.length ? (
            <ResponsiveMasonry
              columnsCountBreakPoints={{
                555: 2,
                900: 3,
                1200: 4,
              }}
            >
              <Masonry gutter="16px">
                {pheeds.map(pheed => (
                  <Pheed
                    key={pheed.id}
                    src={pheed.image.image}
                    id={pheed.id}
                    title={pheed.title}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          ) : null}
        </S.PaddingWrapper>
        <Footer />
      </S.PheedWrapper>
      {id && <PheedDetail />}
    </S.Main>
  );
};

export default HomeContainer;
