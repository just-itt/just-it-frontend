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

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    setIsReady(true);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
