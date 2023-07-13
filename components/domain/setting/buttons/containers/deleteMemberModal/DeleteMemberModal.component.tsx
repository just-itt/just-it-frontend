import React from "react";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";

import { Button } from "@components/index";
import { useDeleteMember } from "@service/index";
import { useModal } from "@hooks/index";
import { CloseIcon } from "@icons/index";
import * as S from "./DeleteMemberModal.styled";

const DeleteMemberModal = () => {
  const { push } = useRouter();

  const queryClient = useQueryClient();
  const { mutate: deleteMemberMutate } = useDeleteMember();

  const { modalRef, handleCloseModal } = useModal();

  const handleDeleteMember = () => {
    deleteMemberMutate(undefined, {
      onSuccess: () => {
        toast.success("계정 삭제가 완료되었습니다.");
        push("/");
        queryClient.clear();
        Cookies.remove("auth");
        handleCloseModal();
      },
    });
  };

  return (
    <S.Modal open ref={modalRef}>
      <S.CloseBtn type="button" onClick={handleCloseModal}>
        <CloseIcon />
      </S.CloseBtn>
      <S.Heading>정말 삭제하시겠어요?</S.Heading>
      <S.P>
        삭제한 계정을 되돌릴 수 없으며 작성하신 게시글이 모두 사라지게 됩니다.
      </S.P>
      <Button
        css={S.deleteBtn}
        mode="primary"
        label="삭제하기"
        handler={handleDeleteMember}
      />
      <S.CancelBtn type="button" onClick={handleCloseModal}>
        취소
      </S.CancelBtn>
    </S.Modal>
  );
};

export default DeleteMemberModal;
