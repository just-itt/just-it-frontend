import React from "react";
import { toast } from "react-hot-toast";

import { KakaoIcon, LogoLongIcon } from "@icons/index";
import SignUp from "../signUp/SignUp.component";
import SignIn from "../signIn/SignIn.component";
import SignInBtn from "../signInBtn/SignInBtn.component";
import { useMemberLogin } from "./hooks";
import * as S from "./LoginContainer.styled";

const LoginContainer = () => {
  const {
    isSignUp,
    register,
    watch,
    errors,
    handleClickSumbmit,
    handleClickSignUp,
  } = useMemberLogin();

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
      <form onSubmit={handleClickSumbmit}>
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
