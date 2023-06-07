import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { useDeletePheedReply, usePostPheedReply } from "@service/index";

const usePheedReply = (refetchPheedDetail: () => void) => {
  const {
    query: { id },
  } = useRouter();

  const { mutate: postPheedReply } = usePostPheedReply();
  const { mutate: deletePheedReply } = useDeletePheedReply();

  const { register, reset, handleSubmit } = useForm({
    mode: "all",
    defaultValues: {
      comment: "",
    },
  });

  const handleDeletePheedReply = (replyId: number) => () =>
    deletePheedReply({ id: +id!, body: { reply_id: replyId } });

  return {
    register,
    handleSubmit: handleSubmit(submitData => {
      postPheedReply(
        {
          id: id as string,
          body: { content: submitData.comment },
        },
        {
          onSuccess: () => {
            refetchPheedDetail();
            reset();
            alert("댓글 등록이 완료되었습니다.");
          },
        },
      );
    }),
    handleDeletePheedReply,
  };
};

export default usePheedReply;
