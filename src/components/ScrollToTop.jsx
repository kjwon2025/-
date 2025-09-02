import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // #anchor 로 이동하는 링크는 해당 요소로 스크롤
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    // 그 외엔 항상 페이지 최상단으로
    window.scrollTo({ top: 0, left: 0, behavior: "auto" }); // "smooth"로 바꾸면 부드럽게
  }, [pathname, hash]);

  return null;
}
