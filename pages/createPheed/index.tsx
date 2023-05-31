import React from "react";

import {
  CreatePheedLayout,
  PheedHeader,
  CreatePheedFilter,
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
      <PheedHeader handleSubmit={handleSubmit} />
      <CreatePheedLayout css={S.layout}>
        <ImgUpload
          css={S.imgUpload}
          register={register}
          handleChangeRatio={handleChangeRatio}
          handleDeleteImgFile={handleDeleteImgFile}
        />
        <CreatePheedFilter
          register={register}
          watch={watch}
          handleClickFilter={handleClickFilter}
        />
      </CreatePheedLayout>
    </>
  );
};

export default CreatePheed;
