import React, { ReactElement } from "react";

import { MainLayout, SettingContainer } from "@components/index";

const Setting = () => {
  return <SettingContainer />;
};

Setting.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Setting;
