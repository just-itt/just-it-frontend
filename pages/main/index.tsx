import React from "react";
import { MasonryGrid } from "@egjs/react-grid";

import { Pheed } from "@components/index";
import * as S from "./main.styled";

const index = () => {
  const Pheeds = () => (
    <>
      <S.Item>
        <Pheed src="/imgs/iu.jpeg" />
      </S.Item>
      <S.Item>
        <Pheed src="/imgs/iu2.jpeg" />
      </S.Item>
      <S.Item>
        <Pheed src="/imgs/iu3.jpeg" />
      </S.Item>
      <S.Item>
        <Pheed src="/imgs/iu4.jpeg" />
      </S.Item>
      <S.Item>
        <Pheed src="/imgs/iu5.jpeg" />
      </S.Item>
      <S.Item>
        <Pheed src="/imgs/iu6.jpeg" />
      </S.Item>
      <S.Item>
        <Pheed src="/imgs/iu7.jpeg" />
      </S.Item>
      <S.Item>
        <Pheed src="/imgs/iu8.jpeg" />
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
