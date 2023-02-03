import React, { ReactElement } from "react";

import { MainLayout } from "@components/layout";
import type { NextPageWithLayout } from "pages/_app";

const Setting: NextPageWithLayout = () => {
  return <div>Setting</div>;
};

Setting.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Setting;
