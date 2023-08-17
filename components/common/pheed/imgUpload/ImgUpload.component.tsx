import React, { useState, useEffect } from "react";
import Image from "next/image";
import imageCompression from "browser-image-compression";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import type { UseFormRegister } from "react-hook-form";

import { DropdownBtn, ErrorWrapper, RatioModal } from "@components/index";
import { useModal, useViewport } from "@hooks/index";
import { TrashIcon, UploadIcon, RatioIcon } from "@icons/index";
import type { PheedForm } from "types";
import * as S from "./ImgUpload.styled";

interface ImgUploadProps {
  className?: string;
  type: "create" | "edit";
  alt?: string;
  isError: boolean;
  defaultImg?: string;
  register: UseFormRegister<PheedForm>;
  dropdownSelectValue?: "1:1" | "3:4" | "4:3";
  cropperRef?: React.RefObject<ReactCropperElement>;
  deleteImgFile: () => void;
  handleImgCrop?: () => void;
  handleChangeRatio?: (ratio: "1:1" | "3:4" | "4:3") => () => void;
}

const ImgUpload = ({
  className,
  type,
  alt,
  isError,
  defaultImg,
  register,
  dropdownSelectValue,
  cropperRef,
  handleImgCrop,
  handleChangeRatio,
  deleteImgFile,
}: ImgUploadProps) => {
  const { isMobile } = useViewport();
  const { modalRef, handleOpenModal, handleCloseModal } = useModal();

  const [previewImg, setPreviewImg] = useState<string | null>(null);

  const makePreviewImg = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const options = {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 800,
      useWebWorker: true,
    };

    const extension = file.type.split("/").at(-1);
    if (extension === "heic" || extension === "HEIC") {
      const heic2any = (await import("heic2any")).default;

      const result = await heic2any({ blob: file, toType: "image/jpeg" });
      const jpegFile = new File(
        [result as Blob],
        `${file.name.split(".")[0]}.jpeg`,
        {
          type: "image/jpeg",
          lastModified: new Date().getTime(),
        },
      );

      const compressedFile = await imageCompression(jpegFile, options);

      const reader = new FileReader();
      reader.readAsDataURL(compressedFile);

      reader.onloadend = () => {
        setPreviewImg(reader.result as string);
      };

      return;
    }

    const compressedFile = await imageCompression(file, options);

    const reader = new FileReader();
    reader.readAsDataURL(compressedFile);

    reader.onloadend = () => {
      setPreviewImg(reader.result as string);
    };
  };

  const handleClickDeleteImageFile = () => {
    deleteImgFile();
    setPreviewImg(null);
  };

  useEffect(() => {
    if (!defaultImg) return;

    setPreviewImg(defaultImg);
  }, [defaultImg]);

  useEffect(() => {
    if (!isMobile) handleCloseModal();
  }, [isMobile]);

  return previewImg ? (
    <S.PreviewImgWrapper className={className}>
      {type === "create" ? (
        <>
          <Cropper
            ref={cropperRef}
            style={{
              width: "100%",
              height: "100%",
            }}
            src={previewImg}
            alt={alt ?? "이미지 미리보기"}
            viewMode={1}
            background={false}
            responsive
            autoCropArea={1}
            aspectRatio={1 / 1}
            movable={false}
            guides={false}
            cropBoxResizable={false}
            crop={handleImgCrop}
          />
          <S.PreviewBtnWrapper>
            <S.EditBtnWrapper>
              {/* <label htmlFor="imgUpload">
                <PencilIcon />
              </label> */}
              <button type="button" onClick={handleClickDeleteImageFile}>
                <TrashIcon />
              </button>
            </S.EditBtnWrapper>
            {isMobile ? (
              <S.MobileRatioBtn
                type="button"
                onClick={handleOpenModal(
                  <RatioModal
                    ref={modalRef}
                    ratio={dropdownSelectValue}
                    handleChangeRatio={handleChangeRatio}
                    handleCloseModal={handleCloseModal}
                  />,
                )}
              >
                <RatioIcon />
              </S.MobileRatioBtn>
            ) : (
              <DropdownBtn
                css={S.dropdown}
                btnRender={<RatioIcon />}
                dropdownItems={[
                  {
                    label: "정방형",
                    value: "1:1",
                    handler: handleChangeRatio && handleChangeRatio("1:1"),
                  },
                  {
                    label: "가로형 (3:4)",
                    value: "3:4",
                    handler: handleChangeRatio && handleChangeRatio("3:4"),
                  },
                  {
                    label: "세로형 (4:3)",
                    value: "4:3",
                    handler: handleChangeRatio && handleChangeRatio("4:3"),
                  },
                ]}
                selectValue={dropdownSelectValue}
              />
            )}
          </S.PreviewBtnWrapper>
        </>
      ) : (
        defaultImg && (
          <Image
            src={defaultImg}
            alt={alt ?? "이미지 미리보기"}
            fill
            style={{ objectFit: "contain" }}
          />
        )
      )}
    </S.PreviewImgWrapper>
  ) : (
    <ErrorWrapper isError={isError} errorMessage="사진을 업로드해 주세요.">
      <S.ImgUpload className={className} htmlFor="imgUpload" isError={isError}>
        <S.UploadInput
          id="imgUpload"
          type="file"
          accept=".jpg, .jpeg, .png, .heic"
          {...register("file", {
            required: true,
            onChange: makePreviewImg,
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
