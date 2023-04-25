import React, { ReactElement } from "react";
import { useRecoilState } from "recoil";

import { MainLayout, DefaultInfo, ChangePassword } from "@components/index";
import { profileAtom } from "@recoil/index";
import type { NextPageWithLayout } from "pages/_app";
import * as S from "./index.styled";

const Setting: NextPageWithLayout = () => {
  const [profile] = useRecoilState(profileAtom);

  return (
    <S.Setting>
      <div>
        <DefaultInfo
          profileImage={profile.profileImage}
          profileNickname={profile.nickname}
          email={profile.email}
        />
        <ChangePassword />
      </div>
    </S.Setting>
  );
};

Setting.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Setting;
