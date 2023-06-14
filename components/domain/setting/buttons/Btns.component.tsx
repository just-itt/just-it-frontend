import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useResetRecoilState } from "recoil";

import { useModal } from "@hooks/index";
import { profileAtom } from "@recoil/common";
import { DeleteMemberModal } from "./containers";
import * as S from "./Btns";

const Btns = () => {
  const { push } = useRouter();
  const { handleOpenModal } = useModal();

  const resetProfile = useResetRecoilState(profileAtom);

  const handleLogout = () => {
    Cookies.remove("auth");
    push("/");
    resetProfile();
  };

  return (
    <S.BtnWrapper>
      <S.Btn type="button" onClick={handleLogout}>
        로그아웃
      </S.Btn>
      <S.Btn type="button" onClick={handleOpenModal(<DeleteMemberModal />)}>
        계정삭제
      </S.Btn>
    </S.BtnWrapper>
  );
};

export default Btns;
