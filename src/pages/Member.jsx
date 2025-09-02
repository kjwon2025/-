import "./css/Member.css";

const Member = () => {
  return (
    <>
      <div id="memberMB">
        <h1 id="h1MB">회원가입</h1>
        <span id="memberspanMB">
          온라인 스토어 핀아의 회원 가입을 환영합니다.
          <br />* 표시된 필수항목 입력과 이용약관에 동의해 주시기 바랍니다.
        </span>

        <form className="formMB" onSubmit={(e) => e.preventDefault()}>
          <div className="idboxMB">
            <input className="idMB" type="text" placeholder="아이디" />
            <button className="idcheckMB" type="button">
              중복 확인
            </button>
          </div>

          <input className="pwMB" type="password" placeholder="비밀번호" />
          <input
            className="pwcMB"
            type="password"
            placeholder="비밀번호 확인"
          />
          <input className="emailMB" type="email" placeholder="이메일" />
          <input className="nameMB" type="text" placeholder="이름" />
          <input className="phoneMB" type="tel" placeholder="전화번호" />

          <div className="chballMB">
            <input type="checkbox" />
            <span>모든 약관에 동의합니다.</span>
          </div>

          <div className="chbsubMB">
            <div className="chbsub1MB">
              <input type="checkbox" />
              <span>이용 약관에 동의합니다. *</span>
            </div>
            <div className="chbsub2MB">
              <input type="checkbox" />
              <span>개인 정보 수집 및 이용에 동의합니다. *</span>
            </div>
            <div className="chbsub3MB">
              <input type="checkbox" />
              <span>개인 정보 처리 위탁에 동의합니다. *</span>
            </div>
            <div className="chbsub4MB">
              <input type="checkbox" />
              <span>개인 정보 국외 이전에 동의합니다. *</span>
            </div>
            <div className="chbsub5MB">
              <input type="checkbox" />
              <span>마케팅 활용 동의 / 쿠폰 수신 (이메일) (선택)</span>
            </div>
            <div className="chbsub6MB">
              <input type="checkbox" />
              <span>마케팅 활용 동의 / 쿠폰 수신 (SMS) (선택)</span>
            </div>
          </div>

          <button className="sbmMB" type="submit">
            가입하기
          </button>
        </form>
      </div>
    </>
  );
};

export default Member;
