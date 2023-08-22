import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
import type { AxiosResponse } from "axios";
import type { CreateMemberQueryModel, LoginServerModel } from "types";

import { useCreateMember, useLogin } from "@service/index";

const useMemberLogin = () => {
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

  const { mutate: useCreateMemberMutate } = useCreateMember();
  const { mutate: useLoginMutate } = useLogin();

  const [isSignUp, setIsSignUp] = useState(true);

  const handleClickSignUp = () => setIsSignUp(!isSignUp);

  const handleClickSumbmit = ({
    email,
    password,
  }: CreateMemberQueryModel["query"]) => {
    const setCookies = (res: AxiosResponse<LoginServerModel, any>) => {
      Cookies.set("auth", res.data.token, { expires: 2 });
      push("/");
    };

    const loginError = (err: any) => {
      const errMessage = err.response.data.detail;

      if (
        errMessage === "Not Found: No Member matches the given query." ||
        errMessage === "Password is not correct"
      ) {
        toast.error("아이디 또는 비밀번호 오류입니다.");
      }
    };

    if (isSignUp) {
      useLoginMutate(
        { query: { email, password } },
        { onSuccess: setCookies, onError: loginError },
      );
    } else {
      const account = { email: watch("email"), password: watch("password") };

      useCreateMemberMutate(
        { query: account },
        {
          onSuccess: () => {
            useLoginMutate(
              { query: account },
              { onSuccess: setCookies, onError: loginError },
            );
          },
        },
      );
    }
  };

  return {
    isSignUp,
    register,
    watch,
    errors,
    handleClickSumbmit: handleSubmit(handleClickSumbmit),
    handleClickSignUp,
  };
};

export default useMemberLogin;
