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
  isError: boolean;
  register: any;
}

interface PasswordInputProps {
  className?: string;
  placeholder: string;
  register: any;
}

interface TextareaProps {
  className?: string;
  placeholder: string;
  isError: boolean;
  register: any;
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
  isError,
  register,
}: InputProps) => {
  return (
    <S.Input
      className={className}
      disabled={disabled}
      placeholder={placeholder}
      isError={isError}
      {...register}
    />
  );
};

LabelContent.PasswordInput = ({
  className,
  placeholder,
  register,
}: PasswordInputProps) => {
  const [isPasswordBtnClick, setIsPasswordBtnClick] = useState(false);

  const handleClickPasswordBtn = () => {
    setIsPasswordBtnClick(!isPasswordBtnClick);
  };

  return (
    <S.InputWrapper className={className}>
      <S.Input
        type={isPasswordBtnClick ? "text" : "password"}
        placeholder={placeholder}
        {...register}
      />
      <button type="button" onClick={handleClickPasswordBtn}>
        {isPasswordBtnClick ? <VisibleIcon /> : <UnvisibleIcon />}
      </button>
    </S.InputWrapper>
  );
};

LabelContent.Textarea = ({
  className,
  placeholder,
  isError,
  register,
}: TextareaProps) => {
  return (
    <S.Textarea
      className={className}
      placeholder={placeholder}
      isError={isError}
      {...register}
    />
  );
};

export default LabelContent;
