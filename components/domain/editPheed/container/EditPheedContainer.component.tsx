import React from "react";

import { PheedHeader, PheedFilter, ImgUpload } from "@components/index";
import { useEditPheedForm } from "./hooks";
import * as S from "./EditPheedContainer.styled";

const EditPheedContainer = () => {
  const {
    isEditPheedLoading,
    register,
    watch,
    errors,
    handleSubmit,
    deleteImgFile,
  } = useEditPheedForm();

  return (
    <>
      <PheedHeader
        type="edit"
        isError={!!Object.keys(errors).length}
        isLoading={isEditPheedLoading}
        handleSubmit={handleSubmit}
      />
      <S.Wrapper>
        <ImgUpload
          css={S.imgUpload}
          type="edit"
          alt={watch("title")}
          isError={!!errors.file}
          defaultImg={watch("defaultImg")}
          register={register}
          deleteImgFile={deleteImgFile}
        />
        <PheedFilter register={register} watch={watch} errors={errors} />
      </S.Wrapper>
    </>
  );
};

export default EditPheedContainer;
