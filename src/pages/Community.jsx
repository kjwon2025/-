import { useState, useEffect } from "react";
import "./css/Community.css";
import { Link } from "react-router-dom";

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (savedUser && savedUser.id) {
      // @ 앞까지만 잘라서 표시
      const shortId = savedUser.id.includes("@")
        ? savedUser.id.split("@")[0]
        : savedUser.id;
      setUserId(shortId);
    }
  }, []);

  // 🔹 컴포넌트 로드 시 localStorage에서 글 불러오기
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  // 글쓰기 드롭다운 상태
  const [selectedWrite, setSelectedWrite] = useState("전체글");
  const [isOpenWrite, setIsOpenWrite] = useState(false);

  // 검색 상태
  const [searchQuery, setSearchQuery] = useState(""); // 입력값
  const [searchTerm, setSearchTerm] = useState(""); // 실제 검색어 (검색 버튼 눌러야 반영됨)

  // 검색 드롭다운 상태
  const [selectedSearch, setSelectedSearch] = useState("전체글");
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const writeOptions = ["전체글", "내가 작성한 글"];
  const searchOptions = ["제목", "작성자", "내용", "전체글"];

  const [activePage, setActivePage] = useState(1);
  const [pageGroup, setPageGroup] = useState(0);

  const postsPerPage = 5; // 한 페이지 글 수
  const pagesPerGroup = 5; // 그룹당 페이지 버튼

  // ✅ 선택된 옵션에 따라 글 필터링
  let filteredPosts =
    selectedWrite === "내가 작성한 글"
      ? posts.filter((p) => p.name === userId)
      : posts;

  // ✅ 검색어 적용 (검색 버튼 눌러야 반영됨)
  if (searchTerm.trim() !== "") {
    filteredPosts = filteredPosts.filter((p) => {
      if (selectedSearch === "제목") {
        return p.title.includes(searchTerm);
      }
      if (selectedSearch === "작성자") {
        return p.name.includes(searchTerm);
      }
      if (selectedSearch === "내용") {
        return p.content.includes(searchTerm);
      }
      if (selectedSearch === "전체글") {
        return (
          p.title.includes(searchTerm) ||
          p.name.includes(searchTerm) ||
          p.content.includes(searchTerm)
        );
      }
      return true;
    });
  }

  // ✅ 페이지 계산 (filteredPosts 기준)
  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / postsPerPage)
  );
  const startPage = pageGroup * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  // ✅ 현재 페이지에 보여줄 글
  const startIndex = (activePage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const [selectedMenu, setSelectedMenu] = useState("게시판");

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
                      setActivePage(1); // ✅ 페이지 초기화
                    }}
                  >
                    {opt}
                  </li>
                ))}
            </ul>
          )}
        </div>
        <Link to="/BoardWrite" className="co_write">
          글쓰기
        </Link>
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

        {/* ✅ 검색 결과 없을 때 */}
        {currentPosts.length === 0 ? (
          <div className="coNoPosts">해당 게시글이 존재하지 않습니다.</div>
        ) : (
          currentPosts.map((a, i) => {
            const postIndex = startIndex + i; // ← 여기서 선언해야 함
            return (
              <article className="co_review" key={i}>
                <div className="co_number">
                  {String(startIndex + i + 1).padStart(2, "0")}
                </div>

                <div className="co_product">
                  {/* ✅ 이미지 클릭 → BoardEdit 이동 */}
                  <Link to={`/BoardEdit/${postIndex}`} className="thumb">
                    <img src={a.productImg} alt="썸네일" />
                  </Link>
                </div>

                {/* ✅ 제목 클릭 → BoardEdit 이동 */}
                <Link to={`/BoardEdit/${postIndex}`} className="co_boardTitle">
                  <strong>{a.title}</strong>
                  <p dangerouslySetInnerHTML={{ __html: a.content }} />
                </Link>

                <div className="co_name">{a.name}</div>
                <div className="co_date">{a.date}</div>
                <div className="co_views">{a.views}</div>
              </article>
            );
          })
        )}
      </div>

      {/* 🔎 검색창 */}
      <div className="co_search">
        <div className="co_searchTitle">
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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // ✅ 입력 시 업데이트
        />
        <button
          className="co_searchBtn"
          onClick={() => {
            setSearchTerm(searchQuery); // ✅ 검색 버튼 눌렀을 때 반영
            setActivePage(1); // 첫 페이지로 이동
          }}
        >
          검색
        </button>
      </div>

      {/* 🔹 페이지네이션 */}
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
  );
};

export default Community;
