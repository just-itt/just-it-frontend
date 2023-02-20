import React from "react";

import { Header, Nav } from "@components/common";
import { useViewport } from "@hooks/index";
import * as S from "./MainLayout.styled";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isDesktop } = useViewport();

  return (
    <S.MainLayout>
      <Header />
      <S.BodyLayout>
        {isDesktop && <Nav />}
        {children}
      </S.BodyLayout>
    </S.MainLayout>
  );
};

export default MainLayout;
