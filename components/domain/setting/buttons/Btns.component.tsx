import React from "react";
import { useRouter } from "next/router";
import { QueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";

import { useModal } from "@hooks/index";
import { DeleteMemberModal } from "./containers";
import * as S from "./Btns";

const Btns = () => {
  const { push } = useRouter();
  const { handleOpenModal } = useModal();

  const queryClient = new QueryClient();

  const handleLogout = () => {
    Cookies.remove("auth");
    push("/");
    queryClient.clear();
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
