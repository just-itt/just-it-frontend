import React, { useState } from "react";

import { UnvisibleIcon, VisibleIcon } from "@icons/index";
import * as S from "./LabelContent.styled";

interface LabelContentProps {
  className?: string;
  label: string;
  children: React.ReactNode;
}

interface InputProps {
  className?: string;
  disabled?: boolean;
  placeholder: string;
  value?: string;
}

interface PasswordInputProps {
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

LabelContent.Input = ({
  className,
  disabled,
  placeholder,
  value,
}: InputProps) => {
  return (
    <S.Input
      className={className}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
    />
  );
};

LabelContent.PasswordInput = ({ placeholder }: PasswordInputProps) => {
  const [isPasswordBtnClick, setIsPasswordBtnClick] = useState(false);

  const handleClickPasswordBtn = () => {
    setIsPasswordBtnClick(!isPasswordBtnClick);
  };

  return (
    <S.InputWrapper>
      <S.Input
        type={isPasswordBtnClick ? "text" : "password"}
        placeholder={placeholder}
      />
      <button type="button" onClick={handleClickPasswordBtn}>
        {isPasswordBtnClick ? <VisibleIcon /> : <UnvisibleIcon />}
      </button>
    </S.InputWrapper>
  );
};

LabelContent.Textarea = ({ className, placeholder }: TextareaProps) => {
  return <S.Textarea className={className} placeholder={placeholder} />;
};

export default LabelContent;
