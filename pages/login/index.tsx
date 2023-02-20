import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { AuthInput, CheckBox } from "@components/index";
import { isLoginState } from "@recoil/common";
import {
  AppleLoginIcon,
  GoogleLoginIcon,
  KakaoLoginIcon,
  LogoIcon,
  NaverLoginIcon,
} from "@icons/index";
import * as S from "./Login.styled";

declare global {
  interface Window {
    Kakao: any;
  }
}

const Login = () => {
  const { push } = useRouter();

  const setIsLogin = useSetRecoilState(isLoginState);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();

      await signInWithPopup(auth, provider);
      setIsLogin(true);
      push("/");
    } catch (e) {
      alert("로그인 에러");
    }
  };

  const handleEmailLogin = async () => {
    try {
      const auth = getAuth();

      const {
        user: { emailVerified },
      } = await signInWithEmailAndPassword(auth, id, password);

      if (emailVerified) {
        push("/");
      } else {
        throw new Error("이메일 중복 확인 에러");
      }
    } catch (e) {
      console.log(e);
      // EMAIL_EXISTS -> 이메일 중복
      if (e.message === "이메일 중복 확인 에러") {
        alert("이메일 중복 확인을 해주세요.");
      } else {
        alert("로그인 에러");
      }
    }
  };

  const handleKakaoLogin = () => {
    const redirectUri = "http://localhost:3000/oauth/kakao";
    const scope = ["profile_nickname", "account_email"].join(",");

    window.Kakao.Auth.authorize({
      redirectUri,
      scope,
    });
  };

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    }
  }, []);

  return (
    <S.Layout>
      <S.LogoWrapper>
        <LogoIcon />
      </S.LogoWrapper>
      <S.InputWrapper>
        <AuthInput
          placeholder="이메일"
          handleChange={e => setId(e.target.value)}
        />
        <AuthInput
          placeholder="비밀번호"
          handleChange={e => setPassword(e.target.value)}
        />
      </S.InputWrapper>
      <S.FlexWrapper>
        <S.CheckboxWrapper>
          <CheckBox />
          <S.KeepLogin>로그인 상태 유지</S.KeepLogin>
        </S.CheckboxWrapper>
        <S.ResetPassword href="">비밀번호 찾기</S.ResetPassword>
      </S.FlexWrapper>
      <S.LoginBtn type="button" onClick={handleEmailLogin}>
        로그인
      </S.LoginBtn>
      <S.Or>또는</S.Or>
      <S.SocialLoginBtnWrapper>
        <S.SocialLoginBtn type="button" onClick={handleGoogleLogin}>
          <GoogleLoginIcon />
          구글
        </S.SocialLoginBtn>
        <S.SocialLoginBtn type="button" onClick={handleKakaoLogin}>
          <KakaoLoginIcon />
          카카오
        </S.SocialLoginBtn>
        <S.SocialLoginBtn type="button">
          <NaverLoginIcon />
          네이버
        </S.SocialLoginBtn>
        <S.SocialLoginBtn type="button">
          <AppleLoginIcon />
          애플
        </S.SocialLoginBtn>
      </S.SocialLoginBtnWrapper>
      <S.SignUpWrapper>
        <S.SignUpQuestion>아직 회원이 아니신가요?</S.SignUpQuestion>
        <S.SignUp href="/signUp">회원가입</S.SignUp>
      </S.SignUpWrapper>
    </S.Layout>
  );
};

export default Login;
