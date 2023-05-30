import React, { useEffect, useRef } from "react";

import { Button } from "@components/index";
import { useModal } from "@hooks/index";
import * as S from "./ConfirmModal.styled";

interface ConfirmModalProps {
  className?: string;
  content: string;
  confirmLabel: string;
  cancelLabel: string;
  handleConfirm: () => void;
}

const ConfirmModal = ({
  className,
  content,
  confirmLabel,
  cancelLabel,
  handleConfirm,
}: ConfirmModalProps) => {
  const confirmModalRef = useRef<HTMLDivElement>(null);

  const { handleCloseModal } = useModal();

  const handleClickCancelBtn = () => {
    handleCloseModal();
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      confirmModalRef.current &&
      !confirmModalRef.current.contains(e.target as Node)
    ) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <S.Wrapper className={className} ref={confirmModalRef}>
      <S.Content>{content}</S.Content>
      <S.BtnWrapper>
        <Button
          css={S.cancelBtn}
          type="button"
          mode="primary"
          label={cancelLabel}
          handler={handleClickCancelBtn}
        />
        <Button
          type="button"
          mode="primary"
          label={confirmLabel}
          handler={handleConfirm}
        />
      </S.BtnWrapper>
    </S.Wrapper>
  );
};

export default ConfirmModal;
