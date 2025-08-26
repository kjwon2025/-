import React from "react";
import "./Section1.css";

const Section1 = () => {
  const handleHeartClick = () => {
    alert("좋아요 목록에 추가되었습니다!");
  };

  return (
    <div id="s1MP">
      <h1>오늘의 식물</h1>
      <div id="s1conMP">
        {/* 아이템 1 */}
        <div className="s1item1MP">
          <div className="s1itemImg1MP">
            <img className="s1Img1MP" src="./img/s1img1.jpg" alt="s1img1" />
          </div>
          <div className="s1itemTextMP">
            <span className="itemTitleMP">상품명</span>
            <span className="itemPriceMP">상품 가격</span>
          </div>
          <div className="s1itemIconMP">
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
        <div className="s1line1MP"></div>

        {/* 아이템 2 */}
        <div className="s1item2MP">
          <div className="s1itemImg2MP">
            <img className="s1Img2MP" src="./img/s1img2.jpg" alt="s1img2" />
          </div>
          <div className="s1itemTextMP">
            <span className="itemTitleMP">상품명</span>
            <span className="itemPriceMP">상품 가격</span>
          </div>
          <div className="s1itemIconMP">
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
        <div className="s1line2MP"></div>

        {/* 아이템 3 */}
        <div className="s1item3MP">
          <div className="s1itemImg3MP">
            <img className="s1Img3MP" src="./img/s1img3.jpg" alt="s1img3" />
          </div>
          <div className="s1itemTextMP">
            <span className="itemTitleMP">상품명</span>
            <span className="itemPriceMP">상품 가격</span>
          </div>
          <div className="s1itemIconMP">
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
        <div className="s1line3MP"></div>

        {/* 아이템 4 */}
        <div className="s1item4MP">
          <div className="s1itemImg4MP">
            <img className="s1Img4MP" src="./img/s1img4.jpg" alt="s1img4" />
          </div>
          <div className="s1itemTextMP">
            <span className="itemTitleMP">상품명</span>
            <span className="itemPriceMP">상품 가격</span>
          </div>
          <div className="s1itemIconMP">
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

        {/* 가로선 */}
        <div className="s1garoLineMP">
          <div className="s1grline1MP"></div>
          <div className="s1grline2MP"></div>
          <div className="s1grline3MP"></div>
          <div className="s1grline4MP"></div>
        </div>

        {/* 아이템 5 */}
        <div className="s1item5MP">
          <div className="s1itemImg5MP">
            <img className="s1Img5MP" src="./img/s1img5.jpg" alt="s1img5" />
          </div>
          <div className="s1itemTextMP">
            <span className="itemTitleMP">상품명</span>
            <span className="itemPriceMP">상품 가격</span>
          </div>
          <div className="s1itemIconMP">
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
        <div className="s1line4MP"></div>

        {/* 아이템 6 */}
        <div className="s1item6MP">
          <div className="s1itemImg6MP">
            <img className="s1Img6MP" src="./img/s1img6.jpg" alt="s1img6" />
          </div>
          <div className="s1itemTextMP">
            <span className="itemTitleMP">상품명</span>
            <span className="itemPriceMP">상품 가격</span>
          </div>
          <div className="s1itemIconMP">
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
        <div className="s1line5MP"></div>

        {/* 아이템 7 */}
        <div className="s1item7MP">
          <div className="s1itemImg7MP">
            <img className="s1Img7MP" src="./img/s1img7.jpg" alt="s1img7" />
          </div>
          <div className="s1itemTextMP">
            <span className="itemTitleMP">상품명</span>
            <span className="itemPriceMP">상품 가격</span>
          </div>
          <div className="s1itemIconMP">
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
        <div className="s1line6MP"></div>

        {/* 아이템 8 */}
        <div className="s1item8MP">
          <div className="s1itemImg8MP">
            <img className="s1Img8MP" src="./img/s1img8.jpg" alt="s1img8" />
          </div>
          <div className="s1itemTextMP">
            <span className="itemTitleMP">상품명</span>
            <span className="itemPriceMP">상품 가격</span>
          </div>
          <div className="s1itemIconMP">
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
  );
};

export default Section1;
