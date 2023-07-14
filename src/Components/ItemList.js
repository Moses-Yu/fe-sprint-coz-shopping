import Item from "./Item";
import ItemWrapper from "./styles/ItemList.styled";

const ItemList = ({ list }) => {
  return (
    <ItemWrapper>
      {list.map((el) => 
        <Item key={el.id} item={el}></Item>
      )}
    </ItemWrapper>
  );
};

export default ItemList;
