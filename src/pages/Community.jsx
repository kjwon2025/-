import { useState } from "react";
import "./css/Community.css"; // ← CSS 위치에 맞게 수정
import coWrite from "../data/community";

const Community = () => {
  // 글쓰기 드롭다운 상태
  const [selectedWrite, setSelectedWrite] = useState("전체글");
  const [isOpenWrite, setIsOpenWrite] = useState(false);

  // 검색 드롭다운 상태
  const [selectedSearch, setSelectedSearch] = useState("전체글");
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const writeOptions = ["전체글", "내가 작성한 글"];
  const searchOptions = ["제목", "작성자", "내용", "전체글"];

  const [activePage, setActivePage] = useState(1);
  const [pageGroup, setPageGroup] = useState(0);

  const postsPerPage = 5; // 한 페이지 글 수
  const pagesPerGroup = 5; // 그룹당 페이지 버튼
  const totalPages = Math.max(5, Math.ceil(coWrite.length / postsPerPage));
  // 현재 그룹의 시작/끝 페이지
  const startPage = pageGroup * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  // ✅ 현재 페이지에 보여줄 글
  const startIndex = (activePage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = coWrite.slice(startIndex, endIndex);

  const [selectedMenu, setSelectedMenu] = useState("게시판"); // ✅ 기본 선택 메뉴

  return (
    <div id="community">
      <div id="co_title">
        <h1>커뮤니티</h1>
        <div className="co_moveButton">
          <div
            className={selectedMenu === "게시판" ? "active" : ""}
            onClick={() => setSelectedMenu("게시판")}
          >
            <a href="#none">게시판</a>
          </div>
          <div
            className={selectedMenu === "자주하는 질문" ? "active" : ""}
            onClick={() => setSelectedMenu("자주하는 질문")}
          >
            <a href="#none">자주하는 질문</a>
          </div>
        </div>
      </div>

      <div id="co_wrtingButton">
        <div className="co_wholewirte">
          <div className="co_drop" onClick={() => setIsOpenWrite(!isOpenWrite)}>
            <span className="co_label">{selectedWrite}</span>
            <span className="iconamoon--arrow-down-2-light"></span>
          </div>

          {/* 옵션 리스트 */}
          {isOpenWrite && (
            <ul className="co_himdel">
              {writeOptions
                .filter((opt) => opt !== selectedWrite)
                .map((opt) => (
                  <li
                    key={opt}
                    onClick={() => {
                      setSelectedWrite(opt);
                      setIsOpenWrite(false);
                    }}
                  >
                    {opt}
                  </li>
                ))}
            </ul>
          )}
        </div>
        <a href="#none" className="co_write">
          글쓰기
        </a>
      </div>

      <div id="co_bullSection">
        <div className="co_boardHeader">
          <div>번호</div>
          <div>이미지</div>
          <div>게시글</div>
          <div>작성자</div>
          <div>작성일</div>
          <div>조회</div>
        </div>

        {currentPosts.map((a, i) => (
          <article className="co_review" key={i}>
            {/* 글 번호 (전체 기준으로 계산) */}
            <div className="co_number">
              {String(startIndex + i + 1).padStart(2, "0")}
            </div>

            <div className="co_product">
              <a href="#none" className="thumb">
                <img src={a.productImg} alt={a.productImg} />
              </a>
            </div>

            <a href="#none" className="co_boardTitle">
              <strong>{a.title}</strong>
              <p dangerouslySetInnerHTML={{ __html: a.content }} />
            </a>

            <div className="co_name">{a.name}</div>
            <div className="co_date">{a.date}</div>
            <div className="co_views">{a.views}</div>
          </article>
        ))}

        <div className="co_search">
          <div className="co_searchTitle">
            {/* 검색 옵션 드롭다운 */}
            <div
              className="co_optionSee"
              onClick={() => setIsOpenSearch(!isOpenSearch)}
            >
              <p>{selectedSearch}</p>
              <span className="iconamoon--arrow-down-2-light"></span>
            </div>

            {isOpenSearch && (
              <ul className="co_options">
                {searchOptions
                  .filter((opt) => opt !== selectedSearch)
                  .map((opt) => (
                    <li
                      key={opt}
                      onClick={() => {
                        setSelectedSearch(opt);
                        setIsOpenSearch(false);
                      }}
                    >
                      {opt}
                    </li>
                  ))}
              </ul>
            )}
          </div>

          <input
            type="text"
            className="co_searchInput"
            placeholder="내용을 입력하세요"
          />
          <button className="co_searchBtn">검색</button>
        </div>

        {/* ✅ 페이지네이션 */}
        <div className="co_page">
          <ul>
            <li>
              <button
                type="button"
                onClick={() => {
                  if (pageGroup > 0) {
                    setPageGroup(pageGroup - 1);
                    setActivePage((pageGroup - 1) * pagesPerGroup + 1);
                  }
                }}
              >
                &laquo;
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => {
                  if (activePage > 1) {
                    const prevPage = activePage - 1;
                    setActivePage(prevPage);
                    if (prevPage < startPage) setPageGroup(pageGroup - 1);
                  }
                }}
              >
                &lsaquo;
              </button>
            </li>

            {pageNumbers.map((num) => (
              <li key={num}>
                <button
                  type="button"
                  className={activePage === num ? "active" : ""}
                  onClick={() => setActivePage(num)}
                >
                  {num}
                </button>
              </li>
            ))}

            <li>
              <button
                type="button"
                onClick={() => {
                  if (activePage < totalPages) {
                    const nextPage = activePage + 1;
                    setActivePage(nextPage);
                    if (nextPage > endPage) setPageGroup(pageGroup + 1);
                  }
                }}
              >
                &rsaquo;
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => {
                  if (endPage < totalPages) {
                    const nextGroup = pageGroup + 1;
                    setPageGroup(nextGroup);
                    setActivePage(nextGroup * pagesPerGroup + 1);
                  }
                }}
              >
                &raquo;
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Community;
