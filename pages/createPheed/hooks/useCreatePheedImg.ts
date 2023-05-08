import { useState } from "react";

const useCreatePheedImg = () => {
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [ratio, setRatio] = useState({ x: 1, y: 1 });

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
    };

    setImgFile(file);
  };

  return {
    previewUrl,
    handleChangeImg,
    handleChangeRatio,
  };
};

export default useCreatePheedImg;
