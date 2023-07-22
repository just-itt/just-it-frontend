import React from "react";

import { PheedHeader, PheedFilter, ImgUpload } from "@components/index";
import { useCreatePheedForm } from "./hooks";
import * as S from "./CreatePheedContainer.styled";

const CreatePheedContainer = () => {
  const {
    register,
    watch,
    errors,
    handleSubmit,
    handleChangeRatio,
    handleDeleteImgFile,
  } = useCreatePheedForm();

  return (
    <>
      <PheedHeader
        type="create"
        isError={!!Object.keys(errors).length}
        handleSubmit={handleSubmit}
      />
      <S.Wrapper>
        <ImgUpload
          css={S.imgUpload}
          type="create"
          isError={!!errors.file}
          register={register}
          handleChangeRatio={handleChangeRatio}
          handleDeleteImgFile={handleDeleteImgFile}
        />
        <PheedFilter register={register} watch={watch} errors={errors} />
      </S.Wrapper>
    </>
  );
};

export default CreatePheedContainer;
