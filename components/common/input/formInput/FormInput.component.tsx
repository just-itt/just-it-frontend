import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { HiddenPasswordIcon, ShowPasswordIcon } from "@icons/index";
import type * as type from "types/components/common/input/formInput";
import * as S from "./FormInput.style";

const FormInput = ({
  placeholder,
  autoComplete,
  hasValue,
  hasError,
  type,
  register,
}: type.FormInputProps) => {
  const uuid = uuidv4();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleClickPasswordIcon = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <S.InputWrapper hasValue={hasValue} hasError={hasError}>
      <S.Input
        autoComplete={autoComplete}
        id={uuid}
        type={isShowPassword ? "text" : type}
        {...register}
      />
      <S.Placeholder htmlFor={uuid}>{placeholder}</S.Placeholder>
      {type === "password" && (
        <S.PasswordBtn type="button" onClick={handleClickPasswordIcon}>
          {isShowPassword ? <ShowPasswordIcon /> : <HiddenPasswordIcon />}
        </S.PasswordBtn>
      )}
    </S.InputWrapper>
  );
};

export default FormInput;
