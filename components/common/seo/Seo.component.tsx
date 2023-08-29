import React from "react";
import Head from "next/head";

interface SeoProps {
  title?: string;
  description: string;
  url?: string;
  imgUrl?: string;
}

const Seo = ({ title, description, url, imgUrl }: SeoProps) => {
  return (
    <Head>
      <title>{title ? `${title} | Just it` : "Just it"}</title>
      <meta
        name="description"
        content="매일 똑같은 고민, 오늘 점심 뭐먹지? Just it이 고민을 해결해줄게요! 나와 같은 상황일 때 다른 사람은 무엇을 먹을까요? 궁금하지 않나요? Just it은 다양한 음식 메뉴를 추천하여 특별한 식사 시간을 만들어드립니다."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={title ? `${title} | Just it` : "Just it"}
      />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url || "https://justit.kr"} />
      <meta
        property="og:image"
        content={imgUrl || "public/icons/searchLong.svg"}
      />
      <meta property="og:article:author" content="Just it" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:site_name" content="Just it" />
    </Head>
  );
};

export default Seo;
