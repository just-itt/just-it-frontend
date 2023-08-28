import { useState } from "react";

import { errorImage } from "public/images";

const useImageError = () => {
  const IMAGE_ERROR_MESSAGE = "이미지를 찾을 수 없습니다.";
  const [isImageError, setIsImageError] = useState(false);

  const handleErrorImg = () => setIsImageError(true);

  return {
    errorImage,
    isImageError,
    handleErrorImg,
    IMAGE_ERROR_MESSAGE,
  };
};

export default useImageError;
