import React from "react";

import {
  CreatePheedLayout,
  CreatePheedHeader,
  CreatePheedFilter,
  ImgUpload,
} from "@components/index";
import { usePostPheed } from "@service/index";
import { useCreatePheedFilter, useCreatePheedImg } from "./hooks";
import * as S from "./index.styled";

const index = () => {
  const {
    content,
    selectFilter,
    handleClickFilter,
    handleTitle,
    handleContent,
  } = useCreatePheedFilter();
  const { imgFile, previewUrl, handleChangeImg, handleChangeRatio } =
    useCreatePheedImg();

  const { mutate: postPheedMutate } = usePostPheed();

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", imgFile!);

    postPheedMutate({
      body: {
        image: formData,
        title: content.title,
        content: content.content,
        ratio: "1:1",
        tag_options: selectFilter,
      },
    });
  };

  return (
    <>
      <CreatePheedHeader handleSubmit={handleSubmit} />
      <CreatePheedLayout css={S.layout}>
        <ImgUpload
          css={S.imgUpload}
          previewUrl={previewUrl}
          handleChangeImg={handleChangeImg}
          handleChangeRatio={handleChangeRatio}
        />
        <CreatePheedFilter
          handleClickFilter={handleClickFilter}
          handleTitle={handleTitle}
          handleContent={handleContent}
        />
      </CreatePheedLayout>
    </>
  );
};

export default index;
