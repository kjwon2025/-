import React, { useState, useEffect } from "react";
import "./Banner.css";

const banners = ["./img/banner1.png", "./img/banner2.jpg", "./img/banner3.jpg"];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 6000); // 6초마다 배너 변경

    return () => clearInterval(interval); // 언마운트 시 정리
  }, []);

  return (
    <div id="bannerMP">
      {banners.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`banner${index + 1}`}
          className={index === current ? "active" : ""}
        />
      ))}
    </div>
  );
};

export default Banner;
