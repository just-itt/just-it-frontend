import React, { useState } from "react";

import { HiddenPasswordIcon, ShowPasswordIcon } from "@icons/index";
import * as S from "./AuthInput.styled";

interface AuthInputProps {
  autoComplete: "off" | "new-password";
  type?: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthInput = ({
  autoComplete,
  type,
  placeholder,
  handleChange,
}: AuthInputProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleClickPasswordIcon = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <S.InputWrapper>
      <S.Label>이메일</S.Label>
      <S.Input
        autoComplete={autoComplete}
        type={isShowPassword ? "text" : type}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {type === "password" && (
        <S.PasswordBtn type="button" onClick={handleClickPasswordIcon}>
          {isShowPassword ? <ShowPasswordIcon /> : <HiddenPasswordIcon />}
        </S.PasswordBtn>
      )}
    </S.InputWrapper>
  );
};

export default AuthInput;
