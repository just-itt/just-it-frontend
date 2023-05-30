import React from "react";

import { Dim, Portal } from "@components/index";
import { useModal } from "@hooks/index";

const BaseModal = () => {
  const { isReady, modalComponent } = useModal();

  if (!isReady) return null;

  return <Portal>{modalComponent && <Dim>{modalComponent}</Dim>}</Portal>;
};

export default BaseModal;
