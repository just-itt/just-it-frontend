import React from "react";

import * as S from "./SignInBtn.styled";

interface SignUpBtnProps {
  isSignUp: boolean;
  handleClickSignUp: () => void;
}

const SignInBtn = ({ isSignUp, handleClickSignUp }: SignUpBtnProps) => {
  return (
    <S.SignInWrapper>
      <S.SignInQuestion>
        {isSignUp
          ? "아직 저스트잇 회원이 아니신가요?"
          : "이미 계정이 있으신가요?"}
      </S.SignInQuestion>
      <S.SignIn type="button" onClick={handleClickSignUp}>
        {isSignUp ? "회원가입" : "로그인"}
      </S.SignIn>
    </S.SignInWrapper>
  );
};

export default SignInBtn;
