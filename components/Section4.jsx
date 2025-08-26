import React, { useEffect, useRef } from "react";
import "./Section4.css";

import s4img1_1 from "../img/s4img1_1.jpg";
import s4img2_1 from "../img/s4img2_1.jpg";
import s4img3_1 from "../img/s4img3_1.jpg";
import s4img4_1 from "../img/s4img4_1.jpg";
import s4img5_1 from "../img/s4img5_1.jpg";
import s4img6_1 from "../img/s4img6_1.jpg";
import s4img7_1 from "../img/s4img7_1.jpg";
import s4img8_1 from "../img/s4img8_1.jpg";

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
                      "https://www.instagram.com/p/DNptkddyxOU/",
                      "_blank"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <video
                    src="https://scontent-icn2-1.cdninstagram.com/o1/v/t2/f2/m86/AQPbag5cVxV0FEhsmiOJ-JgoQUD3IyuJkkZ4C4RQ2mAxLlaYab-Dw84GBB288EtgxLtcgFQfcQYAlPYgmKIdZy0v1Z9siPGSXwrFt9c.mp4?_nc_cat=101&_nc_sid=5e9851&_nc_ht=scontent-icn2-1.cdninstagram.com&_nc_ohc=xY2cLHRfuzAQ7kNvwH5k58J&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTY3Njc4NTM0NjMxOTg4NSwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjcsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=3cafaec878886834&_nc_vs=HBkcFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9FNDQ5N0JBMUQ4RkJFMTcwNzA1NUVFNkY5OThEMjQ4QV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmmtj0ruDB-gUVAigCQzMsF0Ac7peNT987GBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=qKl_8T20JoIE5yLjofF1SA&_nc_zt=28&oh=00_AfVdla0ZbLbiscriBvEIsdti2-XpW3AE5OQXywP2sMyWQw&oe=68AEF99A"
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
                    src={s4img1_1}
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
                    src="https://scontent-icn2-1.cdninstagram.com/o1/v/t2/f2/m86/AQNqfS6oHgjR3yq72farvLKgDAwvbhOUjUfu3Gnc5yuyCmmGxUk9eGiSc3aR0x-mFRK8isxuRmbcXsYKFypByGOV4NJVh0bRjDFkdB0.mp4?_nc_cat=107&_nc_sid=5e9851&_nc_ht=scontent-icn2-1.cdninstagram.com&_nc_ohc=7okZYG8ZocIQ7kNvwEjpMPW&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6NjkyMjU4MDE3MTk2NTA5LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6NjAsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=993dd2c7f3d12553&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9BMzRFRTQwQzc0MTVGNjlGMTcyMTJCMDc5NjI0RjM5Ml92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSzZmN0ItV3RrRlpoYVFDQUZWV1U5azc5Q29KYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmuuepk9zmugIVAigCQzMsF0BOEQYk3S8bGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=DQme1e5Oo1lDDHHqV9_r0w&_nc_zt=28&oh=00_AfVVQ1ZeKoke1m6NKF8vWceYDqKBOOatQdFAh449y1G0vw&oe=68AEE488"
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
                    src="https://scontent-icn2-1.cdninstagram.com/o1/v/t2/f2/m86/AQNVEYGUKfa2R0M9d_jomli1KsxgalpVkwJ6NmgYtH4KBfWhjscihTGf1_-hDWTnAFGiuM4w1kWXdQEd15JpZO3LKMJxfMatP84COOg.mp4?_nc_cat=111&_nc_sid=5e9851&_nc_ht=scontent-icn2-1.cdninstagram.com&_nc_ohc=R0ONAPE8uSwQ7kNvwFGms3I&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTEwNDkxNDYyNzgyNzQzMSwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjE0LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=bf4d5e606d6b8a8&_nc_vs=HBkcFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9EMDRCNzUyNzhGRjI4NUNBNTg3NjVDRDA2M0JDRUNCMF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmztuwvr-69gMVAigCQzMsF0AsAAAAAAAAGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=_nJifOF3OaqIiZ_03B44Gg&_nc_zt=28&oh=00_AfXQv119AeJ4xBYHNqX4DJ9lua5GvOWdhR3LDsR8XA4YlA&oe=68AEE074"
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
                    src={s4img2_1}
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
                    src={s4img3_1}
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
                    src={s4img4_1}
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
                    src="https://scontent-icn2-1.cdninstagram.com/o1/v/t2/f2/m86/AQNGE-LieOqVOYBNtxldEWoIgT8oqlUR7-tl5SuPk9jrZTdT-oBdrrZFt2zuXpekqXLFa5LipE-wMtOEHM4lfTBea1GsGCAc9T0tcqE.mp4?_nc_cat=103&_nc_sid=5e9851&_nc_ht=scontent-icn2-1.cdninstagram.com&_nc_ohc=NqCn3p_7kXYQ7kNvwFMSjJa&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MjIyNzkzNzMxNDM3Njc1NywidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjE5LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=8b4f3a5fc822ae23&_nc_vs=HBkcFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC83MDRCM0UzNzIwMTk2NTRFMDdFMDczNDExMDRGRUM5OF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm6rCkw4KT9QcVAigCQzMsF0Az1T987ZFoGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=Jzf4fPNndHaxzvi0GRk0jw&_nc_zt=28&oh=00_AfUA1VXZ51H9qmPkxyLM0Yx6kw7-1oxHkcZZlwqXJ37lfQ&oe=68AEF0D8"
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
                    src={s4img5_1}
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
                    src="https://scontent-icn2-1.cdninstagram.com/o1/v/t2/f2/m86/AQM9CAj-iy9Kjx9vwqOTzwu5ae3bo6_K2GUOpJdCOL7gAwi8kmFVXO2r1LZEBUt5h8vBtiVxh1w3pGTysfcDVAgKMgh4nNeRG4EpRI0.mp4?_nc_cat=108&_nc_sid=5e9851&_nc_ht=scontent-icn2-1.cdninstagram.com&_nc_ohc=upWmA4CcDAkQ7kNvwEpyFQO&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MjQzOTE3NTg2MjA0OTA4OTYsInZpX3VzZWNhc2VfaWQiOjEwMDk5LCJkdXJhdGlvbl9zIjoxMCwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&vs=6abe105ff81dfb57&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9DNDREMDQ0ODE2RDg3NDUzOUY3NjBGMURGNDJEMDY4Ql92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQVh5OGg5a05NN3FoRjBDQU5NamZCYnU2a282YnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmoPKrwJuL1FYVAigCQzMsF0AlRBiTdLxqGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=olU3L0xTBlEO2KWEN09vxA&_nc_zt=28&oh=00_AfVuBC7TbZRmgdJUn0rJzQpaWEZqVTp0Uvbgolglh8qjEw&oe=68AED931"
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
                    src="https://scontent-icn2-1.cdninstagram.com/o1/v/t2/f2/m86/AQOitXtpGLt1AnApkIjwYDUQdp42gFUnbCxSYDdsUXt13AX4qTrs-av8WZsQpuXKZ1qWJ797v_CWT8SzKOh1F6iZibcEqhfcTnN1H2o.mp4?_nc_cat=106&_nc_sid=5e9851&_nc_ht=scontent-icn2-1.cdninstagram.com&_nc_ohc=X5co49O_3gkQ7kNvwHsa-Gq&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTExMzUzNTc4MDg4MjQ5NSwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjEwLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=5af718f3508c20db&_nc_vs=HBkcFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8yQTQ1RThDOENFNTBDNkJCMTdGQTMzMzcwOTY2Rjk4NV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm_qDQiqiw-gMVAigCQzMsF0AlmZmZmZmaGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=JMTgvqQP1e1V6UsVUqWx4A&_nc_zt=28&oh=00_AfV6W4bWjOmgRaPL1UlsT-Q1HFFvqv038Kizgx7cN-6rJA&oe=68AEEC27"
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
                    src={s4img6_1}
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
                    src={s4img7_1}
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
                    src={s4img8_1}
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
