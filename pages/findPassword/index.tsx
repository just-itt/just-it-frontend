import type { ReactElement } from "react";

import { AuthLayout, FindPasswordContainer } from "@components/index";

const FindPassword = () => {
  return <FindPasswordContainer />;
};

FindPassword.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default FindPassword;
