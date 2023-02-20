import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import * as S from "./SignUp.styled";

const SignUp = () => {
  const { push } = useRouter();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const auth = getAuth();

      await createUserWithEmailAndPassword(auth, id, password);
      await sendEmailVerification(auth.currentUser!);
      alert("이메일 인증을 진행해주세요.");
      auth.signOut();

      push("/login");
    } catch (e) {
      alert("회원가입 에러");
    }
  };

  return (
    <div>
      <S.IdInput onChange={e => setId(e.target.value)} />
      <S.IdInput onChange={e => setPassword(e.target.value)} />
      <button type="button" onClick={handleSignUp}>
        회원가입
      </button>
    </div>
  );
};

export default SignUp;
