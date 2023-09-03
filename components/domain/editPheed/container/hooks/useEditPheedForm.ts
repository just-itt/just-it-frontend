import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

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
      defaultImg: "",
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
  const { mutate: patchPheedMutate, isLoading: isEditPheedLoading } =
    useEditPheed();

  const deleteImgFile = () => setValue("file", null);

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
          toast.success("피드 수정이 완료되었습니다.");
          push(currentPath as string);
        },
      },
    );
  };

  useEffect(() => {
    if (!pheedData) return;

    const tagOption = { what: "", when: "", who: "", etc: [] as string[] };

    pheedData.tag_options.forEach(({ id, tag_title }) => {
      if (tag_title === "무엇을 먹었나요?") {
        tagOption.what = `${id}`;
      } else if (tag_title === "언제 먹었나요?") {
        tagOption.when = `${id}`;
      } else if (tag_title === "누구랑 먹었나요?") {
        tagOption.who = `${id}`;
      } else {
        tagOption.etc.push(`${id}`);
      }
    });

    reset({
      file: null,
      defaultImg: pheedData.image.image,
      ratio: pheedData.image.ratio,
      title: pheedData.title,
      content: pheedData.content,
      what: tagOption.what,
      when: tagOption.when,
      who: tagOption.who,
      etc: tagOption.etc,
    });
  }, [pheedData]);

  return {
    isEditPheedLoading,
    register,
    watch,
    errors,
    handleSubmit: handleSubmit(editPheed),
    deleteImgFile,
  };
};

export default useEditPheedForm;
