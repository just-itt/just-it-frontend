import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { HiddenPasswordIcon, ShowPasswordIcon } from "@icons/index";
import type * as type from "types/components/common/input/formInput";
import * as S from "./FormInput.style";

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
}: type.FormInputProps) => {
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
            {isShowPassword ? <ShowPasswordIcon /> : <HiddenPasswordIcon />}
          </S.PasswordBtn>
        )}
      </S.InputWrapper>
      {errorMsg && <S.ErrorMsg>{errorMsg}</S.ErrorMsg>}
    </S.FormWrapper>
  );
};

export default FormInput;
