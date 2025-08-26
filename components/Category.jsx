import React from "react";
import "./Category.css";

const Category = ({ isOpen, headerHeight }) => {
  return (
    <div
      id="hdmcateallMP"
      className={isOpen ? "show" : ""}
      style={{ top: `${headerHeight}px` }}
    >
      <div id="cateallboxMP">
        <div className="mmaintextMP">
          <span>식물</span>
          <span>꽃</span>
          <span>화분/화병</span>
          <span>화환</span>
          <span>소품</span>
          <span>커뮤니티</span>
        </div>
        <div className="msubtextMP">
          <ul className="cateplantMP">
            <li>분재</li>
            <li>관엽</li>
            <li>선인장</li>
            <li>꽃 & 열매</li>
          </ul>
          <ul className="cateflowerMP">
            <li>꽃 다발</li>
            <li>꽃 송이</li>
            <li>프리미엄 꽃 다발</li>
          </ul>
          <ul className="catepotMP">
            <li>베이직 화병</li>
            <li>프리미엄 화병</li>
            <li>시그니처 화병</li>
          </ul>
          <ul className="catewreathMP">
            <li>근조화환</li>
            <li>축하화환</li>
          </ul>
          <ul className="catestuffMP">
            <li>캔들</li>
            <li>향수</li>
            <li>방향제</li>
          </ul>
          <ul className="catecommunityMP">
            <li>Q & A</li>
            <li>고객센터</li>
            <li>자주하는 질문</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;
