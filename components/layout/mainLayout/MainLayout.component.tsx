import React from "react";
import { useRecoilValue } from "recoil";

import { Header, Nav } from "@components/common";
import { navAtom } from "@recoil/common";
import { useViewport } from "@hooks/index";
import * as S from "./MainLayout.styled";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const isClickNav = useRecoilValue(navAtom);
  const { isDesktop } = useViewport();

  return (
    <S.MainLayout>
      <Header />
      <S.BodyLayout>
        {isDesktop && <Nav />}
        {!isDesktop && isClickNav && <Nav />}
        {children}
      </S.BodyLayout>
    </S.MainLayout>
  );
};

export default MainLayout;
