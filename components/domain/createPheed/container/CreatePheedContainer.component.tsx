import React from "react";

import {
  PheedHeader,
  PheedFilter,
  ImgUpload,
  Dim,
  Spinner,
} from "@components/index";
import { useCreatePheedForm, useImageLoading } from "./hooks";
import * as S from "./CreatePheedContainer.styled";

const CreatePheedContainer = () => {
  const {
    cropperRef,
    isPostPheedLoading,
    register,
    watch,
    errors,
    handleSubmit,
    deleteImgFile,
    handleImgCrop,
    handleChangeRatio,
  } = useCreatePheedForm();
  const { isLoading, isImageLoading } = useImageLoading();

  return (
    <>
      {isLoading && (
        <Dim>
          <Spinner size="50px" />
        </Dim>
      )}
      <PheedHeader
        type="create"
        isError={!!Object.keys(errors).length}
        isLoading={isPostPheedLoading}
        handleSubmit={handleSubmit}
      />
      <S.Wrapper>
        <ImgUpload
          css={S.imgUpload}
          type="create"
          isError={!!errors.file}
          register={register}
          dropdownSelectValue={watch("ratio")}
          cropperRef={cropperRef}
          deleteImgFile={deleteImgFile}
          isImageLoading={isImageLoading}
          handleImgCrop={handleImgCrop}
          handleChangeRatio={handleChangeRatio}
        />
        <PheedFilter register={register} watch={watch} errors={errors} />
      </S.Wrapper>
    </>
  );
};

export default CreatePheedContainer;
