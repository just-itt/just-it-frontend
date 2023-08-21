import { useState } from "react";

const useImageLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  const isImageLoading = (isLoading: boolean) => setIsLoading(isLoading);

  return { isLoading, isImageLoading };
};

export default useImageLoading;
