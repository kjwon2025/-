import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/Popup.css";

function Popup({ isOpen, onClose }) {
  const [dontShowToday, setDontShowToday] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("popupClosedUntil");
    if (saved && new Date(saved) > new Date()) {
      onClose();
    }
  }, [onClose]);

  const handleClose = () => {
    if (dontShowToday) {
      const expireTime = new Date();
      expireTime.setHours(expireTime.getHours() + 24);
      localStorage.setItem("popupClosedUntil", expireTime.toISOString());
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="puclose">
        <input
          type="checkbox"
          id="pudayclose1"
          checked={dontShowToday}
          onChange={(e) => setDontShowToday(e.target.checked)}
        />
        <label htmlFor="pudayclose1">오늘 하루 열지 않기</label>
        <button onClick={handleClose} className="puclosebtn">
          닫기
        </button>
      </div>
      <div className="pucontainer">
        <div className="pucontents"></div>
        <Link to={"/Lottery"}>
          <button className="pulotbtn">경품추첨 바로가기</button>
        </Link>
      </div>
    </div>
  );
}

export default Popup;
