import React, { useState, useEffect } from "react";
import "./css/BoardEdit.css";  // ⚡️ BoardEdit 전용 CSS 파일
import { useParams, useNavigate } from "react-router-dom";

const BoardEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [userId, setUserId] = useState("");
   const [authorId, setAuthorId] = useState(""); // 🔹 원글 작성자 아이디 저장

  // 기존 글 불러오기
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (savedUser && savedUser.id) {
      setUserId(savedUser.id);
    }

    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const found = savedPosts.find((p, i) => i === Number(id));
    if (found) {
      setTitle(found.title);
      setContent(found.content);
      setAuthorId(found.name); // 🔹 작성자 저장
    }
  }, [id]);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  };

  // 글 수정
  const handleUpdate = (e) => {
    e.preventDefault();

    if (userId !== authorId) {
      alert("본인 글만 수정할 수 있습니다.");
      return;
    }

    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];

    const updatePost = (imageData) => {
      const updated = savedPosts.map((p, i) =>
        i === Number(id)
          ? {
              ...p,
              title,
              content,
              productImg: file ? imageData : p.productImg,
            }
          : p
      );
      localStorage.setItem("posts", JSON.stringify(updated));
      alert("글이 수정되었습니다!");
      navigate("/Community");
    };

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updatePost(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      updatePost(null);
    }
  };

  // 글 삭제
  const handleDelete = () => {
     if (userId !== authorId) {
      alert("본인 글만 삭제할 수 있습니다.");
      return;
    }

    if (!window.confirm("정말 삭제하시겠습니까?")) return;

    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const filtered = savedPosts.filter((_, i) => i !== Number(id));

    localStorage.setItem("posts", JSON.stringify(filtered));
    alert("글이 삭제되었습니다!");
    navigate("/Community");
  };

  return (
    <div id="EsecallBW">
      <div className="Esec1titleQA">글 수정하기</div>

      {/* 작성자 정보 */}
      <div className="Esec2QA">
        <div className="Esec2innerQA">
          <div className="Esec2leftQA">작성자 정보</div>
          <div className="Esec2rightQA">
            <div className="Esec2rightinnerQA">
              <div className="Esec2inputQA">
                <label htmlFor="userId">아이디</label>
                <input
                  type="text"
                  id="userId"
                  name="userId"
                  value={userId}
                  readOnly
                />
              </div>
              <div className="Esec2inputQA">
                <label htmlFor="password">비밀번호</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="게시글 수정/삭제 시 사용할 비밀번호"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 게시글 내용 */}
      <div className="Esec3QA">
        <div className="Esec3innerQA">
          <div className="Esec3leftQA">게시글 내용</div>
          <div className="Esec3rightQA">
            {/* 제목 */}
            <div className="Esec3inputQA">
              <label htmlFor="title">제목</label>
              <input
                type="text"
                id="title"
                placeholder="제목을 입력하세요."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                 disabled={userId !== authorId} // 본인 아닐 시 수정 불가
              />
            </div>

            {/* 게시글 내용 */}
            <div className="Esec3inputQA">
              <label htmlFor="content">게시글 내용</label>
              <textarea
                id="Esec3contentQA"
                placeholder="내용을 입력하세요.(1000자 내외)"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                disabled={userId !== authorId} // 본인 아닐 시 수정 불가
              />
            </div>

            {/* 파일 첨부 */}
            <div className="Esec3inputQA EfileGroup">
              <label htmlFor="file">파일첨부</label>
              <div className="Efile-wrapperQA">
                <span className="Efile-labelQA">
                  {file ? file.name : "첨부된 파일 없음"}
                </span>
                <button
                  type="button"
                  onClick={() => document.getElementById("file").click()}
                  id="EcustomBtn"
                  disabled={userId !== authorId} // 본인 아닐 시 버튼 비활성화
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
              <span className="EfileNote">*용량은 500MB이내</span>
            </div>
          </div>
        </div>
      </div>

      {/* 수정/삭제 버튼 */}
      <div id="Esec5QA">
        <button className="Esec5buttomQA" onClick={handleUpdate}>
          수정완료
        </button>
        <button className="Esec5buttomQA" onClick={handleDelete}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default BoardEdit;
