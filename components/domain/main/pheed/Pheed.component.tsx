import React, { forwardRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import * as S from "./Pheed.styled";

interface PheedProps {
  src: string;
  title: string;
  id: number;
  isShowTitle?: boolean;
}

const Pheed = forwardRef(
  ({ src, title, id, isShowTitle = true }: PheedProps, ref: any) => {
    const { push, query } = useRouter();

    const handleClickPheed = () => {
      push({ query: { ...query, id } }, undefined, { scroll: false });
    };

    return (
      <S.DetailBtn type="button" ref={ref} onClick={handleClickPheed}>
        <S.ImgWrapper>
          <Image
            src={src}
            alt={`${title} 음식 사진`}
            width={0}
            height={0}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            style={{ width: "100%", height: "auto" }}
          />
        </S.ImgWrapper>
        {isShowTitle && <S.Title>{title}</S.Title>}
      </S.DetailBtn>
    );
  },
);

export default Pheed;
