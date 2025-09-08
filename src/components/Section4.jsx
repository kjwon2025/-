import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./css/Section4.css";

const Section4 = () => {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = scrollRef.current;
    const s4con = containerRef.current;
    if (!scroll || !s4con) return;

    const handleMouseEnter = () => {
      scroll.style.animationPlayState = "paused";
    };
    const handleMouseLeave = () => {
      scroll.style.animationPlayState = "running";
    };

    s4con.addEventListener("mouseenter", handleMouseEnter);
    s4con.addEventListener("mouseleave", handleMouseLeave);

    const items = Array.from(scroll.children);

    const highlightCenter = () => {
      const conRect = s4con.getBoundingClientRect();
      const centerX = conRect.left + conRect.width / 2;
      const maxScale = 1;
      const minScale = 0.65;
      const scaleRange = maxScale - minScale;

      items.forEach((item) => {
        if (!item.matches(":hover")) {
          const rect = item.getBoundingClientRect();
          const itemCenter = rect.left + rect.width / 2;
          const distance = Math.abs(centerX - itemCenter);
          const maxDistance = conRect.width / 1.5;

          let scale = maxScale - (distance / maxDistance) * scaleRange;
          scale = Math.min(Math.max(scale, minScale), maxScale);

          const shadowStrength = (distance / maxDistance) * 0.8 + 0.2;
          const shadowColor = `rgba(255, 254, 248, ${shadowStrength})`;

          item.style.transform = `scale(${scale})`;
          item.style.boxShadow = `0 0 ${20 * shadowStrength}px ${
            10 * shadowStrength
          }px ${shadowColor}`;
        }
      });

      requestAnimationFrame(highlightCenter);
    };

    highlightCenter();

    return () => {
      s4con.removeEventListener("mouseenter", handleMouseEnter);
      s4con.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div id="s4MP">
      <h1>핀스타그램</h1>
      <div className="s4instabox">
        <span className="s4instaspan1">OFFICIAL PIN-A</span>
        <Link to="https://www.instagram.com/pinaanippinaanip/">
          <span className="s4instaspan2">@pinaanippinaanip</span>
        </Link>
      </div>
      <div id="s4conMP" ref={containerRef}>
        <div className="s4scroll" ref={scrollRef}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8].map((num, idx) => {
            if (idx === 0) {
              return (
                <div
                  key={idx}
                  className="s4itemMP"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/p/DODHwGckuuW/",
                      "_blank"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <video
                    src={`${process.env.PUBLIC_URL}/video/s4video1.mp4`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              );
            } else if (idx === 1) {
              return (
                <div
                  key={idx}
                  className="s4itemMP"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/p/DNpx39EvydQ/",
                      "_blank"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/img/s4img1_1.jpg`}
                    alt="s4img1_1"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              );
            } else if (idx === 2) {
              return (
                <div
                  key={idx}
                  className="s4itemMP"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/p/DNpvxNpyzM_/",
                      "_blank"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <video
                    src={`${process.env.PUBLIC_URL}/video/s4video2.mp4`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              );
            } else if (idx === 3) {
              return (
                <div
                  key={idx}
                  className="s4itemMP"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/p/DNpv4SEy-Ms/",
                      "_blank"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <video
                    src={`${process.env.PUBLIC_URL}/video/s4video3.mp4`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              );
            } else if (idx === 4) {
              return (
                <div
                  key={idx}
                  className="s4itemMP"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/p/DNzJUvpXi3l/",
                      "_blank"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/img/s4img2_1.jpg`}
                    alt="s4img2_1"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              );
            } else if (idx === 5) {
              return (
                <div
                  key={idx}
                  className="s4itemMP"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/p/DNzJ-z6Xshz/",
                      "_blank"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/img/s4img3_1.jpg`}
                    alt="s4img3_1"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              );
            } else if (idx === 6) {
              return (
                <div
                  key={idx}
                  className="s4itemMP"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/p/DNzK0xxXmPl/",
                      "_blank"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/img/s4img4_1.jpg`}
                    alt="s4img4_1"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              );
            } else if (idx === 7) {
              return (
                <div
                  key={idx}
                  className="s4itemMP"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/p/DNzL7IpZFpY/",
                      "_blank"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <video
                    src={`${process.env.PUBLIC_URL}/video/s4video4.mp4`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              );
            } else if (idx === 8) {
              return (
                <div
                  key={idx}
                  className="s4itemMP"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/p/DNzNzPGXj4q/",
                      "_blank"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/img/s4img5_1.jpg`}
                    alt="s4img5_1"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              );
            } else if (idx === 9) {
              return (
                <div
                  key={idx}
                  className="s4itemMP"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/p/DNzNnB-5Ij3/",
                      "_blank"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <video
                    src={`${process.env.PUBLIC_URL}/video/s4video5.mp4`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              );
            } else if (idx === 10) {
              return (
                <div
                  key={idx}
                  className="s4itemMP"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/p/DNzPJnm5ECm/",
                      "_blank"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <video
                    src={`${process.env.PUBLIC_URL}/video/s4video6.mp4`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              );
            } else if (idx === 11) {
              return (
                <div
                  key={idx}
                  className="s4itemMP"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/p/DNzRIm-3rXd/",
                      "_blank"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/img/s4img6_1.jpg`}
                    alt="s4img6_1"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              );
            } else if (idx === 12) {
              return (
                <div
                  key={idx}
                  className="s4itemMP"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/p/DNzR-zCXhkM/",
                      "_blank"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/img/s4img7_1.jpg`}
                    alt="s4img7_1"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              );
            } else if (idx === 13) {
              return (
                <div
                  key={idx}
                  className="s4itemMP"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/p/DNzSJuo3g43/",
                      "_blank"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/img/s4img8_1.jpg`}
                    alt="s4img8_1"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              );
            } else {
              return (
                <div key={idx} className="s4itemMP">
                  {num}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Section4;
