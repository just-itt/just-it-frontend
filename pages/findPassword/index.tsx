import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { AuthCodeInput, Button, FormInput } from "@components/index";
import {
  usePatchResetPassword,
  usePostFindPasswordEmailCheck,
  usePostFindPasswordEmailSend,
} from "@service/index";
import { LogoLongIcon } from "@icons/index";
import { PASSWORD_VALIDATE } from "utils/validate";
import * as S from "./index.styled";

const FindPassword = () => {
  const { push } = useRouter();

  const [isClickAuthBtn, setIsClickAuthBtn] = useState(false);
  const [isCheckAuthCode, setIsCheckAuthCode] = useState(false);

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<{
    email: string;
    authCode: string;
    password: string;
    passwordConfirm: string;
  }>();

  const { mutate: postFindPasswordEmailSendMutate } =
    usePostFindPasswordEmailSend({ body: { email: watch("email") } });
  const { mutate: postFindPasswordEmailCheckMutate } =
    usePostFindPasswordEmailCheck({
      body: { email: watch("email"), auth_code: watch("authCode") },
    });
  const { mutate: patchResetPasswordMutate } = usePatchResetPassword({
    body: { email: watch("email"), password: watch("password") },
  });

  const handleAuthCode = () => {
    postFindPasswordEmailSendMutate(undefined, {
      onSuccess: () => {
        setIsClickAuthBtn(true);
      },
      onError: () => {
        alert("error 발생");
      },
    });
  };

  const handleCheckAuthCode = () => {
    postFindPasswordEmailCheckMutate(undefined, {
      onSuccess: () => {
        setIsCheckAuthCode(true);
      },
      onError: () => {
        alert("실패");
      },
    });
  };

  const handleResetPassword = () => {
    patchResetPasswordMutate(undefined, {
      onSuccess: () => {
        alert("성공");
        push("/login");
      },
      onError: () => {
        alert("실패");
      },
    });
  };

  return (
    <S.Layout onSubmit={handleSubmit(() => console.log("hi"))}>
      <S.LogoWrapper href="/">
        <LogoLongIcon />
      </S.LogoWrapper>
      <S.Heading>비밀번호 찾기</S.Heading>
      <S.P>
        본인확인을 위해 이메일 인증을 진행해 주세요. <br /> 인증 후 비밀번호를
        변경하실 수 있습니다.
      </S.P>
      <AuthCodeInput
        css={S.input}
        placeholder="이메일"
        btnMsg="인증코드 받기"
        register={register("email", { required: true })}
        hasValue={!!watch("email")}
        hasError={!!errors.email}
        inputDisabled={isClickAuthBtn}
        btnDisabled={isClickAuthBtn}
        handleAuthCode={handleAuthCode}
      />
      {isClickAuthBtn && (
        <AuthCodeInput
          css={() => S.marginBottom(isCheckAuthCode)}
          type="text"
          placeholder="인증코드 입력"
          btnMsg="인증하기"
          hasValue={!!watch("authCode")}
          hasError={!!errors.authCode}
          isCheckAuthCode={isCheckAuthCode}
          inputDisabled={isCheckAuthCode}
          btnDisabled={isCheckAuthCode}
          register={register("authCode", {
            required: true,
          })}
          handleAuthCode={handleCheckAuthCode}
        />
      )}
      {isCheckAuthCode && (
        <>
          <FormInput
            css={S.input}
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
            css={S.input}
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
            비밀번호는 영문, 숫자, 특수문자를 포함한 8-20자 조합입니다.
          </S.PasswordHint>
        </>
      )}
      <Button
        css={S.passwordChangeBtn}
        type="button"
        label={isCheckAuthCode ? "완료" : "비밀번호 변경"}
        mode="primary"
        disabled={!!errors.email}
        handler={handleResetPassword}
      />
    </S.Layout>
  );
};

export default FindPassword;
