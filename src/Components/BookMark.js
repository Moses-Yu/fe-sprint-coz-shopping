import React, { useEffect, useState } from "react";
import styled from "styled-components";
const BookMarkStyle = styled.svg`
  position: absolute;
  margin-left: ${props => props.$isModal===true ? "1.5rem" : "14.25rem"};
  margin-top: ${props => props.$isModal===true ? "26.81rem" : "10.87rem"};
    z-index: ${props => props.$isModal===true ? 15 : 0};
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1));

  &:hover {
    cursor: pointer;
  }
`;
const BookMark = ({ item, bookMarks, setBookMarks, $isModal }) => {
  const [checked, setChecked] = useState(false);
  const addBookMark = (item) => {
    let arr = [];
    if (JSON.parse(localStorage.getItem("bookmarks"))) {
      arr = [...JSON.parse(localStorage.getItem("bookmarks"))];
    }
    arr.unshift(item);
    localStorage.setItem("bookmarks", JSON.stringify(arr));
    setBookMarks(arr);
  };
  const removeBookMark = (item) => {
    let arr = [];
    if (JSON.parse(localStorage.getItem("bookmarks"))) {
      arr = [...JSON.parse(localStorage.getItem("bookmarks"))];
    }
    arr = arr.filter((el) => el.id !== item.id);
    localStorage.setItem("bookmarks", JSON.stringify(arr));
    setBookMarks(arr);
  };
  const handleClick = (e) => {
    e.stopPropagation();
    if (checked) {
      setChecked(false);
      removeBookMark(item);
    } else {
      setChecked(true);
      addBookMark(item);
    }
  };
  useEffect(() => {
    if (
      bookMarks.reduce((acc, cur) => (cur.id === item.id ? true : acc), false)
    ) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [bookMarks, item.id]);
  return (
    <BookMarkStyle
        $isModal={$isModal ? true : false}
      onClick={handleClick}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <g filter="url(#filter0_d_3_106)">
        <path
          d="M13.9994 22.1062L8.18253 25.7753C7.92556 25.9465 7.65691 26.0199 7.37658 25.9954C7.09625 25.971 6.85096 25.8731 6.64071 25.7019C6.43046 25.5307 6.26693 25.3164 6.15013 25.0591C6.03332 24.8018 6.00996 24.5146 6.08005 24.1976L7.62187 17.2631L2.47078 12.6035C2.23717 12.3833 2.0914 12.1324 2.03347 11.8506C1.97553 11.5688 1.99282 11.2939 2.08533 11.0258C2.17877 10.7567 2.31894 10.5366 2.50582 10.3654C2.69271 10.1942 2.94968 10.0841 3.27673 10.0352L10.0748 9.41143L12.7029 2.88057C12.8197 2.58704 13.001 2.3669 13.2467 2.22014C13.4925 2.07338 13.7434 2 13.9994 2C14.2564 2 14.5073 2.07338 14.7521 2.22014C14.9969 2.3669 15.1782 2.58704 15.2959 2.88057L17.924 9.41143L24.7221 10.0352C25.0491 10.0841 25.3061 10.1942 25.493 10.3654C25.6799 10.5366 25.82 10.7567 25.9135 11.0258C26.0069 11.2949 26.0247 11.5703 25.9667 11.8521C25.9088 12.1338 25.7626 12.3843 25.528 12.6035L20.3769 17.2631L21.9188 24.1976C21.9888 24.5156 21.9655 24.8032 21.8487 25.0605C21.7319 25.3179 21.5683 25.5317 21.3581 25.7019C21.1478 25.8731 20.9026 25.971 20.6222 25.9954C20.3419 26.0199 20.0732 25.9465 19.8163 25.7753L13.9994 22.1062Z"
          fill={checked ? "#FFD361" : "#DFDFDF"}
          fillOpacity="0.81"
        />
        <path
          d="M13.9994 22.1062L8.18253 25.7753C7.92556 25.9465 7.65691 26.0199 7.37658 25.9954C7.09625 25.971 6.85096 25.8731 6.64071 25.7019C6.43046 25.5307 6.26693 25.3164 6.15013 25.0591C6.03332 24.8018 6.00996 24.5146 6.08005 24.1976L7.62187 17.2631L2.47078 12.6035C2.23717 12.3833 2.0914 12.1324 2.03347 11.8506C1.97553 11.5688 1.99282 11.2939 2.08533 11.0258C2.17877 10.7567 2.31894 10.5366 2.50582 10.3654C2.69271 10.1942 2.94968 10.0841 3.27673 10.0352L10.0748 9.41143L12.7029 2.88057C12.8197 2.58704 13.001 2.3669 13.2467 2.22014C13.4925 2.07338 13.7434 2 13.9994 2C14.2564 2 14.5073 2.07338 14.7521 2.22014C14.9969 2.3669 15.1782 2.58704 15.2959 2.88057L17.924 9.41143L24.7221 10.0352C25.0491 10.0841 25.3061 10.1942 25.493 10.3654C25.6799 10.5366 25.82 10.7567 25.9135 11.0258C26.0069 11.2949 26.0247 11.5703 25.9667 11.8521C25.9088 12.1338 25.7626 12.3843 25.528 12.6035L20.3769 17.2631L21.9188 24.1976C21.9888 24.5156 21.9655 24.8032 21.8487 25.0605C21.7319 25.3179 21.5683 25.5317 21.3581 25.7019C21.1478 25.8731 20.9026 25.971 20.6222 25.9954C20.3419 26.0199 20.0732 25.9465 19.8163 25.7753L13.9994 22.1062Z"
          fill={checked ? "#FFD361" : "#DFDFDF"}
          fillOpacity="0.81"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_3_106"
          x="0"
          y="0"
          width="32"
          height="32"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3_106"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3_106"
            result="shape"
          />
        </filter>
      </defs>
    </BookMarkStyle>
  );
};

export default BookMark;
