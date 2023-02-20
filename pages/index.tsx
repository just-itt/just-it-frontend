import React, { ReactElement } from "react";
import { MasonryGrid } from "@egjs/react-grid";

import { Filter, MainLayout, Pheed } from "@components/index";
import type { NextPageWithLayout } from "pages/_app";
import * as S from "./index.styled";

const index: NextPageWithLayout = () => {
  const Pheeds = () => (
    <>
      <S.PheedWrapper>
        <Pheed src="/imgs/food1.jpeg" title="설렁탕" />
      </S.PheedWrapper>
      <S.PheedWrapper>
        <Pheed src="/imgs/food2.jpeg" title="피자" />
      </S.PheedWrapper>
      <S.PheedWrapper>
        <Pheed src="/imgs/food3.jpeg" title="핫도그" />
      </S.PheedWrapper>
      <S.PheedWrapper>
        <Pheed src="/imgs/food4.jpeg" title="떡볶이" />
      </S.PheedWrapper>
      <S.PheedWrapper>
        <Pheed src="/imgs/food5.png" title="스시롤" />
      </S.PheedWrapper>
      <S.PheedWrapper>
        <Pheed src="/imgs/food6.jpeg" title="스시" />
      </S.PheedWrapper>
      <S.PheedWrapper>
        <Pheed src="/imgs/food7.jpeg" title="돈까스" />
      </S.PheedWrapper>
      <S.PheedWrapper>
        <Pheed src="/imgs/food8.jpeg" title="고등어 백반" />
      </S.PheedWrapper>
      <S.PheedWrapper>
        <Pheed src="/imgs/food9.jpeg" title="양꼬치" />
      </S.PheedWrapper>
    </>
  );

  return (
    <S.Main>
      <Filter />
      <MasonryGrid gap={5}>
        {Pheeds()}
        {Pheeds()}
        {Pheeds()}
        {Pheeds()}
        {Pheeds()}
        {Pheeds()}
        {Pheeds()}
        {Pheeds()}
      </MasonryGrid>
    </S.Main>
  );
};

index.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default index;
