import React, { ReactElement } from "react";

import { MainLayout } from "@components/layout";
import type { NextPageWithLayout } from "pages/_app";

const MyPheed: NextPageWithLayout = () => {
  return <div>index</div>;
};

MyPheed.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default MyPheed;
