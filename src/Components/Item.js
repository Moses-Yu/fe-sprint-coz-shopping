import React from "react";
import ItemWrapper from "./styles/Item.styled"
import { EXHIBITION, BRAND, PRODUCT, CATEGORY } from "./Type";

const Item = ({ item }) => {
  return (
    <ItemWrapper>
      <img
        alt={
          item.type === BRAND
            ? item.brand_name
            : item.type === CATEGORY
            ? "# " + item.title
            : item.title
        }
        src={item.type === BRAND ? item.brand_img_url : item.image_url}
      ></img>
      <div className="info">
        <div className="info_top">
          <div className="top_left">
            {item.type === BRAND
              ? item.brand_name
              : item.type === CATEGORY
              ? "# " + item.title
              : item.title}
          </div>
          <div className={`top_right ${item.type === BRAND ? "brand" : null}`}>
            {item.type === BRAND
              ? "관심고객수"
              : item.discountPercentage
              ? item.discountPercentage + "%"
              : null}
          </div>
        </div>
        <div className="info_bottom">
          <div className="bottom_left">{item.sub_title}</div>
          <div className="bottom_right">
            {item.type === BRAND
              ? item.follower
              : item.type === PRODUCT
              ? item.price + "원"
              : null}
          </div>
        </div>
      </div>
    </ItemWrapper>
  );
};

export default Item;
