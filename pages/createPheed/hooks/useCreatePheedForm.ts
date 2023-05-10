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
    console.log(data);
  };

  return {
    register,
    watch,
    handleSubmit: handleSubmit(createPheed),
    handleClickFilter,
  };
};

export default useCreatePheedForm;
