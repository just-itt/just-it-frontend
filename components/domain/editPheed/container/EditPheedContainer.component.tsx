import React from "react";

import { PheedHeader, PheedFilter, ImgUpload } from "@components/index";
import { useEditPheedForm } from "./hooks";
import * as S from "./EditPheedContainer.styled";

const EditPheedContainer = () => {
  const {
    register,
    watch,
    errors,
    handleSubmit,
    handleChangeRatio,
    handleDeleteImgFile,
  } = useEditPheedForm();

  return (
    <>
      <PheedHeader
        type="edit"
        isError={!!Object.keys(errors).length}
        handleSubmit={handleSubmit}
      />
      <S.Wrapper>
        <ImgUpload
          css={S.imgUpload}
          type="edit"
          isError={!!errors.file}
          defaultImage={watch("defaultImage")}
          register={register}
          handleChangeRatio={handleChangeRatio}
          handleDeleteImgFile={handleDeleteImgFile}
        />
        <PheedFilter register={register} watch={watch} errors={errors} />
      </S.Wrapper>
    </>
  );
};

export default EditPheedContainer;
