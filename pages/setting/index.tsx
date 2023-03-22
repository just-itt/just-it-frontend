import React, { ReactElement } from "react";

import { Heading } from "@components/common";
import { MainLayout } from "@components/layout";
import { ProfileIcon } from "@icons/index";
import type { NextPageWithLayout } from "pages/_app";
import * as S from "./index.styled";

const Setting: NextPageWithLayout = () => {
  return (
    <S.Setting>
      <Heading css={S.heading} heading="기본 정보" />
      <S.ProfileWrapper>
        <ProfileIcon />
        <button type="button">연필</button>
        <button type="button">휴지통</button>
      </S.ProfileWrapper>
    </S.Setting>
  );
};

Setting.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Setting;
