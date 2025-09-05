import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Member.css";

const Member = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [idAvailable, setIdAvailable] = useState(null);
  const [loading, setLoading] = useState(false);

  const [agreements, setAgreements] = useState({
    all: false,
    terms: false,
    privacy: false,
    outsourcing: false,
    overseas: false,
    marketingEmail: false,
    marketingSMS: false,
  });

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // 로컬스토리지 기반 아이디 중복 확인
  const handleIdCheck = () => {
    if (!id.trim()) {
      alert("아이디를 입력해주세요.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const exists = users.some((user) => user.id === id);
      setIdAvailable(!exists);
      setLoading(false);
    }, 500); // 약간의 딜레이
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setAgreements((prev) => {
      const updated = { ...prev, [name]: checked };
      const { all, ...subs } = updated;
      updated.all = Object.values(subs).every((v) => v === true);
      return updated;
    });
  };

  const handleAllCheck = (e) => {
    const checked = e.target.checked;
    setAgreements({
      all: checked,
      terms: checked,
      privacy: checked,
      outsourcing: checked,
      overseas: checked,
      marketingEmail: checked,
      marketingSMS: checked,
    });
  };

  // 실제 회원가입
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!idAvailable) {
      alert("아이디 중복 확인을 해주세요.");
      return;
    }

    if (!password || password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (
      !agreements.terms ||
      !agreements.privacy ||
      !agreements.outsourcing ||
      !agreements.overseas
    ) {
      alert("필수 약관에 동의해주세요.");
      return;
    }

    // 로컬스토리지에 저장
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({
      id,
      password,
      email,
      name,
      phone,
      agreements,
    });
    localStorage.setItem("users", JSON.stringify(users));

    alert("회원가입이 완료되었습니다!");
    // 입력 초기화
    setId("");
    setIdAvailable(null);
    setPassword("");
    setPasswordConfirm("");
    setEmail("");
    setName("");
    setPhone("");
    setAgreements({
      all: false,
      terms: false,
      privacy: false,
      outsourcing: false,
      overseas: false,
      marketingEmail: false,
      marketingSMS: false,
    });

    navigate("/");
  };

  return (
    <div id="memberMB">
      <h1 id="h1MB">회원가입</h1>
      <span id="memberspanMB">
        온라인 스토어 핀아의 회원 가입을 환영합니다.
        <br />* 표시된 필수항목 입력과 이용약관에 동의해 주시기 바랍니다.
      </span>

      <form className="formMB" onSubmit={handleSubmit}>
        <div className="idboxMB">
          <input
            className="idMB"
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
          <button
            className="idcheckMB"
            type="button"
            onClick={handleIdCheck}
            disabled={loading}
          >
            {loading ? "확인 중..." : "중복확인"}
          </button>
        </div>

        {idAvailable === true && (
          <p style={{ color: "green", fontSize: "14px" }}>
            사용 가능한 아이디입니다 ✅
          </p>
        )}
        {idAvailable === false && (
          <p style={{ color: "red", fontSize: "14px" }}>
            이미 존재하는 아이디입니다 ❌
          </p>
        )}

        <input
          className="pwMB"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className="pwcMB"
          type="password"
          placeholder="비밀번호 확인"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
        />
        <input
          className="emailMB"
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="nameMB"
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="phoneMB"
          type="tel"
          placeholder="전화번호"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <div className="chballMB">
          <input
            type="checkbox"
            name="all"
            checked={agreements.all}
            onChange={handleAllCheck}
            id="chballcb"
          />
          <label htmlFor="chballcb">모든 약관에 동의합니다.</label>
        </div>

        <div className="chbsubMB">
          {/* 개별 약관 체크박스 동일 */}
          <div className="chbsub1MB">
            <input
              type="checkbox"
              name="terms"
              checked={agreements.terms}
              onChange={handleCheckboxChange}
              required
              id="chbsub1cb"
            />
            <label htmlFor="chbsub1cb">이용 약관에 동의합니다. *</label>
          </div>
          <div className="chbsub2MB">
            <input
              type="checkbox"
              name="privacy"
              checked={agreements.privacy}
              onChange={handleCheckboxChange}
              required
              id="chbsub2cb"
            />
            <label htmlFor="chbsub2cb">
              개인 정보 수집 및 이용에 동의합니다. *
            </label>
          </div>
          <div className="chbsub3MB">
            <input
              type="checkbox"
              name="outsourcing"
              checked={agreements.outsourcing}
              onChange={handleCheckboxChange}
              required
              id="chbsub3cb"
            />
            <label htmlFor="chbsub3cb">
              개인 정보 처리 위탁에 동의합니다. *
            </label>
          </div>
          <div className="chbsub4MB">
            <input
              type="checkbox"
              name="overseas"
              checked={agreements.overseas}
              onChange={handleCheckboxChange}
              required
              id="chbsub4cb"
            />
            <label htmlFor="chbsub4cb">
              개인 정보 국외 이전에 동의합니다. *
            </label>
          </div>
          <div className="chbsub5MB">
            <input
              type="checkbox"
              name="marketingEmail"
              checked={agreements.marketingEmail}
              onChange={handleCheckboxChange}
              id="chbsub5cb"
            />
            <label htmlFor="chbsub5cb">
              마케팅 활용 동의 / 쿠폰 수신 (이메일) (선택)
            </label>
          </div>
          <div className="chbsub6MB">
            <input
              type="checkbox"
              name="marketingSMS"
              checked={agreements.marketingSMS}
              onChange={handleCheckboxChange}
              id="chbsub6cb"
            />
            <label htmlFor="chbsub6cb">
              마케팅 활용 동의 / 쿠폰 수신 (SMS) (선택)
            </label>
          </div>
        </div>

        <button className="sbmMB" type="submit">
          가입하기
        </button>
      </form>
    </div>
  );
};

export default Member;
