import React from "react";
import { MasonryGrid } from "@egjs/react-grid";

import { Pheed } from "@components/index";
import * as S from "./index.styled";

const index = () => {
  const Pheeds = () => (
    <>
      <S.Item>
        <Pheed src="/imgs/food1.jpeg" title="설렁탕" />
      </S.Item>
      <S.Item>
        <Pheed src="/imgs/food2.jpeg" title="피자" />
      </S.Item>
      <S.Item>
        <Pheed src="/imgs/food3.jpeg" title="핫도그" />
      </S.Item>
      <S.Item>
        <Pheed src="/imgs/food4.jpeg" title="떡볶이" />
      </S.Item>
      <S.Item>
        <Pheed src="/imgs/food5.png" title="스시롤" />
      </S.Item>
      <S.Item>
        <Pheed src="/imgs/food6.jpeg" title="스시" />
      </S.Item>
      <S.Item>
        <Pheed src="/imgs/food7.jpeg" title="돈까스" />
      </S.Item>
      <S.Item>
        <Pheed src="/imgs/food8.jpeg" title="고등어 백반" />
      </S.Item>
      <S.Item>
        <Pheed src="/imgs/food9.jpeg" title="양꼬치" />
      </S.Item>
    </>
  );

  return (
    <S.Main>
      <MasonryGrid gap={15} defaultDirection="end" align="center">
        {Pheeds()}
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

export default index;
