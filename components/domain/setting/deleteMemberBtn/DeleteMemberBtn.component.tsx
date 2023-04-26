import React from "react";

import { useModal } from "@hooks/index";
import { DeleteMemberModal } from "./containers";
import * as S from "./DeleteMemberBtn.styled";

const DeleteMemberBtn = () => {
  const { handleOpenModal } = useModal();

  return (
    <S.deleteMemberBtn
      type="button"
      onClick={handleOpenModal(<DeleteMemberModal />)}
    >
      계정삭제
    </S.deleteMemberBtn>
  );
};

export default DeleteMemberBtn;
