import React, { ReactElement } from "react";

import { PheedLayout, EditPheedContainer } from "@components/index";

const EditPheed = () => {
  return <EditPheedContainer />;
};

EditPheed.getLayout = function getLayout(page: ReactElement) {
  return <PheedLayout>{page}</PheedLayout>;
};

export default EditPheed;
