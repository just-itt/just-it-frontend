import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { useEditPheed, useGetPheedDetail } from "@service/index";
import type { EditPheedForm } from "types";

const useEditPheedForm = () => {
  const {
    push,
    query: { id: pheedId, currentPath },
  } = useRouter();

  const { register, setValue, watch, reset, handleSubmit } =
    useForm<EditPheedForm>({
      defaultValues: {
        file: null,
        defaultImage: "",
        ratio: "1:1",
        title: "",
        content: "",
        tagOptions: { what: [], when: [], who: [] },
      },
    });

  const { data: pheedData } = useGetPheedDetail({ id: pheedId as string });
  const { mutate: patchPheedMutate } = useEditPheed();

  const handleClickFilter =
    (key: "what" | "when" | "who", id: number) => () => {
      setValue("tagOptions", {
        ...watch("tagOptions"),
        [key]: [id],
      });
    };

  const handleChangeRatio = (ratio: "1:1" | "3:4" | "4:3") => () => {
    setValue("ratio", ratio);
  };

  const handleDeleteImgFile = () => {
    setValue("file", null);
  };

  const editPheed = (data: EditPheedForm) => {
    const formData = new FormData();

    // formData.append("image", data.file[0]);
    formData.append(
      "payload",
      JSON.stringify({
        title: data.title,
        content: data.content,
        ratio: "1:1",
        tag_options: [
          ...data.tagOptions.what,
          ...data.tagOptions.when,
          ...data.tagOptions.who,
        ],
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
      tagOptions: {
        what: [pheedData.tag_options[0].id],
        when: [pheedData.tag_options[1].id],
        who: [pheedData.tag_options[2].id],
      },
    });
  }, [pheedData]);

  return {
    register,
    watch,
    handleSubmit: handleSubmit(editPheed),
    handleChangeRatio,
    handleClickFilter,
    handleDeleteImgFile,
  };
};

export default useEditPheedForm;
