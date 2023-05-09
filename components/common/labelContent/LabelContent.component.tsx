import React, { useState, ChangeEvent } from "react";

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
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface PasswordInputProps {
  placeholder: string;
  register: any;
}

interface TextareaProps {
  className?: string;
  placeholder: string;
  handleChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
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
  handleChange,
}: InputProps) => {
  return (
    <S.Input
      className={className}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

LabelContent.PasswordInput = ({
  placeholder,
  register,
}: PasswordInputProps) => {
  const [isPasswordBtnClick, setIsPasswordBtnClick] = useState(false);

  const handleClickPasswordBtn = () => {
    setIsPasswordBtnClick(!isPasswordBtnClick);
  };

  return (
    <S.InputWrapper>
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
  handleChange,
}: TextareaProps) => {
  return (
    <S.Textarea
      className={className}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default LabelContent;
