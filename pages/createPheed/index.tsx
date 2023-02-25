import React, { useState } from "react";

import {
  CreatePheedHeader,
  CreatePheedLayout,
  ImgUpload,
  LabelContent,
} from "@components/index";
import * as S from "./index.styled";

const index = () => {
  const [imgs, setImgs] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [urlIndex, setUrlIndex] = useState(0);

  const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: File[] = [...(e.target.files as FileList)];

    const temp: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);

      reader.onloadend = () => {
        temp.push(reader.result as string);

        if (temp.length === files.length) {
          setPreviewUrls(temp);
        }
      };
    }

    setImgs([...files]);
  };

  const handleAddImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: File[] = [...(e.target.files as FileList)];

    const addFiles = [...imgs, ...files];

    const temp: string[] = [];
    for (let i = 0; i < addFiles.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(addFiles[i]);

      reader.onloadend = () => {
        temp[i] = reader.result as string;

        if (temp.filter(Boolean).length === addFiles.length) {
          setPreviewUrls(temp);
        }
      };
    }

    setImgs([...imgs, ...files]);
  };

  const handleDeleteImg = (imgIndex: number) => () => {
    setImgs(imgs.filter((_, i) => i !== imgIndex));
    setPreviewUrls(previewUrls.filter((_, i) => i !== imgIndex));

    if (urlIndex !== 0) {
      setUrlIndex(urlIndex - 1);
    }
  };

  const handleClickLeftBtn = () => {
    if (urlIndex === 0) return;

    setUrlIndex(urlIndex - 1);
  };

  const handleClickRightBtn = () => {
    if (urlIndex === 2 || urlIndex + 1 === previewUrls.length) return;

    setUrlIndex(urlIndex + 1);
  };

  return (
    <>
      <CreatePheedHeader />
      <CreatePheedLayout css={S.layout}>
        <ImgUpload
          css={S.imgUpload}
          previewUrls={previewUrls}
          urlIndex={urlIndex}
          handleChangeImg={handleChangeImg}
          handleAddImg={handleAddImg}
          handleDeleteImg={handleDeleteImg}
          handleClickLeftBtn={handleClickLeftBtn}
          handleClickRightBtn={handleClickRightBtn}
        />
        <S.ContentWrapper>
          <LabelContent css={S.margin} label="글 제목 (필수)">
            <LabelContent.Input placeholder="음식 이름 입력..." />
          </LabelContent>
          <LabelContent css={S.margin} label="설명">
            <LabelContent.Textarea
              css={S.textArea}
              placeholder="공유할 음식에 대해 자유롭게 설명해 주세요"
            />
          </LabelContent>
          <LabelContent css={S.margin} label="# 음식종류">
            종류
          </LabelContent>
          <LabelContent css={S.margin} label="# 테마">
            분위기
          </LabelContent>
        </S.ContentWrapper>
      </CreatePheedLayout>
    </>
  );
};

export default index;
