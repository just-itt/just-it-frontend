import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import Cookies from "js-cookie";

import { SignIn, SignUp } from "@components/index";
import { useCreateMember, useGetMemberProfile, useLogin } from "services";
import { profileAtom } from "@recoil/common";
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

  const setUserState = useSetRecoilState(profileAtom);
  const [isSignUp, setIsSignUp] = useState(true);

  const { mutate: useCreateMemberMutate } = useCreateMember();
  const { mutate: useLoginMutate } = useLogin();
  const { mutate: useMemberProfileMutate } = useGetMemberProfile();

  const handleClickSumbmit = (data: { email: string; password: string }) => {
    if (isSignUp) {
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
    } else {
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
            useMemberProfileMutate(undefined, {
              onSuccess: memberRes => {
                setUserState({
                  id: memberRes.data.id,
                  email: memberRes.data.email,
                  nickname: memberRes.data.nickname,
                  profileImage: memberRes.data.profile_image,
                  status: memberRes.data.status,
                  lastLoginAt: memberRes.data.last_login_at,
                  createdAt: memberRes.data.created_at,
                  updatedAt: memberRes.data.updated_at,
                });

                push("/");
              },
            });
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
    </S.Layout>
  );
};

export default Login;
