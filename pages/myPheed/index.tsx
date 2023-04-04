import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { MainLayout, Heading, Filter, Pheed } from "@components/index";
import PheedDetail from "@components/common/pheedDetail/PheedDetail.component";
import type { NextPageWithLayout } from "pages/_app";
import * as S from "./index.styled";

const MyPheed: NextPageWithLayout = () => {
  const {
    query: { id },
  } = useRouter();

  return (
    <S.Main>
      <Heading css={S.heading} heading="내 게시글" />
      <S.FlexWrapper>
        <S.ContentWrapper>
          <Filter />
          <ResponsiveMasonry
            columnsCountBreakPoints={{
              555: 2,
              900: 3,
              1200: 4,
            }}
          >
            <Masonry gutter="10px">
              <Pheed src="/imgs/food1.jpeg" title="설렁탕" />
              <Pheed src="/imgs/food2.jpeg" title="피자" />
              <Pheed src="/imgs/food3.jpeg" title="핫도그" />
              <Pheed src="/imgs/food4.jpeg" title="떡볶이" />
              <Pheed src="/imgs/food5.png" title="스시롤" />
              <Pheed src="/imgs/food6.jpeg" title="스시" />
              <Pheed src="/imgs/food7.jpeg" title="돈까스" />
              <Pheed src="/imgs/food8.jpeg" title="고등어 백반" />
              <Pheed src="/imgs/food9.jpeg" title="양꼬치" />
              <Pheed src="/imgs/food1.jpeg" title="설렁탕" />
              <Pheed src="/imgs/food2.jpeg" title="피자" />
              <Pheed src="/imgs/food3.jpeg" title="핫도그" />
              <Pheed src="/imgs/food4.jpeg" title="떡볶이" />
              <Pheed src="/imgs/food5.png" title="스시롤" />
              <Pheed src="/imgs/food6.jpeg" title="스시" />
              <Pheed src="/imgs/food7.jpeg" title="돈까스" />
              <Pheed src="/imgs/food8.jpeg" title="고등어 백반" />
              <Pheed src="/imgs/food9.jpeg" title="양꼬치" />
              <Pheed src="/imgs/food1.jpeg" title="설렁탕" />
              <Pheed src="/imgs/food2.jpeg" title="피자" />
              <Pheed src="/imgs/food3.jpeg" title="핫도그" />
              <Pheed src="/imgs/food4.jpeg" title="떡볶이" />
              <Pheed src="/imgs/food5.png" title="스시롤" />
              <Pheed src="/imgs/food6.jpeg" title="스시" />
              <Pheed src="/imgs/food7.jpeg" title="돈까스" />
              <Pheed src="/imgs/food8.jpeg" title="고등어 백반" />
              <Pheed src="/imgs/food9.jpeg" title="양꼬치" />
            </Masonry>
          </ResponsiveMasonry>
        </S.ContentWrapper>
        {id && <PheedDetail />}
      </S.FlexWrapper>
    </S.Main>
  );
};

MyPheed.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default MyPheed;
