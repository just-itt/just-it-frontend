import React from "react";

import * as S from "./MainLayout.styled";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <S.MainLayout>{children}</S.MainLayout>;
};

export default MainLayout;
