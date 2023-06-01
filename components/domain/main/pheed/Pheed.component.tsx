import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import * as S from "./Pheed.styled";

interface PheedProps {
  src: string;
  title: string;
  id: number;
}

const Pheed = ({ src, title, id }: PheedProps) => {
  const { replace } = useRouter();

  const handleClickPheed = () => {
    replace(`?id=${id}`, `?id=${id}`, { scroll: false });
  };

  return (
    <S.DetailBtn type="button" onClick={handleClickPheed}>
      <S.ImgWrapper>
        <Image
          src={src}
          alt="음식사진"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
      </S.ImgWrapper>
      <S.Title>{title}</S.Title>
    </S.DetailBtn>
  );
};

export default Pheed;
