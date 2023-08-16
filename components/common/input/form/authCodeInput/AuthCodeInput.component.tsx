import React from "react";

import FormInput from "../formInput/FormInput.component";
import * as S from "./AuthCodeInput.styled";

interface AuthCodeInputProps {
  className?: string;
  placeholder: string;
  inputDisabled?: boolean;
  isCheckAuthCode?: boolean;
  btnDisabled?: boolean;
  hasValue: boolean;
  hasError: boolean;
  type?: "text";
  errorMsg?: string;
  btnMsg?: string;
  register: any;
  handleAuthCode?: () => void;
}

const AuthCodeInput = ({
  className,
  placeholder,
  isCheckAuthCode,
  inputDisabled,
  btnDisabled,
  hasValue,
  hasError,
  type,
  errorMsg,
  btnMsg,
  register,
  handleAuthCode,
}: AuthCodeInputProps) => {
  return (
    <S.AuthCodeInputWrapper className={className}>
      <FormInput
        placeholder={placeholder}
        disabled={inputDisabled}
        hasValue={hasValue}
        hasError={hasError}
        type={type}
        errorMsg={errorMsg}
        register={register}
      />
      {!inputDisabled && (
        <S.AuthCodeBtn
          type="button"
          disabled={btnDisabled}
          onClick={handleAuthCode}
        >
          {btnMsg}
        </S.AuthCodeBtn>
      )}
      {type === "text" && isCheckAuthCode && (
        <S.AuthCodeSeccess>
          {/* <CheckBlueIcon /> */}
          인증이 완료되었습니다.
        </S.AuthCodeSeccess>
      )}
      {/* {type === "text" && !isCheckAuthCode && (
        <S.RetryBtn type="button" onClick={handleAuthCode}>
          인증코드 재전송
        </S.RetryBtn>
      )} */}
    </S.AuthCodeInputWrapper>
  );
};

export default AuthCodeInput;
