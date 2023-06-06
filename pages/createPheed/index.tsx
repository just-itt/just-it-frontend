import React from "react";

import {
  PheedLayout,
  PheedHeader,
  PheedFilter,
  ImgUpload,
} from "@components/index";
import { useCreatePheedForm } from "./hooks";
import * as S from "./index.styled";

const CreatePheed = () => {
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
      <PheedLayout css={S.layout}>
        <ImgUpload
          css={S.imgUpload}
          type="create"
          isError={!!errors.file}
          register={register}
          handleChangeRatio={handleChangeRatio}
          handleDeleteImgFile={handleDeleteImgFile}
        />
        <PheedFilter register={register} watch={watch} errors={errors} />
      </PheedLayout>
    </>
  );
};

export default CreatePheed;
