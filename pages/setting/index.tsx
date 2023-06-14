import React, { ReactElement } from "react";

import {
  MainLayout,
  DefaultInfo,
  ChangePassword,
  Btns,
} from "@components/index";
import * as S from "./index.styled";

const Setting = () => {
  return (
    <S.Setting>
      <div>
        <DefaultInfo />
        <ChangePassword />
        <Btns />
      </div>
    </S.Setting>
  );
};

Setting.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Setting;
