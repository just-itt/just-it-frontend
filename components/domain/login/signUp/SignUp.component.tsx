import React from "react";
import type {
  UseFormWatch,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";

import { FormInput } from "@components/index";
import { EMAIL_VALIDATE } from "utils/validate";
import type { LoginForm } from "types";
import * as S from "./SignUp.styled";

interface SignUpProps {
  watch: UseFormWatch<LoginForm>;
  errors: FieldErrors<LoginForm>;
  register: UseFormRegister<LoginForm>;
}

const SignUp = ({ watch, errors, register }: SignUpProps) => {
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
            : ""
        }
        register={register("password", {
          required: true,
        })}
      />
      <S.ResetPassword href="">비밀번호를 잊으셨나요?</S.ResetPassword>
      <S.LoginBtn type="submit" disabled={Object.keys(errors).length !== 0}>
        로그인
      </S.LoginBtn>
    </>
  );
};

export default SignUp;
