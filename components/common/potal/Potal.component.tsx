import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import type * as type from "types";

const Potal = ({ children }: type.PortalProps) => {
  const [isCSR, setIsCSR] = useState<boolean>(false);

  useEffect(() => {
    setIsCSR(true);
  }, []);

  if (typeof window === "undefined") return;
  if (!isCSR) return;

  const portal = createPortal(
    children,
    document.getElementById("modal") as HTMLElement,
  );

  return portal;
};

export default Potal;
