import React, { useRef, useEffect } from "react";

const Section = ({ children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = sectionRef.current.getBoundingClientRect();
      const center = window.innerHeight / 2;
      const sectionCenter = rect.top + rect.height / 2;
      const distance = Math.abs(center - sectionCenter);

      const fadeOutStart = window.innerHeight * 0.4;
      let distanceRatio = Math.max(0, (distance - fadeOutStart) / fadeOutStart);
      let opacity = 1 - Math.pow(distanceRatio, 2);
      opacity = Math.max(0, Math.min(opacity, 1));

      sectionRef.current.style.opacity = opacity;
      sectionRef.current.style.transform = `translateY(${
        50 * (1 - opacity)
      }px)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <section ref={sectionRef}>{children}</section>;
};

export default Section;
