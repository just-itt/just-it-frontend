import React from "react";
import Image from "next/image";

import { PersonIcon, UploadIcon } from "@icons/index";
import * as S from "./ImgUpload.styled";

interface ImgUploadProps {
  className?: string;
  previewUrl: string;
  handleChangeImg: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeRatio: (x: number, y: number) => () => void;
}

const ImgUpload = ({
  className,
  previewUrl,
  handleChangeImg,
  handleChangeRatio,
}: ImgUploadProps) => {
  return previewUrl ? (
    <S.PreviewImgWrapper className={className}>
      <Image src={previewUrl} alt="img" fill objectFit="cover" />
      <S.PreviewBtnWrapper>
        <S.EditBtnWrapper>
          <button type="button">
            <PersonIcon />
          </button>
        </S.EditBtnWrapper>
        <S.RatioBtnWrapper>
          <S.RatioBtn type="button" onClick={handleChangeRatio(1, 1)}>
            1:1
          </S.RatioBtn>
          <S.RatioBtn type="button" onClick={handleChangeRatio(3, 4)}>
            3:4
          </S.RatioBtn>
          <S.RatioBtn type="button" onClick={handleChangeRatio(4, 3)}>
            4:3
          </S.RatioBtn>
        </S.RatioBtnWrapper>
      </S.PreviewBtnWrapper>
    </S.PreviewImgWrapper>
  ) : (
    <S.ImgUpload className={className} htmlFor="imgUpload">
      <S.UploadInput
        id="imgUpload"
        type="file"
        accept=".jpg, .jpeg, .png"
        multiple
        onChange={handleChangeImg}
      />
      <UploadIcon />
      <span>사진 업로드</span>
      <span>
        음식 사진 외 다른 사진 업로드 시 관리자에 의해 삭제 될 수 있습니다.
      </span>
    </S.ImgUpload>
  );
};

export default ImgUpload;
