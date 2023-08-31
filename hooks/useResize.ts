import { useEffect } from "react";

import { handleResize } from "@utils/index";

const useResize = () => {
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
};

export default useResize;
