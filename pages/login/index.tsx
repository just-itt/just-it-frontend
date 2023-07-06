import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

import { SignIn, SignUp, SignInBtn } from "@components/index";
import { useCreateMember, useLogin } from "@service/index";
import { KakaoIcon, LogoLongIcon } from "@icons/index";
import * as S from "./index.styled";

const Login = () => {
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

  const handleClickSignUp = () => {
    setIsSignUp(!isSignUp);
  };

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
          onSuccess: loginRes => {
            Cookies.set("auth", loginRes.data.token, { expires: 2 });

            // setUserState({
            //   id: myProfile.data.id,
            //   email: myProfile.data.email,
            //   nickname: myProfile.data.nickname,
            //   profileImage: myProfile.data.profile_image,
            //   status: myProfile.data.status,
            //   lastLoginAt: myProfile.data.last_login_at,
            //   createdAt: myProfile.data.created_at,
            //   updatedAt: myProfile.data.updated_at,
            // });

            push("/");
          },
          onError: (loginErr: any) => {
            const errMessage = loginErr.response.data.detail;

            if (
              errMessage === "Not Found: No Member matches the given query." ||
              errMessage === "Password is not correct"
            ) {
              alert("아이디 또는 비밀번호 오류입니다.");
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
        {
          onSuccess: () => {
            push("/");
          },
        },
      );
    }
  };

  return (
    <S.Layout>
      <S.LogoWrapper href="/">
        <LogoLongIcon />
      </S.LogoWrapper>
      <S.KakaoLoginBtn type="button" onClick={() => alert("준비 중입니다 :)")}>
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

export default Login;
