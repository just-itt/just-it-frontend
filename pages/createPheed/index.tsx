import React from "react";

import {
  CreatePheedLayout,
  CreatePheedHeader,
  CreatePheedFilter,
  ImgUpload,
} from "@components/index";
import { useCreatePheedForm, useCreatePheedImg } from "./hooks";
import * as S from "./index.styled";

const index = () => {
  const { imgFile, previewUrl, handleChangeImg, handleChangeRatio } =
    useCreatePheedImg();
  const { register, watch, handleSubmit, handleClickFilter } =
    useCreatePheedForm();

  return (
    <>
      <CreatePheedHeader handleSubmit={handleSubmit} />
      <CreatePheedLayout css={S.layout}>
        <ImgUpload
          css={S.imgUpload}
          previewUrl={previewUrl}
          register={register}
          handleChangeRatio={handleChangeRatio}
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

export default index;
