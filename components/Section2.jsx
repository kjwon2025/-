import React from "react";
import "./Section2.css"; // CSS는 기존에 보내주신 CSS 그대로 사용

const Section2 = () => {
  const handleHeartClick = () => {
    alert("좋아요 목록에 추가되었습니다!");
  };

  return (
    <div id="s2MP">
      <h1>식물</h1>
      <div id="s2con1MP">
        <div className="s2con2MP">
          <div className="s2itemBigImgMP">
            <img src="./img/s2p1.png" alt="s2p1" />
          </div>
          <div className="s2itemTextMP">
            <span className="s2itemTitleMP">상품명</span>
            <span className="s2itemPriceMP">상품 가격</span>
          </div>
          <div className="s2itemIconMP">
            <svg
              className="heart"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              onClick={handleHeartClick}
            >
              <path
                fill="#f8312f"
                d="M21.008 5.162c-2.84.509-5.011 3.905-5.011 3.905s-2.18-3.396-5.012-3.905c-7.012-1.25-9.903 4.993-8.732 9.64c1.73 6.863 10.053 13.014 12.834 14.916c.55.376 1.27.376 1.83 0c2.791-1.902 11.113-8.053 12.834-14.916c1.16-4.647-1.73-10.89-8.743-9.64"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z"
              />
            </svg>
          </div>
        </div>

        <div className="s2line1MP"></div>

        <div className="s2con3MP">
          <div className="s2item1MP">
            <div className="s2itemImgMP">
              <img src="./img/s2p2.png" alt="s2p2" />
            </div>
            <div className="s2itemTextMP">
              <span className="s2itemTitleMP">상품명</span>
              <span className="s2itemPriceMP">상품 가격</span>
            </div>
            <div className="s2itemIconMP">
              <svg
                className="heart"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                onClick={handleHeartClick}
              >
                <path
                  fill="#f8312f"
                  d="M21.008 5.162c-2.84.509-5.011 3.905-5.011 3.905s-2.18-3.396-5.012-3.905c-7.012-1.25-9.903 4.993-8.732 9.64c1.73 6.863 10.053 13.014 12.834 14.916c.55.376 1.27.376 1.83 0c2.791-1.902 11.113-8.053 12.834-14.916c1.16-4.647-1.73-10.89-8.743-9.64"
                />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z"
                />
              </svg>
            </div>
          </div>

          <div className="s2line2MP"></div>

          <div className="s2item2MP">
            <div className="s2itemImgMP">
              <img src="./img/s2p3.png" alt="s2p3" />
            </div>
            <div className="s2itemTextMP">
              <span className="s2itemTitleMP">상품명</span>
              <span className="s2itemPriceMP">상품 가격</span>
            </div>
            <div className="s2itemIconMP">
              <svg
                className="heart"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                onClick={handleHeartClick}
              >
                <path
                  fill="#f8312f"
                  d="M21.008 5.162c-2.84.509-5.011 3.905-5.011 3.905s-2.18-3.396-5.012-3.905c-7.012-1.25-9.903 4.993-8.732 9.64c1.73 6.863 10.053 13.014 12.834 14.916c.55.376 1.27.376 1.83 0c2.791-1.902 11.113-8.053 12.834-14.916c1.16-4.647-1.73-10.89-8.743-9.64"
                />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z"
                />
              </svg>
            </div>
          </div>

          <div className="s2garoLineMP">
            <div className="s2grline1MP"></div>
            <div className="s2grline2MP"></div>
          </div>

          <div className="s2item3MP">
            <div className="s2itemImgMP">
              <img src="./img/s2p4.png" alt="s2p4" />
            </div>
            <div className="s2itemTextMP">
              <span className="s2itemTitleMP">상품명</span>
              <span className="s2itemPriceMP">상품 가격</span>
            </div>
            <div className="s2itemIconMP">
              <svg
                className="heart"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                onClick={handleHeartClick}
              >
                <path
                  fill="#f8312f"
                  d="M21.008 5.162c-2.84.509-5.011 3.905-5.011 3.905s-2.18-3.396-5.012-3.905c-7.012-1.25-9.903 4.993-8.732 9.64c1.73 6.863 10.053 13.014 12.834 14.916c.55.376 1.27.376 1.83 0c2.791-1.902 11.113-8.053 12.834-14.916c1.16-4.647-1.73-10.89-8.743-9.64"
                />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z"
                />
              </svg>
            </div>
          </div>

          <div className="s2line3MP"></div>

          <div className="s2item4MP">
            <div className="s2itemImgMP">
              <img src="./img/s2p5.png" alt="s2p5" />
            </div>
            <div className="s2itemTextMP">
              <span className="s2itemTitleMP">상품명</span>
              <span className="s2itemPriceMP">상품 가격</span>
            </div>
            <div className="s2itemIconMP">
              <svg
                className="heart"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                onClick={handleHeartClick}
              >
                <path
                  fill="#f8312f"
                  d="M21.008 5.162c-2.84.509-5.011 3.905-5.011 3.905s-2.18-3.396-5.012-3.905c-7.012-1.25-9.903 4.993-8.732 9.64c1.73 6.863 10.053 13.014 12.834 14.916c.55.376 1.27.376 1.83 0c2.791-1.902 11.113-8.053 12.834-14.916c1.16-4.647-1.73-10.89-8.743-9.64"
                />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
