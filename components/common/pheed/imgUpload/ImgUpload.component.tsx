import React, { useState, useEffect } from "react";
import Image from "next/image";
import type { UseFormRegister } from "react-hook-form";

import { ErrorWrapper } from "@components/index";
import { TrashIcon, PencilIcon, UploadIcon } from "@icons/index";
import type { PheedForm } from "types";
import * as S from "./ImgUpload.styled";

interface ImgUploadProps {
  className?: string;
  type: "create" | "edit";
  isError: boolean;
  defaultImage?: string;
  register: UseFormRegister<PheedForm>;
  handleChangeRatio: (ratio: "1:1" | "3:4" | "4:3") => () => void;
  handleDeleteImgFile: () => void;
}

const ImgUpload = ({
  className,
  type,
  isError,
  defaultImage,
  register,
  handleChangeRatio,
  handleDeleteImgFile,
}: ImgUploadProps) => {
  const [previewImg, setPreviewImg] = useState<string | null>(null);

  const handleChangeImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => setPreviewImg(reader.result as string);
  };

  const handleClickDeleteImgFile = () => {
    handleDeleteImgFile();
    setPreviewImg(null);
  };

  useEffect(() => {
    if (!defaultImage) return;

    setPreviewImg(defaultImage);
  }, [defaultImage]);

  return previewImg ? (
    <S.PreviewImgWrapper className={className}>
      <Image
        src={previewImg}
        alt="업로드 이미지 미리보기"
        fill
        style={{ objectFit: "contain" }}
      />
      {type === "create" && (
        <S.PreviewBtnWrapper>
          <S.EditBtnWrapper>
            <label htmlFor="imgUpload">
              <PencilIcon />
              {/* <S.UploadInput
                id="imgUpload"
                type="file"
                accept=".jpg, .jpeg, .png"
                {...register("file", {
                  onChange: handleChangeImg,
                })}
              /> */}
            </label>
            <button type="button" onClick={handleClickDeleteImgFile}>
              <TrashIcon />
            </button>
          </S.EditBtnWrapper>
          <S.RatioBtnWrapper>
            <S.RatioBtn type="button" onClick={handleChangeRatio("1:1")}>
              1:1
            </S.RatioBtn>
            <S.RatioBtn type="button" onClick={handleChangeRatio("3:4")}>
              3:4
            </S.RatioBtn>
            <S.RatioBtn type="button" onClick={handleChangeRatio("4:3")}>
              4:3
            </S.RatioBtn>
          </S.RatioBtnWrapper>
        </S.PreviewBtnWrapper>
      )}
    </S.PreviewImgWrapper>
  ) : (
    <ErrorWrapper isError={isError} errorMessage="사진을 업로드해 주세요.">
      <S.ImgUpload className={className} htmlFor="imgUpload" isError={isError}>
        <S.UploadInput
          id="imgUpload"
          type="file"
          accept=".jpg, .jpeg, .png"
          {...register("file", {
            required: true,
            onChange: handleChangeImg,
          })}
        />
        <UploadIcon />
        <span>사진 업로드</span>
        <span>
          음식 사진 외 다른 사진 업로드 시 관리자에 의해 삭제 될 수 있습니다.
        </span>
      </S.ImgUpload>
    </ErrorWrapper>
  );
};

export default ImgUpload;
