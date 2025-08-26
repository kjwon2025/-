import React, { useRef, useEffect } from "react";
import "./Search.css";

const Search = ({ isActive, setIsActive }) => {
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isActive && inputRef.current) inputRef.current.focus();
  }, [isActive]);

  return (
    <div
      id="hdmsinputMP"
      className={isActive ? "active" : ""}
      ref={containerRef}
    >
      <div id="hdmsboxMP">
        <input type="text" placeholder="SEARCH 핀아" ref={inputRef} />
      </div>
      <span>추천 검색어 : 111111111, 222222222, 33333333</span>
    </div>
  );
};

export default Search;
