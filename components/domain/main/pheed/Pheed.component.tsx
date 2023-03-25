import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";

import { pheedDetailAtom } from "@recoil/common";
import * as S from "./Pheed.styled";

interface PheedProps {
  src: string;
  title: string;
}

const Pheed = ({ src, title }: PheedProps) => {
  const { replace } = useRouter();
  // const setIsClickPheed = useSetRecoilState(pheedDetailAtom);

  const handleClickPheed = () => {
    // setIsClickPheed(true);
    replace("?id=123", "?id=123", { scroll: false });
  };

  return (
    <S.DetailBtn type="button" onClick={handleClickPheed}>
      <S.ImgWrapper>
        <Image
          src={src}
          alt="음식사진"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", borderRadius: "20px" }}
        />
      </S.ImgWrapper>
      <S.Title>{title}</S.Title>
    </S.DetailBtn>
  );
};

export default Pheed;
