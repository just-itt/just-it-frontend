import React from "react";

import { Dim, Portal } from "@components/index";
import { useModal } from "@hooks/index";

const BaseModal = () => {
  const {
    isReady,
    modal: { isOpen, modalComponent },
  } = useModal();

  if (!isReady) return null;

  return <Portal>{isOpen && <Dim>{modalComponent}</Dim>}</Portal>;
};

export default BaseModal;
