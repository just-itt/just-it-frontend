import React, { forwardRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { useImageError } from "@hooks/index";
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

    const { errorImage, isImageError, handleErrorImg, IMAGE_ERROR_MESSAGE } =
      useImageError();

    const handleClickPheed = () => {
      push({ query: { ...query, id } }, undefined, { scroll: false });
    };

    return (
      <S.DetailBtn type="button" ref={ref} onClick={handleClickPheed}>
        <S.ImgWrapper>
          <Image
            src={isImageError ? errorImage : src}
            alt={isImageError ? IMAGE_ERROR_MESSAGE : `${title} 음식 사진`}
            width={0}
            height={0}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            onError={handleErrorImg}
            style={{ width: "100%", height: "auto" }}
          />
        </S.ImgWrapper>
        {isShowTitle && <S.Title>{title}</S.Title>}
      </S.DetailBtn>
    );
  },
);

export default Pheed;
