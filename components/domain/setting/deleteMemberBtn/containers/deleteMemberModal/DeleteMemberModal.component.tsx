import React from "react";

import { Button } from "@components/index";
import { useModal } from "@hooks/index";
import { CloseIcon } from "@icons/index";
import * as S from "./DeleteMemberModal.styled";

const DeleteMemberModal = () => {
  const { modalRef, isOpenModal, handleCloseModal } = useModal();

  return (
    <S.Modal open={isOpenModal} ref={modalRef}>
      <S.CloseBtn type="button" onClick={handleCloseModal}>
        <CloseIcon />
      </S.CloseBtn>
      <S.Heading>정말 삭제하시겠어요?</S.Heading>
      <S.P>
        삭제한 계정을 되돌릴 수 없으며 작성하신 게시글이 모두 사라지게 됩니다.
      </S.P>
      <Button css={S.deleteBtn} mode="primary" label="삭제하기" />
      <S.CancelBtn type="button" onClick={handleCloseModal}>
        취소
      </S.CancelBtn>
    </S.Modal>
  );
};

export default DeleteMemberModal;
