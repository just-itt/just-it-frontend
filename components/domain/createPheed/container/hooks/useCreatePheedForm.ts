import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { usePostPheed } from "@service/index";
import type { PheedForm } from "types";

const useCreatePheedForm = () => {
  const { push } = useRouter();

  const {
    register,
    setValue,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<PheedForm>({
    mode: "all",
    defaultValues: {
      file: null,
      ratio: "1:1",
      title: "",
      content: "",
      what: null,
      when: null,
      who: null,
      etc: [],
    },
  });

  const { mutate: postPheedMutate } = usePostPheed();

  const handleChangeRatio = (ratio: "1:1" | "3:4" | "4:3") => () => {
    setValue("ratio", ratio);
  };

  const handleDeleteImgFile = () => {
    setValue("file", null);
  };

  const createPheed = (data: PheedForm) => {
    const formData = new FormData();

    if (!data.what || !data.when || !data.who || !data.file) return;

    formData.append("image", data.file[0]);
    formData.append(
      "payload",
      JSON.stringify({
        title: data.title,
        content: data.content,
        ratio: "1:1",
        tag_options: [
          +data.what,
          +data.when,
          +data.who,
          ...data.etc.map(item => +item),
        ],
      }),
    );

    postPheedMutate(formData, {
      onSuccess: () => {
        toast.success("피드가 생성되었습니다.");
        push("/");
      },
      onError: () => {
        toast.error("피드 생성을 실패했습니다. 다시 시도해 주세요.");
      },
    });
  };

  return {
    register,
    watch,
    errors,
    handleSubmit: handleSubmit(createPheed),
    handleChangeRatio,
    handleDeleteImgFile,
  };
};

export default useCreatePheedForm;
