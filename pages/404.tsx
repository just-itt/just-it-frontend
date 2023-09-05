import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Seo } from "@components/index";
import { errorImage } from "public/images";
import * as S from "./404/404.styled";

const NotFound = () => {
  return (
    <S.Layout>
      <Seo
        title="페이지를 찾을 수 없습니다"
        description="페이지를 찾을 수 없습니다."
      />
      <Image src={errorImage} alt="페이지를 찾을 수 없습니다" />
      <S.Text>페이지를 찾을 수 없습니다.</S.Text>
      <Link css={S.link} href="/">
        홈으로 가기
      </Link>
    </S.Layout>
  );
};

export default NotFound;
