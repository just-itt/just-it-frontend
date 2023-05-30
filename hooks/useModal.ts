import React, { useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";

import { modalAtom } from "@recoil/index";

const useModal = () => {
  const [isReady, setIsReady] = useState(false);
  const [modalComponent, setModalComponent] =
    useRecoilState<React.ReactNode | null>(modalAtom);

  const modalRef = useRef<HTMLDialogElement>(null);

  const handleOpenModal = (component: React.ReactNode) => () => {
    setModalComponent(component);
  };

  const handleCloseModal = () => {
    setModalComponent(null);
  };

  useEffect(() => {
    setIsReady(true);

    const handleClickESC = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
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
    modalComponent,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useModal;
