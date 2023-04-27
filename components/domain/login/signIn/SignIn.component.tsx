import React, { useState } from "react";

import { AuthCodeInput, FormInput } from "@components/index";
import { useEmailAuth, useEmailAuthCode } from "@service/index";
import { EMAIL_VALIDATE, PASSWORD_VALIDATE } from "utils/validate";
import * as S from "./SignIn.styled";

interface SignInProps {
  watch: any;
  errors: any;
  register: any;
}

const SignIn = ({ watch, errors, register }: SignInProps) => {
  const [isClickAuthBtn, setIsClickAuthBtn] = useState(false);
  const [isCheckAuthCode, setIsCheckAuthCode] = useState(false);

  const { mutate: useEmailAuthMutate } = useEmailAuth();
  const { mutate: useEmailAuthCodeMutate } = useEmailAuthCode();

  const handleAuthCode = () => {
    useEmailAuthMutate(
      { query: { email: watch("email") } },
      {
        onSuccess: () => {
          setIsClickAuthBtn(true);
        },
        onError: (err: any) => {
          if (err.response.data.message === "Email already authorized") {
            alert("이미 가입한 이메일이다!");
          }
        },
      },
    );
  };

  const handleCheckAuthCode = () => {
    useEmailAuthCodeMutate(
      { query: { email: watch("email"), auth_code: watch("authCode") } },
      {
        onSuccess: () => {
          setIsCheckAuthCode(true);
        },
      },
    );
  };

  const handleClickSignUp = () => {};

  return (
    <>
      <AuthCodeInput
        css={S.marginBottom}
        placeholder="이메일"
        inputDisabled={isClickAuthBtn}
        hasValue={!!watch("email")}
        hasError={!!errors.email}
        errorMsg={
          errors.email?.type === "required"
            ? "이메일을 입력해 주세요."
            : errors.email?.type === "pattern"
            ? "올바른 이메일을 입력해 주세요."
            : ""
        }
        btnMsg="인증코드 받기"
        register={register("email", {
          required: true,
          pattern: EMAIL_VALIDATE,
        })}
        handleAuthCode={handleAuthCode}
      />
      {isClickAuthBtn && (
        <AuthCodeInput
          css={S.marginBottom}
          type="text"
          placeholder="인증코드 입력"
          inputDisabled={isCheckAuthCode}
          isCheckAuthCode={isCheckAuthCode}
          btnDisabled={watch("authCode").length === 0}
          hasValue={!!watch("authCode")}
          hasError={!!errors.authCode}
          errorMsg={
            errors.authCode?.type === "required"
              ? "인증코드를 입력해 주세요."
              : errors.authCode?.type === "authCode"
              ? "인증코드가 올바르지 않습니다."
              : ""
          }
          btnMsg="인증하기"
          register={register("authCode", {
            required: true,
          })}
          handleAuthCode={handleCheckAuthCode}
        />
      )}
      <FormInput
        css={S.marginBottom}
        autoComplete="new-password"
        placeholder="비밀번호 확인"
        type="password"
        hasValue={!!watch("passwordConfirm")}
        hasError={!!errors.passwordConfirm}
        errorMsg={
          errors.passwordConfirm?.type === "required"
            ? "비밀번호를 한번 더 입력해 주세요."
            : errors.passwordConfirm?.type === "pattern"
            ? "비밀번호가 일치하지 않습니다."
            : ""
        }
        register={register("passwordConfirm", {
          required: true,
          pattern: PASSWORD_VALIDATE,
          validate: (value: any, formValues: any) =>
            value === formValues.password,
        })}
      />
      <S.PasswordHint>
        영문, 숫자, 특수문자를 포함한 8-20자 조합입니다.
      </S.PasswordHint>
      <S.LoginBtn type="submit" disabled={Object.keys(errors).length !== 0}>
        회원가입
      </S.LoginBtn>

      <S.SignUpWrapper>
        <S.SignUpQuestion>이미 계정이 있으신가요?</S.SignUpQuestion>
        <S.SignUp type="submit" onClick={handleClickSignUp}>
          로그인
        </S.SignUp>
      </S.SignUpWrapper>
    </>
  );
};

export default SignIn;
