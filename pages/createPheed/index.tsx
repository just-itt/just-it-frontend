import React, { ReactElement } from "react";

import { PheedLayout, CreatePheedContainer } from "@components/index";

const CreatePheed = () => {
  return <CreatePheedContainer />;
};

CreatePheed.getLayout = function getLayout(page: ReactElement) {
  return <PheedLayout>{page}</PheedLayout>;
};

export default CreatePheed;
