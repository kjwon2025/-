import products from "../data/CategoryDetailProduct";
import "./css/CategoryDetail.css";

import { useState } from "react";
// public/img 에 있는 파일을 안전하게 참조
const img = (name) => `${process.env.PUBLIC_URL}/img/${name}`;

function CategoryDetail() {
  const [sections, setSections] = useState({
    price: false,
    size: false,
    level: false,
  });

  // ✅ 현재 선택된 페이지 번호 상태
  const [activePage, setActivePage] = useState(1);

  // ✅ 그룹 단위 (5개씩 페이지 버튼 표시)
  const [pageGroup, setPageGroup] = useState(0);
  const pagesPerGroup = 5;
  const totalPages = 30; // 👉 상품 개수에 따라 계산 가능

  const startPage = pageGroup * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const toggleSection = (key) =>
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <>
      {/* 타이틀 */}
      <div id="ca_title">
        <h1>꽃 &gt; 꽃다발</h1>
      </div>

      {/* 섹션 */}
      <div id="ca_section01">
        {/* 필터 영역 */}
        <div className="ca_filter">
          {/* 가격 */}
          <div className="ca_price ca_arco">
            <button
              type="button"
              className="check_price check_title"
              onClick={() => toggleSection("price")}
            >
              가격
              <span
                className={`iconamoon--arrow-down-2-light ${
                  sections.price ? "open" : ""
                }`}
              />
            </button>

            <ul className={`caPanel ${sections.price ? "open" : ""}`}>
              <li>
                <label>
                  <input type="checkbox" />
                  5만원 이상
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />3 ~ 5만원
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  3만원 이하
                </label>
              </li>
            </ul>
          </div>

          {/* 크기 */}
          <div className="ca_size ca_arco">
            <button
              type="button"
              className="check_size check_title"
              onClick={() => toggleSection("size")}
            >
              크기
              <span
                className={`iconamoon--arrow-down-2-light ${
                  sections.size ? "open" : ""
                }`}
              ></span>
            </button>

            <ul className={`caPanel ${sections.size ? "open" : ""}`}>
              <li>
                <label>
                  <input type="checkbox" />
                  50cm 이상
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  20cm ~ 50cm
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  20cm 이하
                </label>
              </li>
            </ul>
          </div>

          {/* 난이도 */}
          <div className="ca_level ca_arco">
            <button
              type="button"
              className="check_level check_title"
              onClick={() => toggleSection("level")}
            >
              난이도
              <span
                className={`iconamoon--arrow-down-2-light ${
                  sections.level ? "open" : ""
                }`}
              ></span>
            </button>
            <ul className={`caPanel ${sections.level ? "open" : ""}`}>
              <li>
                <label>
                  <input type="checkbox" />상
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />중
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />하
                </label>
              </li>
            </ul>
          </div>
        </div>

        {/* 상품 리스트 */}
        <div className="ca_products">
          {products
            .reduce((rows, product, idx) => {
              if (idx % 3 === 0) rows.push([]);
              rows[rows.length - 1].push(product);
              return rows;
            }, [])
            .map((row, rowIdx) => (
              <div
                key={rowIdx}
                className={`ca_products0${rowIdx + 1} ca_prostyle`}
              >
                {row.map((product, idx) => {
                  const total = products.length; // 전체 상품 개수
                  const lastRowIndex = Math.floor((total - 1) / 3); // 마지막 행 index
                  const isLastRow = rowIdx === lastRowIndex; // 지금이 마지막 행인지?

                  return (
                    <>
                      <div className="product_card">
                        <img src={`/img/${product.img}`} alt={product.name} />
                        <p className="product_name">{product.name}</p>
                        <p className="product_price">{product.price}</p>
                        {/* 마지막 행이 아닐 때만 ca_line 보여주기 */}
                        {!isLastRow && <div className="ca_line"></div>}
                      </div>

                      {/* 마지막 카드가 아닐 때만 widthLine 출력 */}
                      {idx !== row.length - 1 && (
                        <div className="ca_widthLine"></div>
                      )}
                    </>
                  );
                })}
              </div>
            ))}

          {/* ✅ 페이지네이션 */}
          <div className="ca_page">
            <ul>
              {/* << 처음 */}
              <li>
                <button
                  type="button"
                  className="linklike"
                  onClick={() => {
                    if (pageGroup > 0) {
                      setPageGroup(pageGroup - 1);
                      setActivePage((pageGroup - 1) * pagesPerGroup + 1);
                    }
                  }}
                >
                  &lsaquo;&lsaquo;
                </button>
              </li>

              {/* < 이전 */}
              <li>
                <button
                  type="button"
                  className="linklike"
                  onClick={() => {
                    if (activePage > 1) {
                      const prevPage = activePage - 1;
                      setActivePage(prevPage);

                      if (prevPage < startPage) {
                        setPageGroup(pageGroup - 1);
                      }
                    }
                  }}
                >
                  &lsaquo;
                </button>
              </li>

              {/* 숫자 */}
              {pageNumbers.map((num) => (
                <li key={num}>
                  <button
                    type="button"
                    className={`linklike caLike ${
                      activePage === num ? "active" : ""
                    }`}
                    onClick={() => setActivePage(num)}
                  >
                    {num}
                  </button>
                </li>
              ))}

              {/* > 한 칸 */}
              <li>
                <button
                  type="button"
                  className="linklike"
                  onClick={() => {
                    if (activePage < totalPages) {
                      const nextPage = activePage + 1;
                      setActivePage(nextPage);
                      if (nextPage > endPage) {
                        setPageGroup(pageGroup + 1);
                      }
                    }
                  }}
                >
                  &rsaquo;
                </button>
              </li>

              {/* >> 그룹 단위 */}
              <li>
                <button
                  type="button"
                  className="linklike"
                  onClick={() => {
                    if (endPage < totalPages) {
                      const nextGroup = pageGroup + 1;
                      setPageGroup(nextGroup);
                      setActivePage(nextGroup * pagesPerGroup + 1);
                    }
                  }}
                >
                  &rsaquo;&rsaquo;
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryDetail;
