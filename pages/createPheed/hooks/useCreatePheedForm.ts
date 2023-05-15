import { useForm } from "react-hook-form";

import { usePostPheed } from "@service/index";
import type { CreatePheedForm } from "types";

const useCreatePheedForm = () => {
  const { register, setValue, watch, handleSubmit } = useForm<CreatePheedForm>({
    defaultValues: {
      file: null,
      ratio: "1:1",
      title: "",
      content: "",
      tagOptions: [],
    },
  });

  const { mutate: postPheedMutate } = usePostPheed();

  const handleClickFilter = (id: number) => () => {
    if (watch("tagOptions").includes(id)) return;

    setValue("tagOptions", [...watch("tagOptions"), id]);
  };

  const handleChangeRatio = (ratio: "1:1" | "3:4" | "4:3") => () => {
    setValue("ratio", ratio);
  };

  const handleDeleteImgFile = () => {
    setValue("file", null);
  };

  const createPheed = (data: CreatePheedForm) => {
    const formData = new FormData();

    formData.append("image", data.file[0]);
    formData.append(
      "payload",
      JSON.stringify({
        title: data.title,
        content: data.content,
        ratio: "1:1",
        tag_options: data.tagOptions,
      }),
    );

    postPheedMutate(formData);
  };

  return {
    register,
    watch,
    handleSubmit: handleSubmit(createPheed),
    handleChangeRatio,
    handleClickFilter,
    handleDeleteImgFile,
  };
};

export default useCreatePheedForm;
