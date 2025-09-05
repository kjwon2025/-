// QnA.jsx
import React, { useState } from "react";
import "./css/QnA.css";

const QnA = () => {
  const [password, setPassword] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [agree, setAgree] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      alert("개인정보 수집 동의가 필요합니다.");
      return;
    }
    // 서버 제출 로직 작성 가능
    console.log({ password, inquiryType, title, content, file, agree });
  };

  return (
    <div id="secallQA">
      <div className="sec1titleQA">QnA</div>

      {/* 작성자 정보 */}
      <div className="sec2QA">
        <div className="sec2innerQA">
          <div className="sec2leftQA">작성자 정보</div>
          <div className="sec2rightQA">
            <div className="sec2rightinnerQA">
              <div className="sec2inputQA">
                <label htmlFor="userId">아이디</label>
                <input type="text" id="userId" value="yuri" readOnly />
              </div>
              <div className="sec2inputQA">
                <label htmlFor="password">비밀번호</label>
                <input
                  type="password"
                  id="password"
                  placeholder="문의글에 적용할 비밀번호를 입력하세요."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 문의 내용 */}
      <div className="sec3QA">
        <div className="sec3innerQA">
          <div className="sec3leftQA">문의 내용</div>
          <div className="sec3rightQA">
            <div className="sec3inputQA">
              <label className="inquirytypeQA" htmlFor="inquiryType">
                문의 유형
              </label>
              <select
                id="inquiryType"
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
              >
                <option value="">문의 유형을 선택하세요.</option>
                <option value="배송">배송</option>
                <option value="결제/쿠폰">결제/쿠폰</option>
                <option value="교환/환불">교환/환불</option>
                <option value="기타">기타</option>
              </select>
            </div>

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

            <div className="sec3inputQA">
              <label htmlFor="content">게시글 내용</label>
              <textarea
                id="sec3contentQA"
                placeholder="내용을 입력하세요.(1000자 내외)"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

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

      {/* 섹션 4 */}
      <div id="sec4QA">
        <div className="sec4innerQA">
          <div className="sec4leftQA">개인정보 수집 동의</div>
          <div className="sec4rightQA">
            <p>
              핀아 개인정보 처리방침
              <br />
              주식회사 핀아(이하 ‘회사’)는 개인정보 보호법 제30조에 따라
              이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게
              처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립,
              공개합니다.
              <br />
              <br />
              제1조(개인정보의 수집 및 이용 목적)
              <br />
              회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는
              개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용
              목적이 변경되는 경우 개인정보 보호법 제18조에 따라 별도의 동의를
              받는 등 필요한 조치를 이행할 예정입니다.
              <br />
              <br />
              제2조(개인정보 수집 항목 및 방법)
              <br />
              회사는 다음의 개인정보 항목을 수집하고 있습니다. 개인정보가 필요한
              시점에 최소한의 정보만을 수집하며, 고지한 범위 내에서만
              사용합니다. 또한, 사전 동의 없이 고지한 범위를 초과하여 이용하거나
              외부에 공개하지 않습니다.
            </p>

            <div className="agreeCheckQA">
              <input
                type="checkbox"
                id="agree"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <label htmlFor="agree">
                개인정보 수집 및 이용에 동의합니다(필수)
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* 작성 완료 버튼 */}
      <div id="sec5QA">
        <button type="submit" className="sec5buttomQA" onClick={handleSubmit}>
          작성 완료
        </button>
      </div>
    </div>
  );
};

export default QnA;
