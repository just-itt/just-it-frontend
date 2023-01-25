import type { NextPage } from "next";

import { useViewport } from "@hooks/index";

const Home: NextPage = () => {
  const { isTablet, isMobile } = useViewport();

  if (isMobile) {
    return <div>mobile</div>;
  }

  if (isTablet) {
    return <div>tablet</div>;
  }

  return <div>hi</div>;
};

export default Home;
