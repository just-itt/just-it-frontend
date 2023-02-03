import React, { ReactElement } from "react";

import { MainLayout } from "@components/layout";
import type { NextPageWithLayout } from "pages/_app";

const BookMark: NextPageWithLayout = () => {
  return <div>BookMark</div>;
};

BookMark.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default BookMark;
