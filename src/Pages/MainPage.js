import { useEffect } from "react";
import ItemList from "../Components/ItemList";
import MainPageStyle from "./styles/MainPage.styled"
function MainPage({ all }) {
  
  useEffect(() => {

  })

  return (
    <MainPageStyle>
      <h1>상품 리스트</h1>
      <ItemList list={all.slice(0, 4)}/>
      <h1>북마크 리스트</h1>
      <ItemList list={all.slice(0, 4)}/>
    </MainPageStyle>
  );
}
export default MainPage;
