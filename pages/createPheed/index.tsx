import React, { useState, useRef } from "react";

import {
  CreatePheedHeader,
  CreatePheedLayout,
  ImgUpload,
  LabelContent,
} from "@components/index";
import * as S from "./index.styled";

const index = () => {
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [ratio, setRatio] = useState({ x: 1, y: 1 });
  const [canvasPreviewUrls, setCanvasPreviewUrls] = useState<string[]>([]);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleChangeRatio = (x: number, y: number) => () => {
    setRatio({ x, y });
  };

  const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file: File = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);

      // const image = new Image();
      // image.src = reader.result as string;
      // image.onload = () => {
      //   const canvas = canvasRef.current;
      //   const context = canvas?.getContext("2d");
      //   const { width, height } = image;

      //   const desiredRatio = 1 / 1;
      //   let cropWidth;
      //   let cropHeight;
      //   let xOffset;
      //   let yOffset;
      //   if (width / height > desiredRatio) {
      //     cropHeight = height;
      //     cropWidth = cropHeight * desiredRatio;
      //     xOffset = (width - cropWidth) / 2;
      //     yOffset = 0;
      //   } else {
      //     cropWidth = width;
      //     cropHeight = cropWidth / desiredRatio;
      //     xOffset = 0;
      //     yOffset = (height - cropHeight) / 2;
      //   }

      //   if (canvas) {
      //     canvas.width = cropWidth;
      //     canvas.height = cropHeight;
      //   }
      //   context?.drawImage(
      //     image,
      //     xOffset,
      //     yOffset,
      //     cropWidth,
      //     cropHeight,
      //     0,
      //     0,
      //     cropWidth,
      //     cropHeight,
      //   );
      // };
    };

    setImgFile(file);
  };

  return (
    <>
      <CreatePheedHeader />
      <CreatePheedLayout css={S.layout}>
        <ImgUpload
          css={S.imgUpload}
          ratio={ratio}
          previewUrl={previewUrl}
          handleChangeImg={handleChangeImg}
          handleChangeRatio={handleChangeRatio}
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
