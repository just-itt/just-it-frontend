import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { PersonIcon, UnvisibleIcon, VisibleIcon } from "@icons/index";
import * as S from "./FormInput.style";

interface FormInputProps {
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  hasValue: boolean;
  hasError: boolean;
  autoComplete?: "off" | "new-password";
  type?: "text" | "password";
  errorMsg?: string;
  register: any;
}

const FormInput = ({
  className,
  placeholder,
  disabled,
  autoComplete,
  hasValue,
  hasError,
  type,
  errorMsg,
  register,
}: FormInputProps) => {
  const uuid = uuidv4();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleClickPasswordIcon = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <S.FormWrapper
      className={className}
      hasValue={hasValue}
      hasError={hasError}
    >
      <S.InputWrapper>
        <S.Input
          autoComplete={autoComplete}
          id={uuid}
          type={isShowPassword ? "text" : type}
          disabled={disabled}
          {...register}
        />
        <S.Placeholder htmlFor={uuid}>{placeholder}</S.Placeholder>
        {type === "password" && (
          <S.PasswordBtn type="button" onClick={handleClickPasswordIcon}>
            {isShowPassword ? <VisibleIcon /> : <UnvisibleIcon />}
          </S.PasswordBtn>
        )}
      </S.InputWrapper>
      {errorMsg && <S.ErrorMsg>{errorMsg}</S.ErrorMsg>}
    </S.FormWrapper>
  );
};

export default FormInput;
