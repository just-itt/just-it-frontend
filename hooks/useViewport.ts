import { useMediaQuery } from "react-responsive";

const useViewport = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023.9px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 767.9px)",
  });

  return {
    isDesktop,
    isTablet,
    isMobile,
  };
};

export default useViewport;
