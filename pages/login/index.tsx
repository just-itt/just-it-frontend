import React from "react";

import { AuthInput, CheckBox } from "@components/index";
import {
  AppleLoginIcon,
  GoogleLoginIcon,
  KakaoLoginIcon,
  LogoIcon,
  NaverLoginIcon,
} from "@icons/index";
import * as S from "./Login.styled";

const Login = () => {
  return (
    <S.Layout>
      <S.LogoWrapper>
        <LogoIcon />
      </S.LogoWrapper>
      <S.InputWrapper>
        <AuthInput placeholder="이메일" />
        <AuthInput placeholder="비밀번호" />
      </S.InputWrapper>
      <S.FlexWrapper>
        <S.CheckboxWrapper>
          <CheckBox />
          <S.KeepLogin>로그인 상태 유지</S.KeepLogin>
        </S.CheckboxWrapper>
        <S.ResetPassword href="">비밀번호 찾기</S.ResetPassword>
      </S.FlexWrapper>
      <S.LoginBtn>로그인</S.LoginBtn>
      <S.Or>또는</S.Or>
      <S.SocialLoginBtnWrapper>
        <S.SocialLoginBtn type="button">
          <GoogleLoginIcon />
          구글
        </S.SocialLoginBtn>
        <S.SocialLoginBtn type="button">
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
        <S.SignUp href="">회원가입</S.SignUp>
      </S.SignUpWrapper>
    </S.Layout>
  );
};

export default Login;
