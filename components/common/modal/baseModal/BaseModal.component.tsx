import React from "react";

import { Portal } from "@components/common";
import type * as type from "types";

const BaseModal = ({ children }: type.BaseModalProps) => {
  return <Portal>{children}</Portal>;
};

export default BaseModal;
