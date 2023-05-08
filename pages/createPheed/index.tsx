import React from "react";

import {
  CreatePheedLayout,
  CreatePheedHeader,
  CreatePheedFilter,
  ImgUpload,
} from "@components/index";
import { useCreatePheedFilter, useCreatePheedImg } from "./hooks";
import * as S from "./index.styled";

const index = () => {
  const { selectFilter, handleClickFilter } = useCreatePheedFilter();
  const { previewUrl, handleChangeImg, handleChangeRatio } =
    useCreatePheedImg();

  return (
    <>
      <CreatePheedHeader />
      <CreatePheedLayout css={S.layout}>
        <ImgUpload
          css={S.imgUpload}
          previewUrl={previewUrl}
          handleChangeImg={handleChangeImg}
          handleChangeRatio={handleChangeRatio}
        />
        <CreatePheedFilter handleClickFilter={handleClickFilter} />
      </CreatePheedLayout>
    </>
  );
};

export default index;
