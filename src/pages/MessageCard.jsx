import { useState } from "react";
import "./css/MessageCard.css";
import { useNavigate } from "react-router-dom";

export default function MessageCard() {
  const navigate = useNavigate();

  const categories = [
    { name: "DIY", img: "./img/mc_card.png" },
    { name: "사랑하는 당신에게", img: "./img/mc_card2.png" },
    { name: "삼가 조의를 표합니다.", img: "./img/mc_card3.png" },
    { name: "Happy BirthDay !", img: "./img/mc_card4.png" },
    { name: "내가 널 응원해 !", img: "./img/mc_card5.png" },
  ];

  // 첫 번째 카테고리(DIY) 기본 선택
  const [category, setCategory] = useState(categories[0].name);
  const [message, setMessage] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleMessageChange = (e) => {
    if (e.target.value.length <= 250) {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = () => {
    navigate("/payment");
    window.scrollTo(0, 0);
  };

  // 선택된 카테고리의 이미지 가져오기
  const selectedImage = categories.find((cat) => cat.name === category)?.img;

  return (
    <div>
      {/* 섹션1 */}
      <div id="sec1allMC">
        <h1 className="sec1titleMC">메세지 카드 작성하기</h1>
        <div className="sec1contentMC">
          <div className="sec1leftMC"></div>
          <div className="sec1rightMC">
            <div className="sec1todaybtnMC">오늘배송</div>
            <div className="sec1textMC">
              <br />
              메리골드 위시
              <br />
              49,900원 / 1개
              <br />
              크리스탈 화병(+12,000원 x1)
              <br />
              <br />
              <br />
              <span>합계 71,900원</span>
            </div>
          </div>
        </div>
      </div>

      {/* 섹션2 */}
      <div id="sec2allMC">
        <div className="sec2topMC">
          {categories.map((cat) => (
            <label key={cat.name} className="circle-checkboxMC">
              <input
                type="radio"
                name="category"
                value={cat.name}
                checked={category === cat.name}
                onChange={handleCategoryChange}
              />
              <span></span>
              {cat.name}
            </label>
          ))}
        </div>

        <div className="sec2bottomMC">
          <div className="sec2bottomleftMC">
            <img src={selectedImage} alt={category} />
          </div>
          <div className="sec2bottomrightMC">
            <div className="input-containerMC">
              <div className="input-headerMC">내용을 입력해주세요</div>
              <textarea
                id="messageMC"
                value={message}
                onChange={handleMessageChange}
                maxLength={250}
              />
              <div className="char-countMC">
                <span id="charCountMC">{message.length}</span>/250
              </div>
            </div>
          </div>
        </div>

        <div id="sec2-2allboxMC">
          <br />
          - 최대 10줄, 한 줄당 최대 26자까지 인쇄됩니다. (공백 포함)
          <br />
          - 이모티콘은 편지 내용에 포함되지 않습니다.
          <br />
          - 한국어와 영어 이외의 다른 외국어는 사용이 어렵습니다.
          <br />- 붙여넣기 사용시 편지가 입력 되지 않습니다.
        </div>
      </div>

      {/* 섹션3 */}
      <div id="sec3MC">
        <button className="doneMC" onClick={handleSubmit}>
          작성완료
        </button>
      </div>
    </div>
  );
}
