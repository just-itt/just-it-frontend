import React, { useState } from "react";
import Image from "next/image";

import { TrashIcon, PencilIcon, UploadIcon } from "@icons/index";
import * as S from "./ImgUpload.styled";

interface ImgUploadProps {
  className?: string;
  register: any;
  handleChangeRatio: (ratio: "1:1" | "3:4" | "4:3") => () => void;
  handleDeleteImgFile: () => void;
}

const ImgUpload = ({
  className,
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

    reader.onloadend = () => {
      setPreviewImg(reader.result as string);
    };
  };

  const handleClickDeleteImgFile = () => {
    handleDeleteImgFile();
    setPreviewImg(null);
  };

  return previewImg ? (
    <S.PreviewImgWrapper className={className}>
      <Image
        src={previewImg}
        alt="업로드 이미지 미리보기"
        fill
        style={{ objectFit: "contain" }}
      />
      <S.PreviewBtnWrapper>
        <S.EditBtnWrapper>
          <label htmlFor="imgUpload">
            <PencilIcon />
            <S.UploadInput
              id="imgUpload"
              type="file"
              accept=".jpg, .jpeg, .png"
              {...register("file", {
                onChange: handleChangeImg,
              })}
            />
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
    </S.PreviewImgWrapper>
  ) : (
    <S.ImgUpload className={className} htmlFor="imgUpload">
      <S.UploadInput
        id="imgUpload"
        type="file"
        accept=".jpg, .jpeg, .png"
        {...register("file", {
          onChange: handleChangeImg,
        })}
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
