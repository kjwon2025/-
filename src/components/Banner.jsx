import { useState, useEffect } from "react";
import "./css/Banner.css";
import { useNavigate } from "react-router-dom";

const bannerImages = [
  "./img/banner1.png",
  "./img/banner2.png",
  "./img/banner3.png",
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const goCategoryDetail = () => {
    navigate("/CategoryDetail");
  };

  // ✅ 전체 배너 개수 = 이미지 개수만
  const totalBanners = bannerImages.length;

  // ✅ 자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalBanners);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalBanners]);

  return (
    <div id="bannerMP" onClick={goCategoryDetail}>
      {bannerImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`banner${index + 1}`}
          className={current === index ? "active" : ""}
        />
      ))}

      {/* ✅ 배너 네비게이션 버튼 */}
      <div id="bannerbtnbox">
        {[...Array(totalBanners)].map((_, index) => (
          <button
            key={index}
            className={index === current ? "progress active" : "progress"}
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(index);
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
