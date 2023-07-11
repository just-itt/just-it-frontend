import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import {
  useDeletePheedReply,
  usePatchPheedReply,
  usePostPheedReply,
} from "@service/index";

const initForm = {
  comment: "",
  postId: "",
  replyId: "",
};

const usePheedReply = (refetchPheedDetail: () => void) => {
  const {
    query: { id },
  } = useRouter();

  const { mutate: postPheedReply } = usePostPheedReply();
  const { mutate: deletePheedReply } = useDeletePheedReply();
  const { mutate: patchPheedReply } = usePatchPheedReply();

  const { register, reset, handleSubmit } = useForm({
    mode: "all",
    defaultValues: initForm,
  });

  const [replyType, setReplyType] = useState<"create" | "edit">("create");

  const changeReplyType = () => {
    setReplyType(replyType === "create" ? "edit" : "create");
  };

  const handleCancelPheedReply = () => reset(initForm);

  const handleEditPheedReply = (
    content: string,
    replyId: number,
    postId: number,
  ) => {
    console.log("replyId", replyId);
    console.log("postId", postId);
    reset({ comment: content, postId: `${postId}`, replyId: `${replyId}` });
  };

  const handleDeletePheedReply = (replyId: number) => () =>
    deletePheedReply(
      { id: +id!, body: { post_id: +id!, reply_id: replyId } },
      {
        onSuccess: () => {
          refetchPheedDetail();
          alert("댓글 삭제가 완료되었습니다.");
        },
      },
    );

  return {
    replyType,
    changeReplyType,
    register,
    handleSubmit: handleSubmit(submitData => {
      if (replyType === "create") {
        postPheedReply(
          {
            id: id as string,
            body: { content: submitData.comment },
          },
          {
            onSuccess: () => {
              refetchPheedDetail();
              reset(initForm);
              alert("댓글 등록이 완료되었습니다.");
            },
          },
        );
      } else {
        patchPheedReply(
          {
            body: {
              post_id: +submitData.postId,
              reply_id: +submitData.replyId,
              content: submitData.comment,
            },
          },
          {
            onSuccess: () => {
              refetchPheedDetail();
              reset(initForm);
              changeReplyType();
              alert("댓글 수정이 완료되었습니다.");
            },
          },
        );
      }
    }),
    handleCancelPheedReply,
    handleEditPheedReply,
    handleDeletePheedReply,
  };
};

export default usePheedReply;
