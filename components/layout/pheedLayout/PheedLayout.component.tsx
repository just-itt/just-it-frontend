import React from "react";

import { useResize } from "@hooks/index";
import * as S from "./PheedLayout.styled";

interface PheedLayoutProps {
  children: React.ReactNode;
}

const PheedLayout = ({ children }: PheedLayoutProps) => {
  useResize();

  return <S.PheedLayout>{children}</S.PheedLayout>;
};

export default PheedLayout;
