import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  useEffect(() => {
    const handleSamePageClick = (e) => {
      const link = e.target.closest("a");

      if (link && link.pathname === window.location.pathname && !link.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("click", handleSamePageClick);
    return () => window.removeEventListener("click", handleSamePageClick);
  }, []);

  return null;
}
