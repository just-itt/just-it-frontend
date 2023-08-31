import React, { useState } from "react";
import type {
  UseFormWatch,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import { toast } from "react-hot-toast";

import { AuthCodeInput, FormInput } from "@components/index";
import { useEmailAuth, useEmailAuthCode } from "@service/index";
import { EMAIL_VALIDATE, PASSWORD_VALIDATE } from "@utils/index";
import type { LoginForm } from "types";
import * as S from "./SignIn.styled";

interface SignInProps {
  watch: UseFormWatch<LoginForm>;
  errors: FieldErrors<LoginForm>;
  register: UseFormRegister<LoginForm>;
}

const SignIn = ({ watch, errors, register }: SignInProps) => {
  const [isClickAuthBtn, setIsClickAuthBtn] = useState(false);
  const [isCheckAuthCode, setIsCheckAuthCode] = useState(false);

  const { mutate: useEmailAuthMutate, isLoading } = useEmailAuth();
  const { mutate: useEmailAuthCodeMutate } = useEmailAuthCode();

  const handleAuthCode = () => {
    useEmailAuthMutate(
      { query: { email: watch("email") } },
      {
        onSuccess: () => setIsClickAuthBtn(true),
        onError: (err: any) => {
          if (err.response.data.detail === "Email already authorized") {
            toast.error("이미 가입한 이메일입니다!");
          }
        },
      },
    );
  };

  const handleCheckAuthCode = () => {
    useEmailAuthCodeMutate(
      { query: { email: watch("email"), auth_code: watch("authCode") } },
      {
        onSuccess: () => setIsCheckAuthCode(true),
        onError: (err: any) => {
          if (err.response.data.detail === "Authentication code is not valid") {
            toast.error("잘못된 인증코드 입니다!");
          } else {
            toast.error("조금 있다 다시 시도해 주세요!");
          }
        },
      },
    );
  };

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
        btnDisabled={isLoading}
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
        placeholder="비밀번호"
        type="password"
        hasValue={!!watch("password")}
        hasError={!!errors.password}
        errorMsg={
          errors.password?.type === "required"
            ? "비밀번호를 입력해 주세요."
            : errors.password?.type === "pattern"
            ? "비밀번호 조건에 맞지 않습니다."
            : ""
        }
        register={register("password", {
          required: true,
          pattern: PASSWORD_VALIDATE,
        })}
      />
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
          validate: (value, formValues) => value === formValues.password,
        })}
      />
      <S.PasswordHint>
        영문, 숫자, 특수문자를 포함한 8-20자 조합입니다.
      </S.PasswordHint>
      <S.LoginBtn type="submit" disabled={Object.keys(errors).length !== 0}>
        회원가입
      </S.LoginBtn>
    </>
  );
};

export default SignIn;
