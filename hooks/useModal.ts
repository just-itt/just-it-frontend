import React, { useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";

import { modalAtom } from "@recoil/common";

const useModal = () => {
  const [isReady, setIsReady] = useState(false);

  const modalRef = useRef<HTMLDialogElement>(null);

  const [modal, setModal] = useRecoilState(modalAtom);

  const handleOpenModal = (modalComponent: React.ReactNode) => () => {
    setModal({ isOpen: true, modalComponent });
  };

  const handleCloseModal = () => {
    setModal({ isOpen: false, modalComponent: null });
  };

  useEffect(() => {
    setIsReady(true);

    const handleClickESC = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modal.isOpen) {
        handleCloseModal();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleCloseModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keyup", handleClickESC);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keyup", handleClickESC);
      document.body.style.overflow = "unset";
    };
  }, []);

  return {
    modalRef,
    isReady,
    isOpenModal: modal.isOpen,
    modal,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useModal;
