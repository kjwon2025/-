// CategoryDetail.jsx
import "./css/CategoryDetail.css";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentItems,
  selectTotalPages,
  selectActivePage,
  setPage,
  nextPage,
  prevPage,
} from "../store/productsSlice";
import { togglePriceFilter } from "../store/productsSlice";

const img = (name) => `${process.env.PUBLIC_URL}/img/${name}`;

function CategoryDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux에서 페이지/아이템 가져오기
  const items = useSelector(selectCurrentItems);
  const totalPages = useSelector(selectTotalPages);
  const activePage = useSelector(selectActivePage);

  // 아코디언 상태
  const [sections, setSections] = useState({
    price: false,
    size: false,
    level: false,
  });
  const toggleSection = (key) =>
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));

  // 페이지 번호를 5개씩 그룹핑
  const pagesPerGroup = 5;
  const pageGroup = Math.floor((activePage - 1) / pagesPerGroup);
  const startPage = pageGroup * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);
  const pageNumbers = useMemo(
    () =>
      Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i),
    [startPage, endPage]
  );

  // 현재 페이지 아이템을 3개씩 묶어서 행 단위로 관리
  const rowsOf3 = useMemo(() => {
    return items.reduce((rows, product, idx) => {
      if (idx % 3 === 0) rows.push([]);
      rows[rows.length - 1].push(product);
      return rows;
    }, []);
  }, [items]);

  return (
    <>
      {/* 타이틀 */}
      <div id="ca_title">
        <h1>꽃 &gt; 꽃다발</h1>
      </div>

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
                  <input
                    type="checkbox"
                    onChange={() => dispatch(togglePriceFilter("over5"))}
                  />
                  5만원 이상
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => dispatch(togglePriceFilter("3to5"))}
                  />
                  3 ~ 5만원
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => dispatch(togglePriceFilter("under3"))}
                  />
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
              />
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
              />
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
          {rowsOf3.map((row, rowIdx) => {
            const isLastRow = rowIdx === rowsOf3.length - 1;

            return (
              <div key={rowIdx} className="ca_prostyle">
                {row.map((product, idx) => (
                  <div key={product.id} className="product_wrap">
                    <div
                      className="product_card"
                      onClick={() => {
                        if (rowIdx === 0 && idx === 0) navigate("/detail");
                      }}
                      style={{
                        cursor:
                          rowIdx === 0 && idx === 0 ? "pointer" : "default",
                      }}
                    >
                      <img src={img(product.img)} alt={product.name} />
                      <p className="product_name">{product.name}</p>
                      <p className="product_price">{product.price}</p>

                      {/* ✅ 각 상품마다 가로선 (단, 마지막 행은 제외) */}
                      {!isLastRow && <div className="ca_line"></div>}
                    </div>

                    {/* ✅ 세로선: 마지막 열은 제외 */}
                    {idx !== row.length - 1 && (
                      <div className="ca_widthLine"></div>
                    )}
                  </div>
                ))}
              </div>
            );
          })}

          {/* 페이지네이션 */}
          <div className="ca_page">
            <ul>
              <li>
                <button
                  type="button"
                  className="linklike"
                  onClick={() => dispatch(setPage(1))}
                  disabled={activePage === 1}
                >
                  &lsaquo;&lsaquo;
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="linklike"
                  onClick={() => dispatch(prevPage())}
                  disabled={activePage === 1}
                >
                  &lsaquo;
                </button>
              </li>

              {pageNumbers.map((num) => (
                <li key={num}>
                  <button
                    type="button"
                    className={`linklike caLike ${
                      activePage === num ? "active" : ""
                    }`}
                    onClick={() => dispatch(setPage(num))}
                  >
                    {num}
                  </button>
                </li>
              ))}

              <li>
                <button
                  type="button"
                  className="linklike"
                  onClick={() => dispatch(nextPage())}
                  disabled={activePage === totalPages}
                >
                  &rsaquo;
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="linklike"
                  onClick={() => dispatch(setPage(totalPages))}
                  disabled={activePage === totalPages}
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
