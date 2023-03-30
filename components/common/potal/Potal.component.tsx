/* eslint-disable consistent-return */

import React from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
}

const Potal = ({ children }: PortalProps) => {
  return createPortal(
    children,
    document.getElementById("modal") as HTMLElement,
  );
};

export default Potal;
