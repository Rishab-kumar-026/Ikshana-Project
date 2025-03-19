import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;  // Reset scroll for all browsers
    document.body.scrollTop = 0;             // For Safari
  }, [pathname]);

  return null;
};

export default ScrollToTop;

