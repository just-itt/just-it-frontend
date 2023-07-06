import React from "react";

import { Header, Nav } from "@components/index";
import * as S from "./MainLayout.styled";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <S.MainLayout>
      <Header />
      <S.BodyLayout>
        <Nav />
        {children}
      </S.BodyLayout>
    </S.MainLayout>
  );
};

export default MainLayout;
