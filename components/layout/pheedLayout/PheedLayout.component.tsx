import React from "react";

import * as S from "./pheedLayout.styled";

interface CreatePheedLayoutProps {
  className?: string;
  children: React.ReactNode;
}

const CreatePheedLayout = ({ className, children }: CreatePheedLayoutProps) => {
  return <S.Section className={className}>{children}</S.Section>;
};

export default CreatePheedLayout;
