import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { theme } from "@styles/theme";

const useViewport = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const mobile = useMediaQuery({
    query: `(max-width: ${theme.breakPoint.maxMobile})`,
  });
  const tablet = useMediaQuery({
    query: `(min-width: ${theme.breakPoint.minTablet}) and (max-width: ${theme.breakPoint.maxTablet})`,
  });
  const desktop = useMediaQuery({
    query: `(min-width: ${theme.breakPoint.minDesktop})`,
  });

  useEffect(() => {
    if (mobile) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [mobile]);

  useEffect(() => {
    if (tablet) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }
  }, [tablet]);

  useEffect(() => {
    if (desktop) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, [desktop]);

  return {
    isDesktop,
    isTablet,
    isMobile,
  };
};

export default useViewport;
