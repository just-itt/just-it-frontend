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
      <PheedLayout css={S.layout}>
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
      </PheedLayout>
    </>
  );
};

export default EditPheed;
