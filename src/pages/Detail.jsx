import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext.js";
import "./css/Detail.css";

const reviewsData = [
  {
    author: "yeojin",
    rating: 4, // ⭐️ 4점
    content:
      "꽃이 너무 예뻐요~ <br>두 송이만 구매했지만 방을 밝혀주는 효과가 있네요!",
    date: "2025.08.12",
    img: "./img/rv_review1.png",
  },
  {
    author: "yuri",
    rating: 5,
    content: "몬스테라가 아주 화려하네요.<br>대형으로 키워보겠습니다! 정글!",
    date: "2025.08.11",
    img: "./img/rv_review2.png",
  },
  {
    author: "jiwon",
    rating: 5,
    content: "미니미한 화분이 너무 귀여워요.",
    date: "2025.08.10",
    img: "./img/rv_review3.png",
  },
  {
    author: "coco",
    rating: 3,
    content: "냥냥냥냥",
    date: "2025.08.09",
    img: "./img/rv_review4.png",
  },
  {
    author: "coco_dog",
    rating: 5,
    content: "멍멍멍멍",
    date: "2025.08.09",
    img: "./img/rv_review5.png",
  },
];

const reviewsPerPage = 5;

const Detail = () => {
  const navigate = useNavigate();

  const { addItem } = useContext(CartContext);

  const goCart = () => {
    addItem({
      id: 1,
      name: "메리골드 위시",
      price: 59900,
      optionLabel: "크리스탈 화병",
      optionPrice: 12000,
      optionQty: optionCount,
      qty: mainCount,
      img: mainImg,
    });

    navigate("/Cart");
  };
  const goMessageCard = () => {
    const cartItems = [
      {
        id: 1,
        name: "메리골드 위시",
        price: 59900,
        qty: mainCount,
        optionLabel: "크리스탈 화병",
        optionPrice: 12000,
        optionQty: optionCount,
        deliveryType,
        img: mainImg,
      },
    ];

    navigate("/MessageCard", {
      state: { cartItems },
    });

    window.scrollTo(0, 0);
  };

  const [newRating, setNewRating] = useState(0); // 리뷰 입력 시 선택한 별점

  // ---------- 리뷰 모달 상태 ----------
  const [isOpen, setIsOpen] = useState(false);
  const [reviews, setReviews] = useState(reviewsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [newReview, setNewReview] = useState("");

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);
  const handleAddReview = () => {
    if (!newReview.trim()) {
      alert("리뷰 내용을 입력해주세요.");
      return;
    }

    const now = new Date();
    const dateStr = `${now.getFullYear()}.${(now.getMonth() + 1)
      .toString()
      .padStart(2, "0")}.${now.getDate().toString().padStart(2, "0")}`;

    const newItem = {
      author: "yuri",
      rating: newRating, // ⭐ 여기에 선택한 별점 추가
      content: newReview,
      date: dateStr,
      img: attachedFile
        ? URL.createObjectURL(attachedFile)
        : "./img/example1.jpg",
    };

    setReviews([newItem, ...reviews]);
    setNewReview("");
    setNewRating(0); // 리뷰 등록 후 별점 초기화
    setAttachedFile(null);
    setCurrentPage(1);
  };

  const [attachedFile, setAttachedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // 1GB 제한
    const maxSize = 1024 * 1024 * 1024;
    if (file.size > maxSize) {
      alert("파일 용량은 1GB 이내로 첨부 가능합니다.");
      return;
    }

    setAttachedFile(file);
  };

  // ---------- 상품 수량 상태 ----------
  const [mainCount, setMainCount] = useState(1); // 메리골드 위시
  const [optionCount, setOptionCount] = useState(1); // 옵션 추가 (화병)

  // ---------- 배송 방법 상태 ----------
  const [deliveryType, setDeliveryType] = useState("today"); // 디폴트: 오늘배송

  // 메인 이미지
  const [mainImg, setMainImg] = useState("/img/dt_flower1.png");

  // 썸네일 이미지 목록
  const [subImgs, setSubImgs] = useState([
    "/img/dt_flower2.jpg",
    "/img/dt_flower3.jpg",
    "/img/dt_flower4.png",
    "/img/dt_flower5.png",
  ]);

  // 클릭하면 메인/썸네일 자리 바꾸는 함수
  const handleSwap = (clickedImg, idx) => {
    const newSubImgs = [...subImgs];
    newSubImgs[idx] = mainImg; // 기존 메인 이미지 → 클릭한 썸네일 자리
    setSubImgs(newSubImgs);
    setMainImg(clickedImg); // 메인 이미지 → 클릭한 썸네일
  };

  return (
    <div id="detailfullDT">
      <div id="section1DT">
        <div className="flowerpicDT">
          <div className="flowerpic1DT">
            <img src={mainImg} alt="dt_flower1" />
          </div>
          <div className="flowerpicsubDT">
            {subImgs.map((img, idx) => (
              <div key={idx} className={`sub${idx + 1}DT`}>
                <img
                  src={img}
                  alt={`dt_flower${idx + 2}`}
                  onClick={() => handleSwap(img, idx)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flowertextDT">
          <div className="flowertextinnerDT">
            <div className="flowertitleDT">
              <div className="titletextDT">
                메리골드 위시
                <br />
                <span className="priceDT">59,900원</span>
              </div>
              <div className="titlerightDT">오늘배송</div>
            </div>

            <div className="flowerdeliDT">
              <div className="deliinnerDT">
                <div className="innertopDT">
                  <div className="innerleftDT">배송방법</div>
                  <div className="innerrightDT">
                    <button
                      className={`rightBtn1DT ${
                        deliveryType === "normal" ? "active" : ""
                      }`}
                      onClick={() => setDeliveryType("normal")}
                    >
                      일반배송
                    </button>
                    <button
                      className={`rightBtn2DT ${
                        deliveryType === "today" ? "active" : ""
                      }`}
                      onClick={() => setDeliveryType("today")}
                    >
                      오늘배송
                    </button>
                  </div>
                </div>
                <div className="innerbottomDT">
                  <div className="bottomleftDT">배송비</div>
                  <div className="bottomrightDT">무료</div>
                </div>
              </div>
            </div>

            <div className="floweroptDT">
              <div className="optcenterDT">
                <div className="centertopDT">
                  <div className="centertopleftDT">메리골드 위시</div>
                  <div className="centertoprightDT">
                    <div className="countbutton1DT">
                      <button
                        className="minusDT"
                        onClick={() =>
                          setMainCount((prev) => Math.max(1, prev - 1))
                        }
                      >
                        -
                      </button>
                      <span className="countDT">{mainCount}</span>
                      <button
                        className="plusDT"
                        onClick={() => setMainCount((prev) => prev + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="centerbottomDT">
                  <div className="centerbottomleftDT">옵션 추가</div>
                  <div className="centerbottomrightDT">
                    <span className="vaseDT">화병</span>&nbsp;(+12,000)
                    <div className="countbutton2DT">
                      <button
                        className="minusDT"
                        onClick={() =>
                          setOptionCount((prev) => Math.max(0, prev - 1))
                        }
                      >
                        -
                      </button>
                      <span className="countDT">{optionCount}</span>
                      <button
                        className="plusDT"
                        onClick={() => setOptionCount((prev) => prev + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flowertotalDT">
              <div className="totalleftDT">총 주문금액</div>
              <div className="totalrightDT">
                {(59_900 * mainCount + 12_000 * optionCount).toLocaleString()}원
              </div>
            </div>

            <div className="flowerbuttonDT">
              <div className="cartbuttonDT" onClick={goCart}>
                장바구니 담기
              </div>
              <div className="buybuttonDT" onClick={goMessageCard}>
                바로 구매
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="section2DT">
        <div className="flowerguideDT">
          <img src="/img/dt_flowerguide.png" alt="dt_flowerguide.png" />
        </div>
      </div>

      <div id="section3DT">
        <div className="sec3titleboxDT">
          <div className="sec3titleleftDT">제품 상세 및 구매 안내</div>
          <div className="sec3titlerightDT" onClick={() => setIsOpen(true)}>
            리뷰
          </div>
        </div>

        <div className="detail1DT">
          <div className="detail1leftDT">
            <div className="detail1topDT">당신의 하루에 빛나는 선물</div>
            <div className="detail1bottomDT">
              햇살처럼 따사로운 주황 빛깔과 싱그러운 초록빛이 어우러진
              <br />
              브라이트 위시 메리골드 꽃다발입니다.
              <br />
              하루의 시작을 상큼하게 응원하는 마음을 담아 특별한 날은 물론
              <br /> 평소와 같은 일상 속에도 작은 행복을 전해줄거에요.
              <br />
              밝고 경쾌한 무드로 사랑하는 이들의 하루를 빛내보세요.
            </div>
          </div>
          <div className="detail1rightDT">
            <img src="/img/dt_detail1.png" alt="dt_detail1" />
          </div>
        </div>

        <div className="detail2DT">
          <div className="detail2innerDT">
            <div className="detail2innerleftDT sec2DT">
              <img src="/img/dt_detail2.png" alt="dt_detail2" />
            </div>
            <div className="detail2innerrightDT sec2DT">
              <div className="detail2topDT">
                반드시 오고야 말 행복, 메리골드
              </div>
              <div className="detail2bottomDT">
                메인 꽃으로 조합한 주황빛의 메리골드는
                <br />
                '반드시 오고야 말 행복'이라는 꽃말을 가집니다.
                <br />
                그렇기에 늘 좋은 의미에서 첫 번째로 생각나는 꽃이랍니다.
                <br />
                그윽한 향기와 멀리서도 눈에 띄도록 쨍한 색상도 매력적이죠.
                <br />
                새로운 보금자리를 마련한 이에게
                <br />
                태양과 같이 빛나는 메리골드를 선물해 보세요.
                <br />
                잊지 못할 쨍쨍한 선물이 될 거예요.
              </div>
            </div>
          </div>
        </div>

        <div className="detail3DT">
          <div className="detail3innerDT">
            <div className="detail3topDT">
              <img src="/img/dt_detail3.png" alt="dt_detail3" />
            </div>
            <div className="detail3bottomDT">
              <div className="detail3titleDT">
                <br />
                메리골드 위시 꽃다발 속 10여 종의 제철 꽃으로 사랑하는 마음을
                전해보세요.
              </div>
              <div className="detail3contentDT">
                <br />
                선명한 주황빛 메리골드를 중심으로 더해진 복숭아빛 장미와
                카네이션이 부드러운 따뜻함을 더해줘요.
                <br />
                쨍한 색감으로 생기를 더해주는 한여름의 태양빛처럼 밝고 활기찬
                꽃다발을 준비했답니다.
                <br />
                <br />
                *꽃 구성은 농장 상황에 따라 조금씩 변경될 수 있습니다.
              </div>
            </div>

            <div className="detailplusWrapperDT">
              <div className="detailplus1DT">
                <img src="/img/dt_detail4.png" alt="dt_detail4" />
              </div>
              <div className="detailplus1DT">
                <p className="pluspinaDT">P</p>IN-A{" "}
                <p className="pluspinaDT">
                  <br />P
                </p>
                REMIUM <p className="pluspinaDT">P</p>ACKAGE
                <p className="detailplustextDT">
                  <p className="detailplustitle2DT">
                    <br /> <br />
                    1. 꽃다발
                  </p>{" "}
                  플로리스트의 손길로 디자인해 최상의 아름다움을 담습니다.{" "}
                  <br />
                  <p className="detailplustitle2DT">
                    <br />
                    2. 포장
                  </p>
                  꽃다발을 더욱 돋보이게 하며 안전하게 배송되도록 포장합니다.{" "}
                  <p className="detailplustitle2DT">
                    <br />
                    3. 물 주머니
                  </p>
                  도착하는 순간까지도 생기가 살아있도록 물처리 후 배송드립니다.
                  <p className="detailplustitle2DT">
                    {" "}
                    <br />
                    4. 핀아 프리미엄 선물 박스
                  </p>
                  꽃 선물의 기대감과 만족도를 높이는 선물 패키지를 담아냅니다.
                </p>
              </div>
            </div>
            <div className="detailplus2DT">
              <div className="detailplus2-topDT">
                <img src="/img/logo.png" alt="logo.png" />
              </div>
              <div className="detailplus2-bottomDT">
                <p className="detailplus2title">
                  핀아만의 프리미엄 패키지로 소중한 마음을 전하세요
                </p>{" "}
                <br />
                핀아의 모든 꽃다발은 시그니처 패키지에 담겨 안전하게 배송됩니다.
                <br />
                소중한 마음을 전할 수 있도록 핀아는 매일 고민하고 있습니다.
              </div>
            </div>

            <div className="detailplusWrapper3DT">
              <div className="detailplus3DT">
                <img src="/img/dt_detail5.png" alt="dt_detail5" />
              </div>
              <div className="detailplus3DT">
                <p className="detailplustext3DT">
                  메시지를 담은 꽃다발, 당신의 진심이 됩니다.{" "}
                </p>
                <br /> <br />
                꽃다발 주문 시, 메세지 카드 작성이 가능합니다. <br />
                프리미엄 꽃다발과 맞춤 메시지, PIN-A에서 준비하세요.
              </div>
            </div>

            <div className="detailplus4DT">
              <div className="detailplus4-topDT">
                <img src="/img/logo.png" alt="logo.png" />
              </div>
              <div className="detailplus4-bottomDT">
                <p className="detailplus4title">핀아의 다섯가지 약속</p>

                <ul className="promise-list">
                  <li>
                    <span className="promise-number">1</span> 매일 새벽 꽃
                    농장과 시장에서 신선한 꽃을 수급합니다.
                  </li>
                  <li>
                    <span className="promise-number">2</span> 저온 창고를 통해
                    꽃에 맞는 환경을 조성해 보다 싱싱하게 꽃을 관리합니다.
                  </li>
                  <li>
                    <span className="promise-number">3</span> 매일 새벽 당일
                    출고되는 모든 꽃의 제작이 이루어집니다.
                  </li>
                  <li>
                    <span className="promise-number">4</span> 배송 중에도 신선할
                    수 있도록 모든 꽃에 물 처리를 합니다.
                  </li>
                  <li>
                    <span className="promise-number">5</span> 포장된 꽃이 상하지
                    않도록 고안된 핀아 프리미엄 박스에 담아 배송합니다.
                  </li>
                </ul>
              </div>
            </div>

            <div className="detailplus5DT">
              <div className="topBoxDT">
                <img src="/img/dt_detail6.png" alt="dt_detail6" />
              </div>
              <div className="bottomBoxDT">
                <br />
                핀아의 꽃다발은 싱싱함이 최우선입니다. <br />
                <br />
                좋은 품질의 꽃을 좋은 가격으로 구매하여 고객님의 집 앞으로
                배송하기 위해 핀아는 매일 노력합니다. <br />
                이런 노력들이 모여 우리 일상의 꽃 문화가 만들어지리라 믿습니다.
              </div>
            </div>
            <div className="detail3noticeDT">
              <div className="detail3noticeinnerDT">
                <div className="detail3noticetitleDT">상품결제정보</div>
                고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도
                있습니다. 확인과정에서 도난 카드의 사용이나 타인 명의의 주문등
                정상적인 주문이 아니라고 판단될 경우 임의로 주문을 보류 또는
                취소할 수 있습니다.
                <br />
                무통장 입금은 상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은
                가까운 은행에서 직접 입금하시면 됩니다.
                <br />
                주문시 입력한 입금자명과 실제입금자의 성명이 반드시 일치하여야
                하며, 7일 이내로 입금을 하셔야 하며 입금되지 않은 주문은
                자동취소 됩니다.
                <br />
                <br />
                <div className="detail3noticetitleDT">배송정보</div>
                배송 방법 : 서울·경기 직배송 / 지방 택배
                <br />
                배송 지역 : 전국
                <br />
                배송 비용 : 무료
                <br />
                배송 기간 : 오늘배송 시, 1일 / 일반배송 시, 1일~3일
                <br />
                배송 안내 : 산간벽지나 도서지방은 별도의 추가금액을 지불하셔야
                하는 경우가 있습니다. 고객님께서 주문하신 상품은 입금 확인후
                배송해 드립니다. 다만, 상품종류에 따라서 상품의 배송이 다소
                지연될 수 있습니다.
                <br />
                <br />
                <div className="detail3noticetitleDT">교환 및 반품정보</div>
                교환 및 반품 주소
                <br />
                핀아 주소
                <br />
                <br /> 교환 및 반품이 가능한 경우
                <br />
                <br />- 계약내용에 관한 서면을 받은 날부터 7일. 단, 그 서면을
                받은 때보다 재화등의 공급이 늦게 이루어진 경우에는 재화등을
                공급받거나 재화등의 공급이 시작된 날부터 7일 이내
                <br />- 공급받으신 상품 및 용역의 내용이 표시.광고 내용과
                다르거나 계약내용과 다르게 이행된 때에는 당해 재화를 공급받은 날
                부터 3월이내, 그사실을 알게 된 날 또는 알 수 있었던 날부터
                30일이내
                <br />
                <br />
                교환 및 반품이 불가능한 경우
                <br />- 이용자에게 책임 있는 사유로 재화 등이 멸실 또는 훼손된
                경우(다만, 재화 등의 내용을 확인하기 위하여 포장 등을 훼손한
                경우에는 청약철회를 할 수 있습니다)
                <br />- 이용자의 사용 또는 일부 소비에 의하여 재화 등의 가치가
                현저히 감소한 경우
                <br />- 시간의 경과에 의하여 재판매가 곤란할 정도로 재화등의
                가치가 현저히 감소한 경우
                <br />- 복제가 가능한 재화등의 포장을 훼손한 경우
                <br />- 개별 주문 생산되는 재화 등 청약철회시 판매자에게 회복할
                수 없는 피해가 예상되어 소비자의 사전 동의를 얻은 경우
                <br />- 디지털 콘텐츠의 제공이 개시된 경우, (다만, 가분적 용역
                또는 가분적 디지털콘텐츠로 구성된 계약의 경우 제공이 개시되지
                아니한 부분은 청약철회를 할 수 있습니다.)
                <br />
                <br />※ 고객님의 마음이 바뀌어 교환, 반품을 하실 경우 상품반송
                비용은 고객님께서 부담하셔야 합니다.
                <br />
                (색상 교환, 사이즈 교환 등 포함)
              </div>
            </div>

            <div className="detail4DT">
              <div className="detail4innerDT">
                <div className="detail4topDT">
                  기타 상품 추천&nbsp;(연관 상품)
                </div>
                <div className="detail4middleDT">
                  <div className="boxDT">
                    <img src="./img/dt_etc1.png" />
                  </div>

                  <div className="boxDT">
                    {" "}
                    <img src="./img/dt_etc2.png" />
                  </div>
                  <div className="boxDT">
                    {" "}
                    <img src="./img/dt_etc3.png" />
                  </div>
                  <div className="boxDT">
                    {" "}
                    <img src="./img/dt_etc4.png" />
                  </div>
                </div>
                <div className="detail4bottomDT">
                  <div className="cellDT">
                    <div className="celltitleDT">원형 도자기 화병</div>
                    13,900원
                  </div>
                  <div className="cellDT">
                    <div className="celltitleDT"> 백합(한 송이)</div>
                    4,900원
                  </div>
                  <div className="cellDT">
                    <div className="celltitleDT"> 베르가못 향초</div>
                    12,000원
                  </div>
                  <div className="cellDT">
                    <div className="celltitleDT"> 초록잎사귀 화병</div>
                    15,900원
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 리뷰 모달 ===== */}
      {isOpen && (
        <>
          <div
            className="modal-overlayRV"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="modalRV">
            <div className="modal-contentRV">
              <div className="modal-headerRV">
                <div className="close-btnRV" onClick={() => setIsOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
                    />
                  </svg>
                </div>
              </div>

              <div className="reviewboxallRV">
                {currentReviews.map((review, idx) => (
                  <div className="review-itemRV" key={idx}>
                    <img src={review.img} alt="review image" />
                    <div className="review-textRV">
                      <p className="review-authorRV">{review.author}</p>

                      {/* 별점 표시 */}
                      <p className="review-ratingRV">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span
                            key={i}
                            className={
                              i < review.rating ? "star filled" : "star"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </p>

                      <p
                        className="review-contentRV"
                        dangerouslySetInnerHTML={{ __html: review.content }}
                      ></p>
                    </div>
                    <p className="review-dateRV">{review.date}</p>
                  </div>
                ))}
              </div>

              <div className="review-paginationRV">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    className={currentPage === i + 1 ? "active" : ""}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <div className="review-inputRV">
                <div className="review-userRV">yuri</div>

                <div className="review-conRV">
                  <div className="file-boxRV">
                    <div className="file-infoRV">
                      {attachedFile ? attachedFile.name : "첨부한 파일 없음"}
                    </div>
                    <label className="file-btnRV">
                      파일첨부
                      <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                        accept="image/*"
                      />
                    </label>
                  </div>

                  <div className="text-area-wrap">
                    {/* ⭐ 별점 선택 UI 추가 */}
                    <div className="star-ratingRV">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={star <= newRating ? "star filled" : "star"}
                          onClick={() => setNewRating(star)}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <textarea
                      placeholder={`리뷰 댓글을 작성해주세요.\n*이미지 파일 용량은 1GB 이내로 첨부 가능합니다.`}
                      value={newReview}
                      onChange={(e) => setNewReview(e.target.value)}
                    />
                    <button className="submit-btnRV" onClick={handleAddReview}>
                      등록하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
