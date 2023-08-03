import React from "react";

import * as S from "./AuthLayout.styled";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <S.AuthLayout>{children}</S.AuthLayout>;
};

export default AuthLayout;
