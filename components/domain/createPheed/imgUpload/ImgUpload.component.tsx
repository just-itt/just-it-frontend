import React, { useState } from "react";
import Image from "next/image";

import {
  ArrowIcon,
  ImgUploadIcon,
  PencilMonoIcon,
  TrashIcon,
} from "@icons/index";
import * as S from "./ImgUpload.styled";

interface ImgUploadProps {
  className?: string;
  previewUrls: string[];
  handleChangeImg: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImgUpload = ({
  className,
  previewUrls,
  handleChangeImg,
}: ImgUploadProps) => {
  const [urlIndex, setUrlIndex] = useState(0);
  const isPreviewUrls = previewUrls.length !== 0;

  const handleClickLeftBtn = () => {
    if (urlIndex === 0) return;

    setUrlIndex(urlIndex - 1);
  };

  const handleClickRightBtn = () => {
    if (urlIndex === 2 || previewUrls.length) return;

    setUrlIndex(urlIndex + 1);
  };

  return (
    <>
      {isPreviewUrls ? (
        <S.PreviewImgWrapper className={className}>
          <Image
            src={previewUrls[urlIndex]}
            alt="img"
            fill
            objectFit="contain"
          />
          <S.LeftArrowBtn type="button" onClick={handleClickLeftBtn}>
            <ArrowIcon />
          </S.LeftArrowBtn>
          <S.RightArrowBtn type="button" onClick={handleClickRightBtn}>
            <ArrowIcon />
          </S.RightArrowBtn>
          <S.PreviewBtnWrapper>
            <S.EditBtnWrapper>
              <button type="button">
                <PencilMonoIcon />
              </button>
              <button type="button">
                <TrashIcon />
              </button>
              {previewUrls.length < 2 && (
                <>
                  <S.UploadInput
                    id="imgUpload"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    multiple
                    onChange={handleChangeImg}
                  />
                  <S.AddBtn htmlFor="imgUpload">추가</S.AddBtn>
                </>
              )}
            </S.EditBtnWrapper>
            <S.RatioBtnWrapper>
              <S.RatioBtn type="button">1:1</S.RatioBtn>
              <S.RatioBtn type="button">4:3</S.RatioBtn>
              <S.RatioBtn type="button">3:4</S.RatioBtn>
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
          <ImgUploadIcon />
          <span>사진 업로드</span>
          <span>
            음식 사진 외 다른 사진 업로드 시 관리자에 의해 삭제 될 수 있습니다.
          </span>
        </S.ImgUpload>
      )}
    </>
  );
};

export default ImgUpload;
