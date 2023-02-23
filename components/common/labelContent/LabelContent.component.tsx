import React from "react";

import * as S from "./LabelContent.styled";

interface LabelContentProps {
  className?: string;
  label: string;
  children: React.ReactNode;
}

interface InputProps {
  placeholder: string;
}

interface TextareaProps {
  className?: string;
  placeholder: string;
}

const LabelContent = ({ className, label, children }: LabelContentProps) => {
  return (
    <S.Wrapper className={className}>
      <S.Label>{label}</S.Label>
      {children}
    </S.Wrapper>
  );
};

LabelContent.Input = ({ placeholder }: InputProps) => {
  return <S.Input placeholder={placeholder} />;
};

LabelContent.Textarea = ({ className, placeholder }: TextareaProps) => {
  return <S.Textarea className={className} placeholder={placeholder} />;
};

export default LabelContent;
