import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { AuthCodeInput, FormInput } from "@components/index";
import { EMAIL_VALIDATE, PASSWORD_VALIDATE } from "utils/validate";
import { KakaoIcon, LogoLongIcon } from "@icons/index";
import * as S from "./index.styled";

const Login = () => {
  const {
    register,
    watch,
    formState: { errors },
    clearErrors,
    handleSubmit,
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      authCode: "",
    },
  });

  const [isSignUp, setIsSignUp] = useState(false);
  const [isClickAuthBtn, setIsClickAuthBtn] = useState(false);
  const [isCheckAuthCode, setIsCheckAuthCode] = useState(false);

  const handleClickSignUp = () => {
    setIsSignUp(!isSignUp);
    clearErrors();
  };

  const handleAuthCode = () => {
    setIsClickAuthBtn(true);
  };

  const handleCheckAuthCode = () => {
    setIsCheckAuthCode(true);
  };

  return (
    <S.Layout>
      <S.LogoWrapper>
        <LogoLongIcon />
      </S.LogoWrapper>
      <S.KakaoLoginBtn>
        <KakaoIcon />
        카카오 로그인
      </S.KakaoLoginBtn>
      <S.Or>또는 이메일 로그인</S.Or>
      <form
        onSubmit={handleSubmit(
          () => console.log("submit"),
          () => console.log("error"),
        )}
      >
        {isSignUp ? (
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
          </>
        ) : (
          <FormInput
            css={S.marginBottom}
            autoComplete="off"
            placeholder="이메일"
            hasValue={!!watch("email")}
            hasError={!!errors.email}
            errorMsg={
              errors.email?.type === "required"
                ? "이메일을 입력해 주세요."
                : errors.email?.type === "pattern"
                ? "올바른 이메일을 입력해 주세요."
                : ""
            }
            register={register("email", {
              required: true,
              pattern: EMAIL_VALIDATE,
            })}
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
        {isSignUp && (
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
        )}
        {isSignUp ? (
          <>
            <S.PasswordHint>
              영문, 숫자, 특수문자를 포함한 8-20자 조합입니다.
            </S.PasswordHint>
            <S.LoginBtn
              type="submit"
              disabled={Object.keys(errors).length !== 0 || !isCheckAuthCode}
            >
              회원가입
            </S.LoginBtn>
          </>
        ) : (
          <>
            <S.ResetPassword href="">비밀번호를 잊으셨나요?</S.ResetPassword>
            <S.LoginBtn
              type="submit"
              disabled={Object.keys(errors).length !== 0}
            >
              로그인
            </S.LoginBtn>
          </>
        )}
      </form>
      <S.SignUpWrapper>
        {isSignUp ? (
          <>
            <S.SignUpQuestion>이미 계정이 있으신가요?</S.SignUpQuestion>
            <S.SignUp type="submit" onClick={handleClickSignUp}>
              로그인
            </S.SignUp>
          </>
        ) : (
          <>
            <S.SignUpQuestion>
              아직 저스트잇 회원이 아니신가요?
            </S.SignUpQuestion>
            <S.SignUp type="button" onClick={handleClickSignUp}>
              회원가입
            </S.SignUp>
          </>
        )}
      </S.SignUpWrapper>
    </S.Layout>
  );
};

export default Login;
