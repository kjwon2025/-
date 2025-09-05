import React, { useMemo, useContext, useState } from "react";
import { CartContext } from "../CartContext.js";
import { Link, useNavigate } from "react-router-dom";
import "./css/Cart.css";

const formatKRW = (n) => n.toLocaleString("ko-KR");

export default function CartPage() {
  const { items, setItems } = useContext(CartContext);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();
  const total = useMemo(
    () =>
      items.reduce(
        (acc, it) =>
          selectedItems.includes(it.id)
            ? acc + it.price * it.qty + it.optionPrice * (it.optionQty || 0)
            : acc,
        0
      ),
    [items, selectedItems]
  );

  const changeQty = (id, delta) => {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it
      )
    );
  };

  const toggleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const removeSelected = () => {
    setItems((prev) => prev.filter((it) => !selectedItems.includes(it.id)));
    setSelectedItems([]);
  };

  // 장바구니가 비었을 때
  if (!items || items.length === 0) {
    return (
      <div id="s1noneCT">
        <div id="noneboxCT">
          <h1 className="noneh1CT">장바구니</h1>
          <div className="nonecontentCT">
            <span className="nonespanCT">담겨진 상품이 없습니다.</span>
            <div
              className="noneitembtnCT"
              role="button"
              onClick={() => navigate("/CategoryDetail")}
            >
              상품 구경하기
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="s1CT">
      <div id="s1boxCT">
        <h1 className="h1CT">장바구니</h1>
        <div className="cartitemCT">
          <div className="s1contentCT">
            <div className="ctc1CT">
              {items.map((it, idx) => (
                <div key={it.id}>
                  <div className="checkconCT">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(it.id)}
                      onChange={() => toggleSelect(it.id)}
                      id={`chch-${it.id}`} // id 중복 방지
                    />
                    <label htmlFor={`chch-${it.id}`}>상품 선택</label>
                  </div>
                  <div
                    className={idx === 0 ? "tboxCT" : "bboxCT"}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    {/* 이미지 */}
                    <div className="cartimgCT">
                      <img src={it.img} alt={`${it.name} 이미지`} />
                    </div>

                    {/* 상품 정보 */}
                    <div className="iteminfoCT">
                      <span className="infospanCT">
                        {it.name}
                        <br />
                        {formatKRW(it.price)}원
                      </span>
                      <div className="pnmboxCT" aria-label="수량 조절">
                        <button
                          type="button"
                          className="pnm-btn minus"
                          onClick={() => changeQty(it.id, -1)}
                        >
                          -
                        </button>
                        <span className="pnmcountCT">{it.qty}</span>
                        <button
                          type="button"
                          className="pnm-btn plus"
                          onClick={() => changeQty(it.id, +1)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* 옵션 */}
                    <div className="optCT">
                      <span className="optinfoCT">
                        {it.optionLabel}
                        <br />
                        {formatKRW(it.optionPrice)}원
                      </span>
                      <div className="pnmboxCT" aria-label="옵션 수량 조절">
                        <button
                          type="button"
                          className="pnm-btn minus"
                          onClick={() =>
                            setItems((prev) =>
                              prev.map((item) =>
                                item.id === it.id
                                  ? {
                                      ...item,
                                      optionQty: Math.max(
                                        0,
                                        (item.optionQty || 1) - 1
                                      ),
                                    }
                                  : item
                              )
                            )
                          }
                        >
                          -
                        </button>
                        <span className="pnmcountCT">{it.optionQty || 1}</span>
                        <button
                          type="button"
                          className="pnm-btn plus"
                          onClick={() =>
                            setItems((prev) =>
                              prev.map((item) =>
                                item.id === it.id
                                  ? {
                                      ...item,
                                      optionQty: (item.optionQty || 1) + 1,
                                    }
                                  : item
                              )
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* 가격 */}
                    <div className="itemoptpCT">
                      <span className="iopinfoCT">
                        {formatKRW(
                          it.price * it.qty +
                            it.optionPrice * (it.optionQty || 0)
                        )}
                        원
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 합계 */}
        <div className="ctc2CT">
          <span className="totalpriceCT">합계 {formatKRW(total)}원</span>
        </div>

        {/* 버튼 */}
        <div className="btnsCT">
          <button
            className="removebtnCT"
            type="button"
            onClick={removeSelected}
            disabled={selectedItems.length === 0}
          >
            선택상품 삭제하기
          </button>

          <button
            className="buybtnCT"
            type="button"
            onClick={() => {
              if (selectedItems.length === 0) {
                alert("상품을 선택해주세요.");
              } else {
                navigate("/MessageCard", {
                  state: {
                    cartItems: items.filter((it) =>
                      selectedItems.includes(it.id)
                    ),
                  },
                });
              }
            }}
          >
            선택상품 결제하기
          </button>
        </div>
      </div>
    </div>
  );
}
