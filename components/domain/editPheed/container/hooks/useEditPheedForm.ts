import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { useEditPheed, useGetPheedDetail } from "@service/index";
import type { PheedForm } from "types";

const useEditPheedForm = () => {
  const {
    push,
    query: { id: pheedId, currentPath },
  } = useRouter();

  const {
    register,
    setValue,
    watch,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<PheedForm>({
    defaultValues: {
      file: null,
      defaultImage: "",
      ratio: "1:1",
      title: "",
      content: "",
      what: null,
      when: null,
      who: null,
      etc: [],
    },
  });

  const { data: pheedData } = useGetPheedDetail({ id: pheedId as string });
  const { mutate: patchPheedMutate } = useEditPheed();

  const handleChangeRatio = (ratio: "1:1" | "3:4" | "4:3") => () => {
    setValue("ratio", ratio);
  };

  const handleDeleteImgFile = () => {
    setValue("file", null);
  };

  const editPheed = (data: PheedForm) => {
    const formData = new FormData();

    formData.append(
      "payload",
      JSON.stringify({
        title: data.title,
        content: data.content,
        ratio: "1:1",
        tag_options: [data.what, data.when, data.who, ...data.etc],
      }),
    );

    patchPheedMutate(
      { id: pheedId as string, body: formData },
      {
        onSuccess: () => {
          alert("피드 수정이 완료되었습니다.");
          push(currentPath as string);
        },
      },
    );
  };

  useEffect(() => {
    if (!pheedData) return;

    reset({
      file: null,
      defaultImage: pheedData.image.image,
      ratio: pheedData.image.ratio,
      title: pheedData.title,
      content: pheedData.content,
      what: `${pheedData.tag_options[0].id}`,
      when: `${pheedData.tag_options[1].id}`,
      who: `${pheedData.tag_options[2].id}`,
      etc: pheedData.tag_options
        .filter((_, i) => i > 2)
        .map(item => `${item.id}`),
    });
  }, [pheedData]);

  return {
    register,
    watch,
    errors,
    handleSubmit: handleSubmit(editPheed),
    handleChangeRatio,
    handleDeleteImgFile,
  };
};

export default useEditPheedForm;
