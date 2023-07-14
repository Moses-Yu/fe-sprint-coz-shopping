import React from "react";
import DropdownStyle from "./Dropdown_styled";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <DropdownStyle>
      <img src="/images/polygon.png" alt=""></img>
      <ul>
        <li className="mypage">유효재님, 안녕하세요!</li>
        <Link to={"/products/list"} style={{ textDecoration: "none" }}>
          <li className="link_li">
            <div className="li_icon">
              <img src="/images/present.svg" alt=""></img>
              상품리스트 페이지
            </div>
          </li>
        </Link>
        <Link to={"/bookmark"} style={{ textDecoration: "none" }}>
          <li className="link_li">
            <div className="li_icon">
              <img src="/images/star.svg" alt=""></img>
              북마크 페이지
            </div>
          </li>
        </Link>
      </ul>
    </DropdownStyle>
  );
};

export default Dropdown;
