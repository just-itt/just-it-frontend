import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { signInWithCustomToken } from "firebase/auth";
import axios from "axios";

import { auth } from "pages/_app";

const Kakao = () => {
  const {
    query: { code },
  } = useRouter();

  const a = async () => {
    try {
      const res: any = await axios.post("kakao", {
        code,
      });

      console.log("res", res);

      const { firebaseToken } = res.data;

      // custom token을 이용한 로그인
      await signInWithCustomToken(auth, firebaseToken);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    a();
  }, []);

  return <div>Kakao</div>;
};

export default Kakao;
