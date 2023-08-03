import type { ReactElement } from "react";

import { AuthLayout, LoginContainer } from "@components/index";

const Login = () => {
  return <LoginContainer />;
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Login;
