import React, { useState, useEffect, useRef } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import type { UseFormRegister, UseFormWatch } from "react-hook-form";

import { DropdownBtn, ErrorWrapper } from "@components/index";
import { TrashIcon, PencilIcon, UploadIcon, RatioIcon } from "@icons/index";
import type { PheedForm } from "types";
import * as S from "./ImgUpload.styled";

interface ImgUploadProps {
  className?: string;
  type: "create" | "edit";
  isError: boolean;
  defaultImage?: string;
  register: UseFormRegister<PheedForm>;
  watch: UseFormWatch<PheedForm>;
  handleCropImage: (cropImageFile: Blob) => void;
  handleChangeRatio: (ratio: "1:1" | "3:4" | "4:3") => () => void;
  handleDeleteImgFile: () => void;
}

const ImgUpload = ({
  className,
  type,
  isError,
  defaultImage,
  register,
  watch,
  handleCropImage,
  handleChangeRatio,
  handleDeleteImgFile,
}: ImgUploadProps) => {
  const cropperRef = useRef<ReactCropperElement>(null);
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

  const handleImageCrop = () => {
    const cropper = cropperRef.current?.cropper.getCroppedCanvas();

    cropper?.toBlob(blob => {
      if (!blob) return;

      const file = new File([blob], "croppedImage.png", { type: "image/png" });
      handleCropImage(file);
    });
  };

  useEffect(() => {
    if (!defaultImage) return;

    setPreviewImg(defaultImage);
  }, [defaultImage]);

  useEffect(() => {
    const ratio =
      watch("ratio") === "1:1"
        ? 1 / 1
        : watch("ratio") === "3:4"
        ? 3 / 4
        : 4 / 3;

    cropperRef.current?.cropper.setAspectRatio(ratio);
  }, [watch("ratio")]);

  return previewImg ? (
    <S.PreviewImgWrapper className={className}>
      <Cropper
        ref={cropperRef}
        style={{
          width: "100%",
          height: "100%",
        }}
        src={previewImg}
        alt="업로드 이미지 미리보기"
        viewMode={1}
        background={false}
        responsive
        autoCropArea={1}
        aspectRatio={1 / 1}
        movable={false}
        guides={false}
        cropBoxResizable={false}
        crop={handleImageCrop}
      />
      {type === "create" && (
        <S.PreviewBtnWrapper>
          <S.EditBtnWrapper>
            <label htmlFor="imgUpload">
              <PencilIcon />
            </label>
            <button type="button" onClick={handleClickDeleteImgFile}>
              <TrashIcon />
            </button>
          </S.EditBtnWrapper>
          <DropdownBtn
            css={S.dropdown}
            btnRender={<RatioIcon />}
            dropdownItems={[
              {
                label: "정방형",
                value: "1:1",
                handler: handleChangeRatio("1:1"),
              },
              {
                label: "가로형 (3:4)",
                value: "3:4",
                handler: handleChangeRatio("3:4"),
              },
              {
                label: "세로형 (4:3)",
                value: "4:3",
                handler: handleChangeRatio("4:3"),
              },
            ]}
            selectValue={watch("ratio")}
          />
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
