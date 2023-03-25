import React from "react";

import { Portal } from "@components/common";

interface BaseModalProps {
  children: React.ReactNode;
}

const BaseModal = ({ children }: BaseModalProps) => {
  return <Portal>{children}</Portal>;
};

export default BaseModal;
