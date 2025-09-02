import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import Category from "./Category";
import Search from "./Search";
import "./css/Header.css";

const Header2 = ({ openLogin }) => {
  const [isCateOpen, setIsCateOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const cateRef = useRef(null);
  const searchRef = useRef(null);

  // 외부 클릭/ESC 처리
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cateRef.current && !cateRef.current.contains(e.target)) {
        setIsCateOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsCateOpen(false);
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* 항상 보이는 헤더2 */}
      <header id="header2CPN" className="show">
        <div id="logoH2CPN">
          <Link to="/">
            <img src="./img/logo.png" alt="logo" />
          </Link>
        </div>

        {/* 왼쪽 네비 */}
        <nav id="nav1H2CPN">
          <svg
            className="cateallbtnMP"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={(e) => {
              e.stopPropagation();
              setIsCateOpen(!isCateOpen);
            }}
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M4 9.75h16c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H4c-.41 0-.75.34-.75.75s.34.75.75.75m0 6h10c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H4c-.41 0-.75.34-.75.75s.34.75.75.75"
            />
          </svg>
          <ul>
            <li className="hd2mcate1MP">
              식물
              <ul className="hd2ms1MP">
                <li>분재</li>
                <li>관엽</li>
                <li>선인장</li>
                <li>꽃 & 열매</li>
              </ul>
            </li>
            <li className="hd2mcate2MP">
              <Link to={"/CategoryDetail"}>꽃</Link>
              <ul className="hd2ms2MP">
                <li>꽃 다발</li>
                <li>꽃 송이</li>
                <li>프리미엄 꽃 다발</li>
              </ul>
            </li>
            <li className="hd2mcate3MP">
              화분/화병
              <ul className="hd2ms3MP">
                <li>베이직 화병</li>
                <li>프리미엄 화병</li>
                <li>시그니처 화병</li>
              </ul>
            </li>
            <li className="hd2mcate4MP">
              화환
              <ul className="hd2ms4MP">
                <li>근조화환</li>
                <li>축하화환</li>
              </ul>
            </li>
            <li className="hd2mcate5MP">
              소품
              <ul className="hd2ms5MP">
                <li>캔들</li>
                <li>향수</li>
                <li>방향제</li>
              </ul>
            </li>
            <li className="hd2mcate6MP">
              커뮤니티
              <ul className="hd2ms6MP">
                <li>Q & A</li>
                <li>고객센터</li>
                <li>자주하는 질문</li>
              </ul>
            </li>
          </ul>
        </nav>

        {/* 오른쪽 네비 */}
        <nav id="nav2H2CPN">
          <svg
            className="hdmsearchMP"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={(e) => {
              e.stopPropagation();
              setIsSearchOpen(!isSearchOpen);
            }}
          >
            <g className="search-outline">
              <g fill="currentColor" fillRule="evenodd" className="Vector">
                <path d="M11 17a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0 2a8 8 0 1 0 0-16a8 8 0 0 0 0 16" />
                <path d="M15.32 15.29a1 1 0 0 1 1.414.005l3.975 4a1 1 0 0 1-1.418 1.41l-3.975-4a1 1 0 0 1 .004-1.414Z" />
              </g>
            </g>
          </svg>

          {/* 장바구니 */}
          <Link to="/Cart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z"
              />
            </svg>
          </Link>

          {/* 마이페이지 */}
          <svg
            className="hdmmyicon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={openLogin}
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </g>
          </svg>
        </nav>
      </header>

      {/* 카테고리 & 검색 */}
      <div ref={cateRef}>
        <Category isOpen={isCateOpen} headerHeight={60} />
      </div>
      <div ref={searchRef}>
        <Search isActive={isSearchOpen} setIsActive={setIsSearchOpen} />
      </div>
    </>
  );
};

export default Header2;
