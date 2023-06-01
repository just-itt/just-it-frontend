import React from "react";

import {
  PheedLayout,
  PheedHeader,
  PheedFilter,
  ImgUpload,
} from "@components/index";
import { useEditPheedForm } from "./hooks";
import * as S from "./index.styled";

const EditPheed = () => {
  const {
    register,
    watch,
    handleSubmit,
    handleChangeRatio,
    handleClickFilter,
    handleDeleteImgFile,
  } = useEditPheedForm();

  return (
    <>
      <PheedHeader type="edit" handleSubmit={handleSubmit} />
      <PheedLayout css={S.layout}>
        <ImgUpload
          css={S.imgUpload}
          defaultImage={watch("defaultImage")}
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

export default EditPheed;
