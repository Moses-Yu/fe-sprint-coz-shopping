import Item from "./Item";
import React from "react";
import ItemWrapper from "./styles/ItemList.styled";

const ItemList = ({ list, bookMarks, setBookMarks }) => {
  return (
    <ItemWrapper>
      {list.map((el) => (
        <Item
          key={el.id}
          item={el}
          bookMarks={bookMarks}
          setBookMarks={setBookMarks}
        ></Item>
      ))}
    </ItemWrapper>
  );
};

export default ItemList;
