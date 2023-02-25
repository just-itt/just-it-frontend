import React from "react";
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
  urlIndex: number;
  handleChangeImg: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddImg: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDeleteImg: (imgIndex: number) => () => void;
  handleClickLeftBtn: () => void;
  handleClickRightBtn: () => void;
}

const ImgUpload = ({
  className,
  previewUrls,
  urlIndex,
  handleChangeImg,
  handleAddImg,
  handleDeleteImg,
  handleClickLeftBtn,
  handleClickRightBtn,
}: ImgUploadProps) => {
  const isPreviewUrls = previewUrls.length !== 0;

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
              <button type="button" onClick={handleDeleteImg(urlIndex)}>
                <TrashIcon />
              </button>
              {previewUrls.length < 3 && (
                <>
                  <S.UploadInput
                    id="imgUpload"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    multiple
                    onChange={handleAddImg}
                  />
                  <S.AddBtn htmlFor="imgUpload">추가</S.AddBtn>
                </>
              )}
            </S.EditBtnWrapper>
            <S.RatioBtnWrapper>
              <S.RatioBtn type="button">1:1</S.RatioBtn>
              <S.RatioBtn type="button">3:4</S.RatioBtn>
              <S.RatioBtn type="button">4:3</S.RatioBtn>
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
