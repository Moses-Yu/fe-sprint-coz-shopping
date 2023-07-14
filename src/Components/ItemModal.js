import React from "react";

const ItemModal = ({ name, bookmark, image_url }) => {
  return (
    <div>
      <div>
        <img src={image_url} alt=""/>
        <img alt="close" src="/images/ic-round-close.svg"></img>
        <div>{name}</div>
      </div>
    </div>
  );
};

export default ItemModal;
