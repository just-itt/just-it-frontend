import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";

import { useCreateMember, useLogin } from "@service/index";
import { KakaoIcon, LogoLongIcon } from "@icons/index";
import SignUp from "../signUp/SignUp.component";
import SignIn from "../signIn/SignIn.component";
import SignInBtn from "../signInBtn/SignInBtn.component";
import * as S from "./LoginContainer.styled";

const LoginContainer = () => {
  const { push } = useRouter();
  const {
    register,
    watch,
    formState: { errors },
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

  const [isSignUp, setIsSignUp] = useState(true);

  const handleClickSignUp = () => setIsSignUp(!isSignUp);

  const { mutate: useCreateMemberMutate } = useCreateMember();
  const { mutate: useLoginMutate } = useLogin();

  const handleClickSumbmit = (data: { email: string; password: string }) => {
    if (isSignUp) {
      useLoginMutate(
        {
          query: {
            email: data.email,
            password: data.password,
          },
        },
        {
          onSuccess: res => {
            Cookies.set("auth", res.data.token, { expires: 2 });
            push("/");
          },
          onError: (err: any) => {
            const errMessage = err.response.data.detail;

            if (
              errMessage === "Not Found: No Member matches the given query." ||
              errMessage === "Password is not correct"
            ) {
              toast.error("아이디 또는 비밀번호 오류입니다.");
            }
          },
        },
      );
    } else {
      useCreateMemberMutate(
        {
          query: {
            email: watch("email"),
            password: watch("password"),
          },
        },
        { onSuccess: () => push("/") },
      );
    }
  };

  return (
    <S.Layout>
      <S.LogoWrapper href="/">
        <LogoLongIcon />
      </S.LogoWrapper>
      <S.KakaoLoginBtn
        type="button"
        onClick={() => toast.error("조금만 기다려 주세요 :)")}
      >
        <KakaoIcon />
        카카오 로그인
      </S.KakaoLoginBtn>
      <S.Or>또는 이메일 로그인</S.Or>
      <form onSubmit={handleSubmit(handleClickSumbmit)}>
        {isSignUp ? (
          // 로그인
          <SignUp watch={watch} errors={errors} register={register} />
        ) : (
          // 회원가입
          <SignIn watch={watch} errors={errors} register={register} />
        )}
      </form>
      <SignInBtn isSignUp={isSignUp} handleClickSignUp={handleClickSignUp} />
    </S.Layout>
  );
};

export default LoginContainer;
