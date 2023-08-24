import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { Heading, Filter, Pheed, Footer } from "@components/index";
import PheedDetail from "@components/common/pheed/pheedDetail/PheedDetail.component";
import { useGetBookmarks } from "@service/index";
import { handleResize } from "utils";
import { COLUMNS_COUNT_BREAK_POINTS } from "assets";
import * as S from "./BookmarkContainer.styled";

const BookmarkContainer = () => {
  const {
    query: { id, filter },
  } = useRouter();

  const { data: bookmarks } = useGetBookmarks({
    query: { ...(filter && { tag_options: filter }) },
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
          <Heading
            css={S.heading}
            heading="저장한 게시글"
            count={bookmarks?.count}
          />
          <Filter />
          {bookmarks && (
            <ResponsiveMasonry
              columnsCountBreakPoints={COLUMNS_COUNT_BREAK_POINTS}
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
          )}
        </S.PaddingWrapper>
        <Footer />
      </S.PheedWrapper>
      {id && <PheedDetail />}
    </S.Main>
  );
};

export default BookmarkContainer;
