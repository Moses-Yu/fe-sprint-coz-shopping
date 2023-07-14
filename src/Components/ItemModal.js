import React from "react";
import ItemModalStyle from "./styles/ItemModal.styled";
const ItemModal = ({ name, bookmark, image_url }) => {
  return (
    <ItemModalStyle>
      <div>
        <img src={image_url} alt=""/>
        <img alt="close" src="/images/ic-round-close.svg"></img>
        <div>{name}</div>
      </div>
    </ItemModalStyle>
  );
};

export default ItemModal;
