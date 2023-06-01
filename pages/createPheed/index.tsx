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
    handleSubmit,
    handleChangeRatio,
    handleClickFilter,
    handleDeleteImgFile,
  } = useCreatePheedForm();

  return (
    <>
      <PheedHeader type="create" handleSubmit={handleSubmit} />
      <PheedLayout css={S.layout}>
        <ImgUpload
          css={S.imgUpload}
          register={register}
          handleChangeRatio={handleChangeRatio}
          handleDeleteImgFile={handleDeleteImgFile}
        />
        <PheedFilter
          register={register}
          watch={watch}
          handleClickFilter={handleClickFilter}
        />
      </PheedLayout>
    </>
  );
};

export default CreatePheed;
