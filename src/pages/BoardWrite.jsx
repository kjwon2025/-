import React, { useState } from "react";
import "./css/BoardWrite.css";

const BoardWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 게시글 작성 로직 추가
    console.log({ title, content, file });
  };

  return (
    <div id="secallBW">
      <div className="sec1titleQA">글 작성하기</div>

      {/* 작성자 정보 */}
      <div className="sec2QA">
        <div className="sec2innerQA">
          <div className="sec2leftQA">작성자 정보</div>
          <div className="sec2rightQA">
            <div className="sec2rightinnerQA">
              <div className="sec2inputQA">
                <label htmlFor="userId">아이디</label>
                <input
                  type="text"
                  id="userId"
                  name="userId"
                  value="yuri"
                  readOnly
                />
              </div>
              <div className="sec2inputQA">
                <label htmlFor="password">비밀번호</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="게시글에 적용할 비밀번호를 입력하세요."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 게시글 내용 */}
      <div className="sec3QA">
        <div className="sec3innerQA">
          <div className="sec3leftQA">게시글 내용</div>
          <div className="sec3rightQA">
            {/* 제목 */}
            <div className="sec3inputQA">
              <label htmlFor="title">제목</label>
              <input
                type="text"
                id="title"
                placeholder="제목을 입력하세요."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* 게시글 내용 */}
            <div className="sec3inputQA">
              <label htmlFor="content">게시글 내용</label>
              <textarea
                id="sec3contentQA"
                placeholder="내용을 입력하세요.(1000자 내외)"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            {/* 파일 첨부 */}
            <div className="sec3inputQA fileGroup">
              <label htmlFor="file">파일첨부</label>
              <div className="file-wrapperQA">
                <span className="file-labelQA">
                  {file ? file.name : "첨부된 파일 없음"}
                </span>
                <button
                  type="button"
                  onClick={() => document.getElementById("file").click()}
                  id="customBtn"
                >
                  파일찾기
                </button>
                <input
                  type="file"
                  id="file"
                  hidden
                  onChange={handleFileChange}
                />
              </div>
              <span className="fileNote">*용량은 500MB이내</span>
            </div>
          </div>
        </div>
      </div>

      {/* 작성 완료 버튼 */}
      <div id="sec5QA">
        <button type="submit" className="sec5buttomQA" onClick={handleSubmit}>
          작성완료
        </button>
      </div>
    </div>
  );
};

export default BoardWrite;
