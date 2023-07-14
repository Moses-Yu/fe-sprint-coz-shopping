import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import BookMarkPage from "./Pages/BookMarkPage"
import ProductListPage from "./Pages/ProductListPage"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { EXHIBITION, PRODUCT, BRAND, CATEGORY } from "./Components/Type";

function App() {
  const [all, setAll] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [exhibitions, setExhibitions] = useState([]);
  const [brands, setBrands] = useState([]);

  const requestInfo = (count) => {
    axios({
      method: "get",
      url: "http://cozshopping.codestates-seb.link/api/v1/products",
      params:{
        count
      }
    }).then(function (response) {
      setAll(response.data);
      console.log(response.data);
    });
  }
  
  useEffect(() => {
    requestInfo(10)
  }, []);

  useEffect(() => {
    const filterByType = () => {
      const p = []
      const e = []
      const b = []
      const c = []
      all.forEach((el) => {
        const type = el.type;
        switch (type) {
          case PRODUCT:
            p.push(el)
            break;
          case EXHIBITION:
            e.push(el)
            break;
          case BRAND:
            b.push(el)
            break;
          case CATEGORY:
            c.push(el)
            break;
          default:
            break;
        }
      });

      setProducts(p)
      setCategories(c)
      setExhibitions(e)
      setBrands(b)
    };

    filterByType();
    return () => {};
  }, [all]);

  return (
    <div className="App">
      <Header />
      {// 테스트코드
      all.map((el) => (
        <div>{el.title}</div>
      ))}
      <Routes>
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/bookmark" element={<BookMarkPage></BookMarkPage>} />
        <Route path="/products/list" element={<ProductListPage></ProductListPage>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
