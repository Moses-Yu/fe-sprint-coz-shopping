import { useEffect } from "react";
import ItemList from "../Components/ItemList";
import MainPageStyle from "./styles/MainPage.styled";
function MainPage({ all, bookMarks, setBookMarks }) {
  useEffect(() => {});

  return (
    <MainPageStyle>
      <h1>상품 리스트</h1>
      <ItemList
        list={all.slice(0, 4)}
        bookMarks={bookMarks}
        setBookMarks={setBookMarks}
      />
      <h1>북마크 리스트</h1>
      <ItemList
        list={bookMarks.slice(0, 4)}
        bookMarks={bookMarks}
        setBookMarks={setBookMarks}
      />
    </MainPageStyle>
  );
}
export default MainPage;
