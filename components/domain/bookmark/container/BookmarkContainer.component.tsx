import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { Heading, Filter, Pheed, Footer } from "@components/index";
import PheedDetail from "@components/common/pheed/pheedDetail/PheedDetail.component";
import { handleResize } from "utils";
import type { GetBookmarksServerModel } from "types";
import * as S from "./BookmarkContainer.styled";

interface BookMarkContainerProps {
  bookmarks: GetBookmarksServerModel;
}

const BookmarkContainer = ({ bookmarks }: BookMarkContainerProps) => {
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <S.Main isClickPheed={!!id}>
      <S.PheedWrapper isClickPheed={!!id}>
        <S.PaddingWrapper>
          <Heading
            css={S.heading}
            heading="저장한 게시글"
            count={bookmarks.count}
          />
          <Filter />
          {bookmarks ? (
            <ResponsiveMasonry
              columnsCountBreakPoints={{
                555: 2,
                900: 3,
                1200: 4,
              }}
            >
              <Masonry gutter="16px">
                {bookmarks.count &&
                  bookmarks.items.map((bookmark, i) => (
                    <Pheed
                      key={i}
                      src={bookmark.image.image}
                      title={bookmark.title}
                      id={bookmark.id}
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

export default BookmarkContainer;
