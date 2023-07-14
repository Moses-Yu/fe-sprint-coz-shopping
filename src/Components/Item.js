import React from "react";
import styled from "styled-components";
import { EXHIBITION, BRAND, PRODUCT, CATEGORY } from "./Type";

const ItemWrapper = styled.div`
  display: flex;
  width: 16.5rem;
  height: 16.5rem;
  padding-bottom: 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;

  img {
    width: 16.5rem;
    height: 13.125rem;
    flex-shrink: 0;

    border-radius: 0.75rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .info_top,
  .info_bottom {
    display: flex;
    width: 16.5rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .top_left {
    width: fit-content;
    color: #000;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  .top_right {
    width: fit-content;

    color: #452cdd;

    text-align: right;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  .bottom_left {
    width: fit-content;
    color: #000;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .bottom_right {
    width: fit-content;

    color: #000;
    text-align: right;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .brand {
    color: #000;
    text-align: right;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

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
