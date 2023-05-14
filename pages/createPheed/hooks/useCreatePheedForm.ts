import { useForm } from "react-hook-form";

import { usePostPheed } from "@service/index";

const useCreatePheedForm = () => {
  const { register, setValue, watch, handleSubmit } = useForm<{
    file: File | null;
    title: string;
    content?: string;
    tagOptions: number[];
  }>({
    defaultValues: {
      file: null,
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

  const createPheed = (data: any) => {
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
    handleClickFilter,
  };
};

export default useCreatePheedForm;
