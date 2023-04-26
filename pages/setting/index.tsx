import React, { ReactElement } from "react";

import {
  MainLayout,
  DefaultInfo,
  ChangePassword,
  DeleteMemberBtn,
} from "@components/index";

import type { NextPageWithLayout } from "pages/_app";
import * as S from "./index.styled";

const Setting: NextPageWithLayout = () => {
  return (
    <S.Setting>
      <div>
        <DefaultInfo />
        <ChangePassword />
        <DeleteMemberBtn />
      </div>
    </S.Setting>
  );
};

Setting.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Setting;
