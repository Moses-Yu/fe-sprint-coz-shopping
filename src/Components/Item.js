import React, { useEffect, useState } from "react";
import ItemWrapper from "./styles/Item.styled";
import { BRAND, PRODUCT, CATEGORY } from "./Type";
import ItemModal from "./ItemModal";
import BookMark from "./BookMark";

const Item = ({ item, bookMarks, setBookMarks }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [info, setInfo] = useState({});
  const [loaded, setLoaded] = useState(false);

  const handleClick = () => setModalIsOpen(true);

  const sortData = () => {
    const info = {};
    info.img_alt =
      item.type === BRAND
        ? item.brand_name
        : item.type === CATEGORY
        ? "# " + item.title
        : item.title;
    info.img_url = item.type === BRAND ? item.brand_image_url : item.image_url;
    info.name =
      item.type === BRAND
        ? item.brand_name
        : item.type === CATEGORY
        ? "# " + item.title
        : item.title;
    info.css = item.type === BRAND ? "brand" : null;
    info.top_right_text =
      item.type === BRAND
        ? "관심고객수"
        : item.discountPercentage
        ? item.discountPercentage + "%"
        : null;
    info.subtitle = item.sub_title;
    info.bottom_right_text =
      item.type === BRAND
        ? item.follower
        : item.type === PRODUCT
        ? item.price + "원"
        : null;
    setInfo(info);
  };
  useEffect(() => {
    setLoaded(false);
    sortData();
    setLoaded(true);
  }, [item]);

  return (
    <>
      {loaded ? (
        <ItemWrapper onClick={handleClick}>
          <img alt={info.img} src={info.img_url}></img>
          <div className="info">
            <div className="info_top">
              <div className="top_left">{info.name}</div>
              <div className={`top_right ${info.css}`}>
                {info.top_right_text}
              </div>
            </div>
            <div className="info_bottom">
              <div className="bottom_left">{info.subtitle}</div>
              <div className="bottom_right">{info.bottom_right_text}</div>
            </div>
          </div>
          <BookMark
            item={item}
            bookMarks={bookMarks}
            setBookMarks={setBookMarks}
          ></BookMark>
        </ItemWrapper>
      ) : null}
      {modalIsOpen && (
        <ItemModal
          name={info.name}
          image_url={info.img_url}
          setModalIsOpen={setModalIsOpen}
          item={item}
          bookMarks={bookMarks}
          setBookMarks={setBookMarks}
        />
      )}
    </>
  );
};

export default Item;
