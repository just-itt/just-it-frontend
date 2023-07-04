import React from "react";
import { useRouter } from "next/router";

import { Button } from "@components/index";
import { useModal } from "@hooks/index";
import * as S from "./LoginLinkModal.styled";

const LoginLinkModal = () => {
  const { push } = useRouter();

  const { handleCloseModal } = useModal();

  const handleConfirm = () => {
    push("/login");
    handleCloseModal();
  };

  return (
    <S.LoginLinkModal>
      로그인이 필요해요. <br /> 로그인 페이지로 이동하시겠어요?
      <S.BtnWrapper>
        <Button
          css={S.cancelBtn}
          mode="secondary"
          type="button"
          label="취소"
          handler={handleCloseModal}
        />
        <Button
          css={S.link}
          mode="primary"
          type="button"
          label="이동하기"
          handler={handleConfirm}
        />
      </S.BtnWrapper>
    </S.LoginLinkModal>
  );
};

export default LoginLinkModal;
