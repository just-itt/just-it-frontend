import React, { useEffect } from "react";

import { handleResize } from "utils";
import * as S from "./PheedLayout.styled";

interface PheedLayoutProps {
  children: React.ReactNode;
}

const PheedLayout = ({ children }: PheedLayoutProps) => {
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <S.PheedLayout>{children}</S.PheedLayout>;
};

export default PheedLayout;
