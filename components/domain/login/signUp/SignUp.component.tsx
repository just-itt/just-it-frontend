import React from "react";

import { FormInput } from "@components/index";
import { EMAIL_VALIDATE, PASSWORD_VALIDATE } from "utils/validate";
import * as S from "./SignUp.styled";

interface SignUpProps {
  watch: any;
  errors: any;
  register: any;
}

const SignUp = ({ watch, errors, register }: SignUpProps) => {
  const handleClickSignUp = () => {};

  return (
    <>
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
      <S.ResetPassword href="">비밀번호를 잊으셨나요?</S.ResetPassword>
      <S.LoginBtn type="submit" disabled={Object.keys(errors).length !== 0}>
        로그인
      </S.LoginBtn>
      <S.SignUpWrapper>
        <S.SignUpQuestion>아직 저스트잇 회원이 아니신가요?</S.SignUpQuestion>
        <S.SignUp type="button" onClick={handleClickSignUp}>
          회원가입
        </S.SignUp>
      </S.SignUpWrapper>
    </>
  );
};

export default SignUp;
