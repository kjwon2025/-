import React, { useState } from "react";
import "./css/Section3.css";

const Section3 = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleHeartClick = () => {
    alert("좋아요 목록에 추가되었습니다!");
  };

  return (
    <div id="s3MP">
      <h1>꽃</h1>
      <div id="s3tabboxMP">
        <button
          className={`tabbtn1MP ${activeTab === "tab1" ? "active" : ""}`}
          onClick={() => setActiveTab("tab1")}
        >
          꽃 다발
        </button>
        <button
          className={`tabbtn2MP ${activeTab === "tab2" ? "active" : ""}`}
          onClick={() => setActiveTab("tab2")}
        >
          꽃 송이
        </button>
        <button
          className={`tabbtn3MP ${activeTab === "tab3" ? "active" : ""}`}
          onClick={() => setActiveTab("tab3")}
        >
          바스켓
        </button>
      </div>
      <div id="s3conMP">
        {/* Tab 1: 꽃 다발 */}
        <div
          className="s3tab1boxMP"
          style={{ display: activeTab === "tab1" ? "flex" : "none" }}
        >
          <div className="s3item1MP">
            <div className="s3itemImgMP">
              <img src="./img/s3p1.png" alt="s3p1" />
            </div>
            <div className="s3itemTextMP">
              <span className="s3itemTitleMP">상품명</span>
              <span className="s3itemPriceMP">상품 가격</span>
            </div>
            <div className="s3itemIconMP">
              <svg
                class="heart"
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
          <div className="s3line1MP"></div>
          <div className="s3item2MP">
            <div className="s3itemImgMP">
              <img src="./img/s3p2.png" alt="s3p2" />
            </div>
            <div className="s3itemTextMP">
              <span className="s3itemTitleMP">상품명</span>
              <span className="s3itemPriceMP">상품 가격</span>
            </div>
            <div className="s3itemIconMP">
              <svg
                class="heart"
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
          <div className="s3line1MP"></div>
          <div className="s3item3MP">
            <div className="s3itemImgMP">
              <img src="./img/s3p3.jpg" alt="s3p3" />
            </div>
            <div className="s3itemTextMP">
              <span className="s3itemTitleMP">상품명</span>
              <span className="s3itemPriceMP">상품 가격</span>
            </div>
            <div className="s3itemIconMP">
              <svg
                class="heart"
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
          <div className="s3line1MP"></div>
          <div className="s3item4MP">
            <div className="s3itemImgMP">
              <img src="./img/s3p4.png" alt="s3p4" />
            </div>
            <div className="s3itemTextMP">
              <span className="s3itemTitleMP">상품명</span>
              <span className="s3itemPriceMP">상품 가격</span>
            </div>
            <div className="s3itemIconMP">
              <svg
                class="heart"
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

        {/* Tab 2: 꽃 송이 */}
        <div
          className="s3tab2boxMP"
          style={{ display: activeTab === "tab2" ? "flex" : "none" }}
        >
          <div className="s3item1MP">
            <div className="s3itemImgMP">
              <img src="./img/oneflower1.jpg" alt="oneflower1" />
            </div>
            <div className="s3itemTextMP">
              <span className="s3itemTitleMP">상품명</span>
              <span className="s3itemPriceMP">상품 가격</span>
            </div>
            <div className="s3itemIconMP">
              <svg
                class="heart"
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
          <div className="s3line1MP"></div>
          <div className="s3item2MP">
            <div className="s3itemImgMP">
              <img src="./img/oneflower2.jpg" alt="oneflower2" />
            </div>
            <div className="s3itemTextMP">
              <span className="s3itemTitleMP">상품명</span>
              <span className="s3itemPriceMP">상품 가격</span>
            </div>
            <div className="s3itemIconMP">
              <svg
                class="heart"
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
          <div className="s3line1MP"></div>
          <div className="s3item3MP">
            <div className="s3itemImgMP">
              <img src="./img/oneflower3.jpg" alt="oneflower3" />
            </div>
            <div className="s3itemTextMP">
              <span className="s3itemTitleMP">상품명</span>
              <span className="s3itemPriceMP">상품 가격</span>
            </div>
            <div className="s3itemIconMP">
              <svg
                class="heart"
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
          <div className="s3line1MP"></div>
          <div className="s3item4MP">
            <div className="s3itemImgMP">
              <img src="./img/oneflower4.jpg" alt="oneflower4" />
            </div>
            <div className="s3itemTextMP">
              <span className="s3itemTitleMP">상품명</span>
              <span className="s3itemPriceMP">상품 가격</span>
            </div>
            <div className="s3itemIconMP">
              <svg
                class="heart"
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

        {/* Tab 3: 바스켓 */}
        <div
          className="s3tab3boxMP"
          style={{ display: activeTab === "tab3" ? "flex" : "none" }}
        >
          <div className="s3item1MP">
            <div className="s3itemImgMP">
              <img src="./img/basket1.png" alt="basket1" />
            </div>
            <div className="s3itemTextMP">
              <span className="s3itemTitleMP">상품명</span>
              <span className="s3itemPriceMP">상품 가격</span>
            </div>
            <div className="s3itemIconMP">
              <svg
                class="heart"
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
          <div className="s3line1MP"></div>
          <div className="s3item2MP">
            <div className="s3itemImgMP">
              <img src="./img/basket2.png" alt="basket2" />
            </div>
            <div className="s3itemTextMP">
              <span className="s3itemTitleMP">상품명</span>
              <span className="s3itemPriceMP">상품 가격</span>
            </div>
            <div className="s3itemIconMP">
              <svg
                class="heart"
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
          <div className="s3line1MP"></div>
          <div className="s3item3MP">
            <div className="s3itemImgMP">
              <img src="./img/basket3.jpg" alt="basket3" />
            </div>
            <div className="s3itemTextMP">
              <span className="s3itemTitleMP">상품명</span>
              <span className="s3itemPriceMP">상품 가격</span>
            </div>
            <div className="s3itemIconMP">
              <svg
                class="heart"
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
          <div className="s3line1MP"></div>
          <div className="s3item4MP">
            <div className="s3itemImgMP">
              <img src="./img/basket4.jpg" alt="basket4" />
            </div>
            <div className="s3itemTextMP">
              <span className="s3itemTitleMP">상품명</span>
              <span className="s3itemPriceMP">상품 가격</span>
            </div>
            <div className="s3itemIconMP">
              <svg
                class="heart"
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

export default Section3;
